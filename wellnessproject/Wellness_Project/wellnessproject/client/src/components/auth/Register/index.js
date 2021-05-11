//!!!! !!!! !!!! !!!! !!!!
import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Link, withRouter, useHistory } from 'react-router-dom';
import PropTypes from "prop-types";
import { registerUser } from "../../../actions/authActions";
import classnames from "classnames";
import './register.css';

const Register = () => {
    let history = useHistory();
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [errors, setErrors] = useState('');

    const handleNameChange = event => setName(event.target.value);
    const handleEmailChange = event => setEmail(event.target.value);
    const handlePasswordChange = event => setPassword(event.target.value);
    const handlePassword2Change = event => setPassword2(event.target.value);

    const handleSubmit = event => {
        event.preventDefault();

        const newUser = {
            name: name,
            email: email,
            password: password,
            password2: password2
        };
       dispatch(registerUser(newUser))
        .then(() => {
            history.push('/login')
            console.log("worked")
          //setSuccessful(true);
        })
        .catch(() => {
            console.log("didnt work")
          //setSuccessful(false);
        });
    };
    

    return (
        <div className='register-form col-md-3'>
            <h2>Sign Up</h2>
            <form>
                <div>
                    <input 
                    id='name'
                    type='text'
                    placeholder='Name'
                    onChange={handleNameChange}
                    className={classnames('', {
                        invalid: errors.name
                    })}
                    />
                    <span>{errors.name}</span>
                </div>
                <div>
                    <input
                    id='email'
                    type='email'
                    placeholder='Email' 
                    onChange={handleEmailChange}
                    className={classnames('', {
                        invalid: errors.email
                    })}
                    />
                    <span>{errors.email}</span>
                </div>
                <div>
                    <input
                    id='password'
                    type='password'
                    placeholder='Password'
                    onChange={handlePasswordChange}
                    className={classnames('', {
                    invalid: errors.password
                    })}
                    />
                    <span>{errors.password}</span>
                </div>
                <div>
                    <input
                    id='password2'
                    type='password'
                    placeholder='Confirm Password'
                    onChange={handlePassword2Change}
                    className={classnames('', {
                    invalid: errors.password2
                    })}
                    />
                    <span>{errors.password2}</span>
                </div>
                <div>
                    <button 
                    className='btn btn-large'
                    type='submit'
                    onClick={handleSubmit}
                    >
                    Submit
                    </button>
                </div>
                <p>Already have an account?</p>
                <Link to='/login'>
                    Login
                </Link>
            </form>
        </div>
    )
}

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
  };

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
  });

export default connect(
    mapStateToProps,
    { registerUser }
) (withRouter(Register));
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import { connect, useDispatch } from "react-redux";
import { loginUser } from "../../../actions/authActions";
import classnames from "classnames";
import './login.css';

const Login = () => {

    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const handleEmailChange = event => setEmail(event.target.value);
    const handlePasswordChange = event => setPassword(event.target.value);

    const handleSubmit = event => {
        event.preventDefault();

        const userData = {
            email: email,
            password: password
        };
        dispatch(loginUser(userData))
        .then(() => {

            console.log('worked');
            
        })
        .catch(() => {
            console.log('Broke')
        })
    };

    return(
        <div className='col-md-3 login-form'>
            <form>
                <h2>Login</h2>
                <div>
                    <input 
                    id='email'
                    type='email'
                    placeholder='Email'
                    onChange={handleEmailChange}
                    className={classnames("", {
                        invalid: errors.email || errors.emailnotfound
                      })}
                    />
                    <span>
                        {errors.email}
                        {errors.emailnotfound}
                    </span>
                </div>
                <div>
                    <input
                    id='password'
                    type='password'
                    placeholder='Password'
                    onChange={handlePasswordChange}
                    className={classnames("", {
                        invalid: errors.password || errors.passwordincorrect
                      })}
                    />
                    <span>
                        {errors.email}
                        {errors.emailnotfound}
                    </span>
                </div>
                <div>
                    <button
                    type='submit'
                    className='btn btn-large'
                    onClick={handleSubmit}
                    >
                    Submit
                    </button>
                </div>
            </form>
            <p>Dont have an account, sign in?</p>
            <Link to='/register'>
                Sign up
            </Link>
        </div>        
    )
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
  };

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
  });

export default connect(
    mapStateToProps,
    { loginUser }
) (Login);
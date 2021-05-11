import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import './Login.css';
import PropTypes from 'prop-types'
import LoginPage from '../../../../wellproject/src/pages/LoginPage';
import SignUpPage from '../../../../wellproject/src/pages/SignUpPage';
async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
    .then(data => data.json())
}

export default function Login({ setToken }) {
    const [userName, setUserName] = useState();
    const [passWord, setPassWord] = useState();

    const handleSubmit = async event => {
        event.preventDefault();
        const token = await loginUser({
            userName,
            passWord
        });
        setToken(token);
    }

    return (
        <div className='login-signup'>
        <Router>
        <Switch>
          <Route exact path={['/', '/login']}>
          <LoginPage 
            handleSubmit={handleSubmit} 
            setUserName={setUserName}
            setPassWord={setPassWord} />
          </Route>
          <Route exact path='/signup'>
            <SignUpPage 
            handleSubmit={handleSubmit} 
            setUserName={setUserName}
            setPassWord={setPassWord} />
          </Route>
        </Switch>
        </Router>
        </div>
    );
};

Login.propTypes = {
    setToken: PropTypes.func.isRequired
};
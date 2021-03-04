import React, { useState } from 'react';

import { loginService } from '../../services';
import './style.css';

function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="container">
            <form className="form">
                <h1 className="landing-header">Todo List</h1>
                <h2>Login</h2>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        placeholder="Email"
                        className="credentials"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Password"
                        className="credentials"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button
                    type="submit"
                    onClick={(e) => {
                        e.preventDefault();
                        handleLogin(email, password)
                    }}
                >
                    Login
                </button>
            </form>
        </div>
    );
}

async function handleLogin(email, password) {
    try {
        const token = await loginService(email, password);
        localStorage.setItem('userToken', `Bearer ${token}`);
    } catch (e) {
        console.log(e);
        debugger;
    }
}

export default Login;
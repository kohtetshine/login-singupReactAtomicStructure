import React, { useState } from 'react';
import FormGroup from '../molecules/FormGroup';
import ButtonAtom from '../atoms/ButtonAtom';
import LinkButtonAtom from '../atoms/LinkButtonAtom';

const LoginForm = ({ onToggleForm }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            setError('Please fill out all fields.');
            return;
        }
        console.log('Logging in with:', { email, password });
        setError('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <FormGroup
                type="email"
                id="email"
                label="Email"
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                error={!email && error === 'Please fill out all fields.' ? error : ''}
            />
            <FormGroup
                type="password"
                id="password"
                label="Password"
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                error={!password && error === 'Please fill out all fields.' ? error : ''}
            />
            <ButtonAtom text="Login" onClick={handleSubmit} />
            <LinkButtonAtom
                text="Don't have an account? Sign Up"
                onClick={onToggleForm}
            />
        </form>
    );
};

export default LoginForm;

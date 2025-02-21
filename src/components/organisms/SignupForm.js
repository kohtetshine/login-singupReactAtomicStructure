import React, { useState } from 'react';
import FormGroup from '../molecules/FormGroup';
import ButtonAtom from '../atoms/ButtonAtom';
import LinkButtonAtom from '../atoms/LinkButtonAtom';

const SignupForm = ({ onToggleForm }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password || !confirmPassword) {
            setError('Please fill out all fields.');
            return;
        }
        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }
        console.log('Signing up with:', { email, password, confirmPassword });
        setError('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Sign Up</h2>
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
            <FormGroup
                type="password"
                id="confirmPassword"
                label="Confirm Password"
                placeholder="Confirm your password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
                error={
                    (!confirmPassword && error === 'Please fill out all fields.') ||
                        error === 'Passwords do not match.'
                        ? error
                        : ''
                }
            />
            <ButtonAtom text="Sign Up" onClick={handleSubmit} />
            <LinkButtonAtom
                text="Already have an account? Login"
                onClick={onToggleForm}
            />
        </form>
    );
};

export default SignupForm;

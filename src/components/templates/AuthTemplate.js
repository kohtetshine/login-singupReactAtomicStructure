import React from 'react';
import LoginForm from '../organisms/LoginForm';
import SignupForm from '../organisms/SignupForm';

const AuthTemplate = ({ isSignup, onToggleForm }) => (
    <div className="auth-container">
        {isSignup ? (
            <SignupForm onToggleForm={onToggleForm} />
        ) : (
            <LoginForm onToggleForm={onToggleForm} />
        )}
    </div>
);

export default AuthTemplate;

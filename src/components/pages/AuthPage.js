import React, { useState } from 'react';
import AuthTemplate from '../templates/AuthTemplate';

const AuthPage = () => {
    const [isSignup, setIsSignup] = useState(false);

    const handleToggleForm = () => {
        setIsSignup(!isSignup);
    };

    return (
        <div className="auth-page">
            <AuthTemplate
                isSignup={isSignup}
                onToggleForm={handleToggleForm}
            />
        </div>
    );
};

export default AuthPage;

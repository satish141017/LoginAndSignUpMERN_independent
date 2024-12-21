import React from 'react';
import { useNavigate } from 'react-router-dom';

function Switch({ login }) {
    const navigate = useNavigate();

    return (
        <div className="flex justify-center items-center">
            <span className="text-gray-700 mr-2">
                {login ? "Don't have an account?" : "Already have an account?"}
            </span>
            <span
                className="text-blue-700 cursor-pointer"
                onClick={() => login ? navigate('/signup') : navigate('/signin')}
            >
                {login ? "Sign Up" : "Log In"}
            </span>
        </div>
    );
}

export default Switch;
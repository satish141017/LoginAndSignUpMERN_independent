import React from 'react';

function Switch({ login, setLogin }) {
    return (
        <div className="flex justify-center items-center">
            <span className="text-gray-700 mr-2">
                {login ? "Don't have an account?" : "Already have an account?"}
            </span>
            <span
                className="text-blue-700 cursor-pointer"
                onClick={() => setLogin(l => !l)}
            >
                {login ? "Sign Up" : "Log In"}
            </span>
        </div>
    );
}

export default Switch;
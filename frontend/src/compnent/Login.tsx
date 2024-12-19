import React from "react";

function Login() {
    return (
        <>
            <div className="flex text-base font-sans justify-center items-center w-full h-screen bg-slate-500">
                <div >
                    <div className="flex w-full justify-center items-center space-x-4">
                        <h1 className="text-4xl font-bold text-gray-800">Log In</h1>
                    </div>
                    <div className="flex w-full border-2 m-5 bg-slate-300 rounded p-4">
                        <span className="flex items-center">
                            {/* //svg incon not writen by me */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-8 h-8"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                />
                            </svg>
                        </span>
                        <span className="ml-4 flex-grow">
                            <input
                                type="text"
                                className="focus:outline-none w-80 h-10 p-2 bg-slate-300 rounded text-lg"
                                id="username"
                                placeholder="Username or Email"
                            />
                        </span>
                    </div>
                    <div className="flex w-full border-2 m-5 bg-slate-300 rounded p-4">
                        <span className="flex items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-8 h-8"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                                />
                            </svg>
                        </span>
                        <span className="ml-4 flex-grow">
                            <input
                                type="password"
                                className="focus:outline-none w-80 h-10 p-2 bg-slate-300 rounded text-lg"
                                id="password"
                                placeholder="Password"
                            />
                        </span>
                    </div>
                    <button className="flex  w-full p-4 m-5 justify-center items-center border-2 rounded bg-grey-800 text-lg">
                        LogIn
                    </button>
                </div>
            </div >
        </>
    );
}

export default Login;

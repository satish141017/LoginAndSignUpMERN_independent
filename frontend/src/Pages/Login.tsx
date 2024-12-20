import React from "react";
import InputBox from "../compnent/InputBox";
import Button from "../compnent/Button";
import Heading from "../compnent/Heading";
import About from "../compnent/About";
import Switch from "../compnent/Switch";


function Login() {
    return (

        <div className="flex justify-center items-center text-base font-sans  w-screen h-screen ">
            <div className="w-auto sm:w-96">
                <Heading text="LogIn" />
                <About text="Login to our website" />
                <InputBox placeHolder='Username or Email' label='username' />
                <InputBox placeHolder='Password' label='password' />

                <Button text="LogIn" />
                <Switch text="Dont have an account ? " buttonText="Create New" />

            </div>
        </div >

    );
}

export default Login;

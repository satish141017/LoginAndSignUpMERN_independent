import React, { useState } from "react";
import InputBox from "../compnent/InputBox";
import Button from "../compnent/Button";
import Heading from "../compnent/Heading";
import About from "../compnent/About";
import Switch from "../compnent/Switch";
import { signinapi } from "../services/apiServices"
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    return (

        <div className="flex justify-center items-center text-base font-sans w-screen h-screen  ">
            <form className="w-auto sm:w-96" onSubmit={(e) => e.preventDefault()}>
                <Heading text="LogIn" />
                <About text="Login to our website" />
                <InputBox onChange={(e) => setUsername(e.target.value)} placeHolder='Username or Email' label='username' />
                <InputBox onChange={(e) => setPassword(e.target.value)} placeHolder='Password' label='password' />

                <Button onClick={async () => {
                    const user = { username, password }
                    console.log('a');
                    const res = await signinapi(user);
                    console.log('Z');

                    console.log(res);
                    if (res.success) navigate('/otherRoute')
                }} text="LogIn" />
                <Switch login={true} />

            </form>
        </div >

    );
}

export default Login;

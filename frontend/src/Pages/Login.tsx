import React, { useState } from "react";
import InputBox from "../component/InputBox";
import Button from "../component/Button";
import Heading from "../component/Heading";
import About from "../component/About";
import Switch from "../component/Switch";
import { signinapi } from "../services/apiServices"
import { useNavigate } from "react-router-dom";
import { log } from "console";

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

                <Button
                    onClick={async () => {
                        const user = { username, password };
                        const res = await signinapi(user);
                        if (res.success) navigate('/otherRoute');
                    }}
                    text="LogIn" />
                <Switch login={true} />

            </form>
        </div >

    );
}

export default Login;

import React, { useState } from "react";
import InputBox from "../component/InputBox";
import Button from "../component/Button";
import Heading from "../component/Heading";
import About from "../component/About";
import Switch from "../component/Switch";
import { signupapi } from "../services/apiServices";
import { useNavigate } from "react-router-dom";

function Signup() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState("");
    const user = {};
    return <div className="flex justify-center items-center text-base font-sans  w-screen h-screen">
        <form className="w-auto sm:w-96" onSubmit={(e) => e.preventDefault()}>
            <Heading text="SignUp" />
            <About text="Create a new Accout" />
            <InputBox onChange={(e) => setEmail(e.target.value)} placeHolder='Email' label='email' />
            <InputBox onChange={(e) => setUsername(e.target.value)} placeHolder='username' label='username' />
            <InputBox onChange={(e) => setName(e.target.value)} placeHolder='Full Name' label='name' />
            <InputBox onChange={(e) => setPassword(e.target.value)} placeHolder='password' label='password' />
            <InputBox onChange={(e) => setAddress(e.target.value)} placeHolder='address' label='address' />
            <Button onClick={async () => {
                const user = { email, username, name, password, address }
                const res = await signupapi(user);
                if (res.success) navigate('/otherRoute');

            }} text="Signup" />
            <Switch login={false} />



        </form>
    </div >


}
export default Signup;
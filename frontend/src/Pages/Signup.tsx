import React from "react";
import InputBox from "../compnent/InputBox";
import Button from "../compnent/Button";
import Heading from "../compnent/Heading";
import About from "../compnent/About";
import Switch from "../compnent/Switch";
function Signup() {
    return <div className="flex justify-center items-center text-base font-sans  w-screen h-screen ">
        <div className="w-auto sm:w-96">
            <Heading text="SignUp" />
            <About text="Create a new Accout" />
            <InputBox placeHolder='Email' label='email' />
            <InputBox placeHolder='username' label='username' />
            <InputBox placeHolder='Full Name' label='name' />
            <InputBox placeHolder='password' label='password' />
            <InputBox placeHolder='address' label='address' />


            <Button text="Signup" />
            <Switch text={"Already have an account ?     "} buttonText={'LogIn'} />


        </div>
    </div >


}
export default Signup;
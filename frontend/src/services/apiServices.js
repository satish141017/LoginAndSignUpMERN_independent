import axios from "axios";
const SIGN_IN_URL = "http://localhost:3000/signin";
const SIGN_UP_URL = "http://localhost:3000/signup";
const POST_OTHER_ROUTE = "http://localhost:3000/otherRoute";

async function signupapi(user) {
    try {
        const res = await axios.post(SIGN_UP_URL, user);
        localStorage.setItem("token", res.data.token);
        return res.data;
    } catch (error) {
        console.error("Error during signup:", error);
        throw error;
    }
}

async function signinapi(user) {
    try {
        console.log(user);
        const res = await axios.post(SIGN_IN_URL, {}, {
            headers: {
                ...user
            }
        });

        localStorage.setItem("token", res.data.token);
        return res.data;

    } catch (error) {

        console.error("Error during signin:", error);
        return {
            success: false,
            msg: "Invalid Credentials"
        }

    }
}

async function accessOtherRoute() {
    try {


        const val = localStorage.getItem('token');


        const res = await axios.get(POST_OTHER_ROUTE, {
            headers: { token: val }
        });

        return res.data;
    } catch (error) {
        console.error("Error during accessOtherRoute:", error);
        throw error;
    }
}

export { signupapi, signinapi, accessOtherRoute };
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
        return error.response.data;
    }
}

async function signinapi(user) {
    try {

        const res = await axios.post(SIGN_IN_URL, {}, {
            headers: {
                ...user
            }
        });

        localStorage.setItem("token", res.data.token);
        return res.data;

    } catch (error) {

        console.error("Error during signin:", error);
        return error.response.data;
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
        return error.response.data;

        // throw error;
    }
}

export { signupapi, signinapi, accessOtherRoute };
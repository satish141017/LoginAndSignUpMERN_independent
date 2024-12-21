import axios from "axios";
const SIGN_IN_URL = "http://localhost:3000/signin";
const SIGN_UP_URL = "http://localhost:3000/signup";
const POST_OTHER_ROUTE = "http://localhost:3000/otherRoute";

async function signupapi(user) {
    try {
        console.log('c');
        const res = await axios.post(SIGN_UP_URL, user);
        console.log('d');
        localStorage.setItem("token", res.data.token);
        console.log('e');
        return res.data;
    } catch (error) {
        console.log('errrrrrrrr');
        console.error("Error during signin:", error);
        throw error;
    }
}

async function signinapi(user) {
    try {
        console.log('c');
        const res = await axios.post(SIGN_IN_URL, {}, {
            headers: user
        });
        if (!res.data.token) {
            return {
                success: false
            }
        }

        console.log('d');
        localStorage.setItem("token", res.data.token);
        console.log('e');
        return res.data;
    } catch (error) {
        console.log('errrrrrrrrrrrrrrrrr');
        console.error("Error during signin:", error);
        throw error;
    }
}
async function accessOtherRoute() {
    try {
        console.log('hiiiiiiiiiiiiiii');
        const val = localStorage.getItem('token')
        // console.log('hiiiiiiiiiiiiiii');
        console.log(val);
        const res = await axios.get(POST_OTHER_ROUTE, {}, {
            headers: { token: val }
        })
        console.log(res);
        return res;
    } catch (error) {
        console.error("Error during signin:", error);
        throw error;
    }


}



export { signupapi, signinapi, accessOtherRoute };
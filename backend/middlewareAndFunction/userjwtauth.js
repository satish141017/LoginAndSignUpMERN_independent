const jwt = require('jsonwebtoken');

require('dotenv').config();

function userjwtauthmiddleware(req, res, next) {

    const authtoken = req.headers.token.split(' ')[1];
    // console.log(authtoken);
    const data = jwt.verify(authtoken, process.env.SECRET_JWT);
    console.log(data);

    if (data.username) {
        next();
        return;
    } else {
        res.status(401).json({
            success: false,
            msg: "Authentication failed, please login to continue",
        });
    }


}

function assignToken(data) {
    const token = jwt.sign(data, process.env.SECRET_JWT);
    return token;

}
function verifyToken(token) {

    try {
        const data = jwt.verify(token, process.env.SECRET_JWT);
        if (data.username) {
            return {
                verify: true,
                data: data
            };
        }
    } catch (err) {
        return {
            verify: false,
            data: "",
            error: "Invalid or expired token"
        };
    }
    return {
        verify: false,
        data: "",
        error: "No username found in token"
    };

}



module.exports = {
    userjwtauthmiddleware,
    assignToken,
    verifyToken
}
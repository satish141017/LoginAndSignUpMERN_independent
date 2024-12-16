const jwt = require('jsonwebtoken');

require('dotenv').config();

/**
 * Middleware to authenticate users using JWT.
 * Extracts the token from the request header, verifies it, and checks for a valid username in the token payload.
 * If valid, it allows the request to proceed to the next middleware or route handler.
 * 
 * @param {Object} req - The Express request object.
 * @param {Object} res - The Express response object.
 * @param {Function} next - The next middleware function.
 */
function userjwtauthmiddleware(req, res, next) {
    const authtoken = req.headers.token.split(' ')[1];
    const data = jwt.verify(authtoken, process.env.SECRET_JWT);

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

/**
 * Generates a JWT token for the given data.
 * Signs the token with the secret key from the environment variables.
 * 
 * @param {Object} data - The data to encode in the JWT token (e.g., user information).
 * @returns {string} The signed JWT token.
 */
function assignToken(data) {
    const token = jwt.sign(data, process.env.SECRET_JWT);
    return token;
}

/**
 * Verifies the provided JWT token.
 * Checks if the token is valid and contains a username in the payload.
 * Returns the verification result and decoded data if valid.
 * 
 * @param {string} token - The JWT token to verify.
 * @returns {Object} An object containing the verification status and decoded data.
 */
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

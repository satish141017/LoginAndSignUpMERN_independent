/**
 * This module provides functions for user management, including schema validation, 
 * database checks, and user operations such as adding and deleting users.
 */

const { User } = require('../db/schema.js');
const zod = require('zod');

// Schema for user sign-up validation
const SignUpSchema = zod.object({
    username: zod.string().min(3),
    email: zod.string().email(),
    password: zod.string().min(8),
    name: zod.string(),
    address: zod.string(),
});

/**
 * Filters user data from the request body.
 * @param {Object} req - The request object.
 * @returns {Object} - The filtered user object.
 */
function filterUserFromBody(req) {
    const user = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        name: req.body.name,
        address: req.body.address,
    };
    return user;
}

/**
 * Middleware to verify the user schema.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 */
function verifySchemaMiddleware(req, res, next) {
    const user = filterUserFromBody(req);
    const verify = SignUpSchema.safeParse(user);
    if (verify.success) {
        next();
        return;
    }
    res.status(400).json({
        success: false,
        msg: "User schema is not in the correct format"
    });
}

/**
 * Verifies the user schema.
 * @param {Object} req - The request object.
 * @returns {Object} - An object containing the verification result and the user object.
 */
function verifySchema(req) {
    const user = filterUserFromBody(req);
    const verify = SignUpSchema.safeParse(user);
    if (verify.success) {
        return {
            verify: true,
            user: user
        };
    }
    return {
        verify: false,
        user: {}
    };
}

/**
 * Middleware to check the user in the database.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 */
async function userDatabaseCheckMiddleWare(req, res, next) {
    try {
        // console.log(req.headers);
        if (!req.headers.username) {
            res.status(400).json({
                success: false,
                msg: "Wrong Input"
            });
            return;
        }
        const data = await User.findOne({
            '$or': [{
                username: req.headers.username
            }, {
                email: req.headers.username
            }]
        });

        if (data && data.password === req.headers.password) {
            next();
        } else if (data) {
            res.status(401).json({
                success: false,
                userMatch: true,
                passMatch: false,
                msg: "username match but pass does not"
            });
        } else {
            res.status(404).json({
                success: false,
                userMatch: false,
                passMatch: false,
                msg: "user does not exist"
            });
        }
    } catch (err) {
        res.status(500).json({
            success: false,
            msg: "Internal server error",
            error: err.message
        });
    }
}

/**
 * Checks the user in the database.
 * @param {string} username - The username.
 * @param {string} password - The password.
 * @returns {Object} - An object containing the check result.
 */
async function userDatabaseCheck(username, password) {
    if (!username) {
        res.status(400).json({
            success: false,
            msg: "Wrong Input"
        });
        return;
    }
    const data = await User.findOne({
        '$or': [{
            username: username
        }, {
            email: username
        }]
    });

    if (data) {
        if (data.password === password) {
            return {
                success: true,
                present: true,
                match: true
            };
        } else {
            return {
                success: false,
                present: true,
                match: false
            };
        }
    }
    return {
        success: false,
        present: false,
        match: false
    };
}

/**
 * Adds a new user to the database.
 * @param {Object} user - The user object.
 * @returns {Object} - An object containing the result of the add user operation.
 */
async function addUser(user) {
    if (!user.username) {
        res.status(400).json({
            success: false,
            msg: "Wrong Input"
        });
        return;
    }
    try {
        const data = await User.findOne({
            '$or': [{
                username: user.username
            }, {
                email: user.email
            }]
        });

        if (data) {
            return { success: false, msg: "User already present in the database" };
        }

        const newUser = new User(user);
        await newUser.save();
        return {
            success: true,
            msg: "User successfully added in the database"
        };
    } catch (err) {
        return {
            success: false,
            error: err.message
        };
    }
}

/**
 * Deletes a user from the database.
 * @param {string} username - The username.
 * @param {string} password - The password.
 * @returns {Object} - An object containing the result of the delete operation.
 */
async function deleteuser(username, password) {
    const check = await userDatabaseCheck(username, password);

    if (check.present && check.match) {
        await User.deleteOne({
            username: username,
            password: password
        });
        return {
            success: true,
            msg: "User successfully deleted from the database"
        };
    } else if (check.present) {
        return {
            success: false,
            msg: "Password does not match"
        };
    } else {
        return {
            success: false,
            msg: "User is not present in the database"
        };
    }
}

module.exports = {
    verifySchemaMiddleware,
    verifySchema,
    userDatabaseCheckMiddleWare,
    userDatabaseCheck,
    addUser,
    deleteuser,
    filterUserFromBody
};
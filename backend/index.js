const express = require('express');
const { verifySchemaMiddleware, verifySchema, userDatabaseCheckMiddleWare, addUser, filterUserFromBody, deleteuser } = require('./middlewareAndFunction/userDbZodFxn');
const { userjwtauthmiddleware, assignToken, verifyToken } = require('./middlewareAndFunction/userjwtauth');
const app = express();
app.use(express.json());


app.post('/signup', verifySchemaMiddleware, async (req, res) => {
    // expect user data in the body format is :
    // {
    //     "username": "tempUser",
    //     "email": "tempUser@example.com",
    //     "password": "tempPassword",
    //     "name": "Temp User",
    //     "address": "123 Temp Street",
    //   
    // }
    const user = filterUserFromBody(req);
    const added = await addUser(user);
    if (added.success) {
        const token = assignToken({
            username: req.body.username,
        })
        res.send({
            success: true,
            token: "Bearer " + token,
            msg: "User successfully added in the database"

        })
        return;
    }
    res.send({
        ...added,
        success: false,


    })



});
app.post('/signin', userDatabaseCheckMiddleWare, function (req, res) {
    // expect headers with username and password format
    // {
    //     'username' : usernamae or email,
    //     'password' : password
    // }

    const token = assignToken({
        username: req.headers.username,
    });
    res.send({
        success: true,
        token: "Bearer " + token

    })
});
app.get('/otherRoute', userjwtauthmiddleware, function (req, res) {
    // ecpect {
    // token : "jwttoken with Bearer written in the front"}
    res.json({
        msg: "Able to verify the auth token"
    })
});
app.delete('/delete', async function (req, res) {
    // expect headers with username and password format
    // {
    //     'username' : usernamae or email,
    //     'password' : password
    // }
    const deleted = await deleteuser(req.headers.username, req.headers.password);
    res.json(deleted);


});

app.listen(3000, () => {
    console.log("server is running on the port 3000");
})

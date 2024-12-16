const mongoose = require("mongoose");
require('dotenv').config();
mongoose.connect(process.env.MONGO_URL);
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    address: String,

}, {
    timestamps: true
});

const User = mongoose.model("User", userSchema);



module.exports = {
    User

};



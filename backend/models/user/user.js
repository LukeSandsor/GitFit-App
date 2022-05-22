const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            trim: true
        },
        password: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            trim: true
        },
        gender: {
            type: String,
            required: true,
            trim: true
        },
        birthday: {
            type: String,
            required: true,
            trim: true
        },
        height: {
            type: Number,
            required: true,
            trim: true
        },
        weight: {
            type: Number,
            required: true,
            trim: true
        },
        name: {
            type: String,
            required: true,
            trim: true
        },
    },
    { collection: "user_list" }
);

const User = mongoose.model("user", UserSchema);

module.exports = User

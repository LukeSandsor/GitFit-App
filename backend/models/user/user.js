const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        firstname: {
            type: String,
            required: true,
            trim: true
        },
        lastname: {
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
    },
    { collection: "personalInfoTest" }
);

const User = mongoose.model("user", UserSchema);

module.exports = User

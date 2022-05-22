const mongoose = require("mongoose");

const WeightsSchema = new mongoose.Schema(
    {
        type: {
            type: String,
            required: true,
            trim: true
        },
        date: {
            type: Date,
            required: true,
            trim: true
        },
        sets: {
            type: String,
            required: true,
            trim: true
        },
        reps: {
            type: Number,
            required: true,
            trim: true,
        },
        weight: {
            type: Number,
            required: true,
            trim: true
        }
    },
    { collection: "weights_history" }
);

const Weights = mongoose.model("Weights", WeightsSchema);

module.exports = Weights

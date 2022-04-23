const mongoose = require("mongoose");

const AdviceSchema = new mongoose.Schema(
    {
        advice: {
            type: String,
            required: true,
            trim: true
        },
        source: {
            type: String,
            required: true,
            trim: true
        },
    },
    { collection: "health_advice" }
);

const Advice = mongoose.model("Advice", AdviceSchema);

module.exports = Advice

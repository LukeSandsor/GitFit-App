const mongoose = require("mongoose");

const NutritionTableSchema = new mongoose.Schema(
    {
        food: {
            type: String,
            required: true,
            trim: true
        },
        average_portion: {
            type: Number,
            required: true
        },
        calories: {
            type: Number,
            required: true
        },
        protein: {
            type: Number,
            required: true
        },
        fats: {
            type: Number,
            required: true
        },
        carbs: {
            type: Number,
            required: true
        }
    },
    { collection: "food_list" }
);

const NutritionTable = mongoose.model("NutritionTable", NutritionTableSchema);

module.exports = {
    NutritionTable: NutritionTable
}
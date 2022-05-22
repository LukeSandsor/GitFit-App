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

const UserNutritionSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            trim: true
        },
        nutritionStats: {
            type: Array,
            required: true
        }
    },
    { collection: "user_nutrition" }
)

const NutritionTable = mongoose.model("NutritionTable", NutritionTableSchema);
const UserNutrition = mongoose.model("UserNutrition", UserNutritionSchema);

module.exports = {
    NutritionTable: NutritionTable,
    UserNutrition: UserNutrition
}
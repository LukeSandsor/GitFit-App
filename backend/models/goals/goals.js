const mongoose = require("mongoose");

const GoalListSchema = new mongoose.Schema(
    {
        goal: {
            type: String,
            required: true,
            trim: true
        },
        calorie_multiplier: {
            type: Number,
            required: true
        }
    },
    { collection: 'goal_list' }
)

const GoalList = mongoose.model('GoalList', GoalListSchema);

module.exports = {
    GoalList: GoalList
}
const mongoose = require("mongoose");

/*const WorkoutSchema = new mongoose.Schema(
    {
        type: {
            type: String,
            required: true,
            trim: true
        },
        name: {
            type: String,
            required: true,
            trim: true
        },
        month: {
            type: Number,
            required: true,
            trim: true
        },
        day: {
            type: Number,
            required: true,
            trim: true
        },
        year: {
            type: Number,
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
);*/

const UserWorkoutSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            trim: true
        },
        workouts: {
            type: Array,
            required: true
        }
    },
    { collection: "weights_history" }
)

const UserWorkout = mongoose.model("UserWorkoutModel", UserWorkoutSchema)

module.exports = {
    UserWorkout: UserWorkout
}

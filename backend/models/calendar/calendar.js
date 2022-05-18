const mongoose = require("mongoose");

const CalendarSchema = new mongoose.Schema(
    {
        user: {
            type: String,
            required: true,
            trim: true
        },
        years: {
              type: Object
        },
    },
    { collection: "calendar" }
);

const Calendar = mongoose.model("Calendar", CalendarSchema);

module.exports = Calendar;

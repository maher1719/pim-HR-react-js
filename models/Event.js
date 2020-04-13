const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User= require("./User");

// Create Schema
const EventSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true
    },
    allDay: {
        type: Boolean,
        required: false
    },
    start: {
        type: Date,
        required: true
    },
    end: {
        type: Date,
        default: Date.now
    },
    user: {
        type: String,

    }
});

module.exports = Event = mongoose.model("events", EventSchema);
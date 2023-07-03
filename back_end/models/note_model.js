const mongoose = require("mongoose");

const notes_schema = new mongoose.Schema({
    title: {
        type: String,
    },
    content: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

const note = mongoose.model("notes", notes_schema);

module.exports = note;
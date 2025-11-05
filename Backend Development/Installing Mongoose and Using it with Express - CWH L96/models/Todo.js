const mongoose = require("mongoose")

const Todo = mongoose.Schema({
    title: String,
    desc: String,
    isDone: Boolean,
    days: Number
})

module.exports = mongoose.model("Todo", Todo)
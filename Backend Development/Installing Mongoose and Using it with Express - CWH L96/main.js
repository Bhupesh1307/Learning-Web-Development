const express = require("express")
const mongoose = require("mongoose")

const app = express()
const port = 3000

main().catch(err => console.log(err))

const Todo = require("./models/Todo")

async function main() {
    mongoose.connect("mongodb://localhost:27017/todo")
    console.log("Mongo Connected")
}

app.get("/", (req, res) => {
    const task = new Todo({
        title: "Do the dishes",
        desc: "Wash the dishes",
        isDone: false,
        days: 1
    })
    task.save()
    console.log("New Task Added to DB")
    res.send("Hello World")
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
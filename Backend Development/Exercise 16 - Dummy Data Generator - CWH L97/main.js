const express = require("express")
const mongoose = require("mongoose")

const employee = require("./models/employee")

const app = express()
const port = 3000

const emp = ["Harry", "Sourav", "Gourav"]
const sal = [45000, 80000, 30000]
const lang = ["Python", "JavaScript", "C++"]
const ct = ["Mumbai", "New York", "Paris"]
const isMangr = [true, false]

main().catch(err => console.log(err))

async function main() {
   mongoose.connect("mongodb://localhost:27017/company")
   console.log("Mongo Connected")
}

app.get("/", (req, res) => {
    res.sendFile("index.html", {root: __dirname})
})

app.get("/generate", async (req, res) => {
    await employee.deleteMany({})
    for (let index = 0; index < 10; index++) {
        const randEmp = emp[Math.floor(Math.random() * emp.length)]
        const randSal = sal[Math.floor(Math.random() * sal.length)]
        const randLang = lang[Math.floor(Math.random() * lang.length)]
        const randCity = ct[Math.floor(Math.random() * ct.length)]
        const randMangr = isMangr[Math.floor(Math.random() * isMangr.length)]
        await employee.create({
            name: randEmp,
            salary: randSal,
            language: randLang,
            city: randCity,
            isManager: randMangr
        })
    }
    res.sendFile("index.html", {root: __dirname})
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
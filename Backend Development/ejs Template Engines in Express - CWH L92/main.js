const express = require("express")
const app = express()

const port = 3000

app.set("view engine", "ejs")

app.get("/", (req, res) => {
    let siteName = "My Site"
    let search = "Search Here"
    let arr = [7, 4, 6]
    res.render("index", {siteName: siteName, search: search, arr})
})

app.listen(port, () => {
    console.log("App running on Port 3000")
})
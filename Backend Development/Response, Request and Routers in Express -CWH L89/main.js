const express = require("express");
const blog = require("./routes/blog")
const app = express();
const port = 3000;

app.use(express.static("public"))
app.use('/blog', blog)

app.get('/', (req, res) => {
    res.send("Hello World")
    console.log("Hey it's a get request")
})

app.post('/', (req, res) => {
    res.send("Hello World Post")
    console.log("Hey! It's post request!")
})

app.put('/', (req, res) => {
    res.send("Hello World Put")
    console.log("Hey! There's put request!")
})

app.get("/index", (req, res) => {
    res.sendFile("templates/index.html", {root: __dirname})
    console.log("Hey it's index")
})

app.listen(port, () => {
  console.log(`App running on port: ${port}`);
});

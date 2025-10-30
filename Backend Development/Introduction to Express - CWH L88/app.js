const express = require("express");
const app = express();
const port = 3000;

app.use(express.static('public')); // This will allow files in public folder to be accesible. Other files wouldn't.

app.get("/" , (req, res) => {
    res.send("Hello World");
});

// Parameters in Express
app.get("/:var", (req, res) => {
    // console.log(req.params) // Will Output {var: 'parameter}
    // console.log(req.query) // Will Output The Query {text after '?'}
    res.send(`Hello ${req.params.var}`);
});

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
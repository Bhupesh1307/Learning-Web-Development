const express = require('express')
const app = express()
const port = 3000

// Middleware 1
const middleware1 = function(req, res, next) {
    console.log("Middleware1 passed")
    next()
}

app.use(middleware1)

// Middleware 2
app.use((req, res, next) => {
    console.log("Middleware2 passed")
    next()
})

app.get('/', (req, res) => {
    res.send("Hello World")
    console.log("Response sent")
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
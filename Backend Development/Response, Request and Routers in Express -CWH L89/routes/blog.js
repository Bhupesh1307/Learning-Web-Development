const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send("Blogs Home Page")
})

router.get('/about', (req, res) => {
    res.send("About Blog Page")
})

router.get('/blogpost/:blog', (req, res) => {
    res.send(`This blog post is about ${req.params.blog}`)
})

module.exports = router
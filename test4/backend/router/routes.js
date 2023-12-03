const express = require('express')
const router = express.Router()

router.get('/posts', (req, res, next) => {
    res.send('Api working')
    next()
})

module.exports = router
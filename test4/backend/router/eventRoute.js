const express = require('express')
const { getAllEvent, upload, addEvent } = require('../controller/eventController')
const authMiddleware = require('../middleware/authmiddleware')
const router = express.Router()

router.get('/', getAllEvent).get('/:id', singleEvent)
router.post('/upload', authMiddleware, upload, addEvent)

module.exports = router
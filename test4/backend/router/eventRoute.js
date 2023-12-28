const express = require('express')
const { getAllEvent, upload, addEvent, deleteEvent } = require('../controller/eventController')
const authMiddleware = require('../middleware/authmiddleware')
const router = express.Router()

router.get('/', getAllEvent)
router.delete('/:id', deleteEvent)
router.post('/upload', authMiddleware, upload.single('image'), addEvent)

module.exports = router
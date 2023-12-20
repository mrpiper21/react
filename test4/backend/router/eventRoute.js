const express = require('express')
const { allEvent, singleEvent, addEvent } = require('../controller/eventController')
const authMiddleware = require('../middleware/authmiddleware')
const router = express.Router()

router.get('/', allEvent).get('/:id', singleEvent)
router.post('/create-event', authMiddleware, addEvent)

module.exports = router
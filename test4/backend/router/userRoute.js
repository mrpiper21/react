const express = require('express')
const router = express.Router()
const { loginUser, registerUser } = require('../controller/userController')

router.post('/login', loginUser).post('/register', registerUser)

module.exports = router
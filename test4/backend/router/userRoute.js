const express = require('express')
const router = express.Router()
const { loginUser, registerUser, getAllUsers } = require('../controller/userController')

router.post('/login', loginUser).post('/register', registerUser)
router.get('/', getAllUsers)

module.exports = router
const User = require('../model/userModel')
const asyncHandler = require('express-async-handler')
const generateRefreshToken = require('../config/refreshToken')

const registerUser = asyncHandler(async(req, res) => {
    const {name, email, password} = req.body;
    console.log(req.body)

    const userExist = await User.findOne({email: req.body.email})
    if (userExist) return new Error('User already exist')
    
    if (!userExist) {
        const newUser = await User.create({
            name,
            email,
            password
        })
        return res.status(201).json(newUser)
    }
})

const loginUser = asyncHandler(async(req, res) => {
    const {email, password} = req.body;
    if (!email || !password){
        throw new Error('Please enter all fields')
    }

    const user = await User.findOne({ email: req.body.email })
    if(!user) throw new Error('Invalid email or password')

    if (user && user.isPasswordMatched(password)){
        const refreshToken = generateRefreshToken(user?._id)
        const updateuser = await User.findByIdAndUpdate(user?._id, 
            {
                refreshToken: refreshToken,
            }, { new: true });

            return res.status(200).json({
                _id: user?._id,
                email: user?.email,
                token: generateRefreshToken(user?._id)

            })
    }
})

module.exports = { loginUser, registerUser }
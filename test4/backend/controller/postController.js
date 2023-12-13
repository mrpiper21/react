const Post = require('../model/postModel')
const asyncHandler = require('express-async-handler')


const getAllPost = asyncHandler(async(req, res) => {
    const allPosts = await Post.find()
    res.json(allPosts)
})

const creatPost =  asyncHandler (async(req, res) => {
    const { text } = req.body
    console.log(text)

    if (!text) {
        return res.status(400).json({ error: "Text is required" });
    }

    try {
        const newPost = await Post.create({text: text})
        res.json(newPost)
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: err.message })
    }
})

module.exports = { getAllPost, creatPost }
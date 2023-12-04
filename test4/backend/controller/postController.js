const Post = require('../model/postModel')
const asyncHandler = require('express-async-handler')


const getAllPost = asyncHandler(async(req, res) => {
    const allPosts = await Post.find()
    res.json(allPosts)
})
const creatPost =  asyncHandler (async(req, res) => {
    const text = req.body
    console.log(req.body)
    try {
        const newPost = await Post.create({text: text},
            {
                new: true,
            })
        res.json(newPost)
    } catch (err) {
        throw new Error(err)
    }
})

module.exports = { getAllPost, creatPost }
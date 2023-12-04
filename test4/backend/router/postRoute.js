const express = require('express')
const router = express.Router()
const authMiddleware = require('../middleware/authmiddleware')
const { getAllPost, creatPost } = require('../controller/postController')

// router.get('/', (req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*'); // Set the response header for CORS
//     res.send('Romans 15:13- May the God of hope fill you with all joy and peace as you trust in him, so that you may overflow with hope by the power of the Holy Spirit.Ephesians 3:20 - Now to him who is able to do immeasurably more than all we ask or imagine, according to his power that is at work within us. Romans 8:38-39'
//     );
//     next()
// })

router.get('/', getAllPost)
router.post('/', authMiddleware, creatPost)

module.exports = router
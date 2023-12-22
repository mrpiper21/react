const express = require('express')
const cors = require('cors')
const userRoute = require('./router/userRoute')
const postRoute = require('./router/postRoute')
const eventRoute = require('./router/eventRoute')
const morgan = require('morgan')
const multer = require('multer')
const path = require('path')
const connectDB = require('./config/db')


require('dotenv').config()
PORT = 5000
connectDB()

const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))

// app.get('/', (req, res) => {
//     res.end('Home page')
// })
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'public/images')
//     },
//     filename: (req, file, cb) => {
//         cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
//     }
// })

app.use('/api/user', userRoute)
app.use('/api/posts', postRoute)
app.use('/api/events', eventRoute)
// app.post('/upload',upload.single('file'), (req, res) => {
//     console.log(req.file)
// })


app.listen(PORT, ()=> console.log(`server listening on port ${PORT}`))
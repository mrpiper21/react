const express = require('express')
const userRoute = require('./router/userRoute')
const postRoute = require('./router/postRoute')
const morgan = require('morgan')
const connectDB = require('./config/db')
require('dotenv').config()
PORT = 5000
connectDB()

const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// app.get('/', (req, res) => {
//     res.end('Home page')
// })

app.use('/api/user', userRoute)
app.use('/api/posts', postRoute)


app.listen(PORT, ()=> console.log(`server listening on port ${PORT}`))
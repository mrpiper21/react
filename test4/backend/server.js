const express = require('express')
const cors = require('cors')
const userRoute = require('./router/userRoute')
const postRoute = require('./router/postRoute')
const eventRoute = require('./router/eventRoute')
const morgan = require('morgan')
const connectDB = require('./config/db')
require('dotenv').config()
PORT = 5000
connectDB()

const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// app.get('/', (req, res) => {
//     res.end('Home page')
// })

app.use('/api/user', userRoute)
app.use('/api/posts', postRoute)
app.use('/api/events', eventRoute)


app.listen(PORT, ()=> console.log(`server listening on port ${PORT}`))
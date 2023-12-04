const express = require('express')
const router = require('./router/routes')
const morgan = require('morgan')
PORT = 5000

const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// app.get('/', (req, res) => {
//     res.end('Home page')
// })

app.use('/', router)


app.listen(PORT, ()=> console.log(`server listening on port ${PORT}`))
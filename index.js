require('dotenv').config()

const express = require('express')
const sequelize = require('./utils/database')
const logger = require('morgan')
const createError = require('http-errors')

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
  next()
})

//test route
app.get('/', (req, res, next) => {
  res.send('Hello World!')
})

// CRUD routes
app.use('/users', require('./routes/users'))

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handling
app.use((error, req, res, next) => {
  const { statusCode = 500, message } = error
  res.status(statusCode).json({ message: message })
})

const port = process.env.PORT || 3000

// sync database
sequelize
  .sync()
  .then((result) => {
    console.log('Database connected!')
    app.listen(port, '0.0.0.0', () => {
      console.log(`Server listening on port ${port}`)
    })
  })
  .catch((err) => console.log(err))

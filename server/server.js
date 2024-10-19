const express = require('express') // commonjs module syntax
const colors = require('colors')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const cors = require('cors');
const path = require('path')
const PORT = process.env.PORT || 3000

// Connect to database
connectDB()

const app = express()
app.use(cors());

/**
 * Each app.use(middleware) is called every time
 * a request is sent to the server
 */

/**
 * This is a built-in middleware function in Express.
 * It parses incoming requests with JSON payloads and is based on body-parser.
 */
app.use(express.json())

/**
 * This is a built-in middleware function in Express.
 * It parses incoming requests (Object as strings or arrays) with
 * urlencoded payloads and is based on body-parser.
 */
app.use(express.urlencoded({ extended: false }))

// Routes endpoints
app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/tickets', require('./routes/ticketRoutes'))


/**
 * app.listen()
 * Starts a UNIX socket and listens for connections on the given path.
 * This method is identical to Node’s http.Server.listen().
 */
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

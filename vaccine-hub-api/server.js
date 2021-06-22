const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const { PORT } = require('./config')
const authRoutes = require('./routes/auth')

const { NotFoundError, BadRequestError }  = require("./utils/errors")

const app = express()

// enables cross-origin resource sharing for all origins (may not be on this port)
app.use(cors())

// parse incoming request bodies with JSON payloads
app.use(express.json())

// log request info data
app.use(morgan("tiny"))

app.use("/auth", authRoutes)

app.use((req, res, next) => {
  return next(new NotFoundError())
})

app.use((err, req, res, next) => {
  const status = err.status || 500
  const message = err.message
  return res.status(status).json( {
    error: {message, status}
  })
})

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`)
})


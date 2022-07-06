const express = require('express')
const workoutRoutes = require('./routes/workouts')
require('dotenv').config()
const app = express()

// ===================================
// middleware
// ===================================

app.use(express.json()) // parse request body as JSON
app.use((req, res, next) => {
  // console log req path and method
  console.log(req.path, req.method)
  next()
})

// ===================================
// routes
// ===================================

app.use('/api/workouts', workoutRoutes)

// ===================================
// listen for requests
// ===================================

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`)
})

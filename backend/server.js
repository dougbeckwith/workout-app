const express = require('express')
const workoutRoutes = require('./routes/workouts')
const mongoose = require('mongoose')
require('dotenv').config()
const app = express()

// ===================================
// Database
// ===================================
const connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log('connected to DB')
    app.listen(process.env.PORT, () => {
      console.log(`listening on port ${process.env.PORT}`)
    })
  } catch (err) {
    console.log(err)
  }
}

connectDatabase()

// ===================================
// Middleware
// ===================================

app.use(express.json()) // parse request body as JSON
app.use((req, res, next) => {
  // console log req path and method
  console.log(req.path, req.method)
  next()
})

// ===================================
// Routes
// ===================================

app.use('/api/workouts', workoutRoutes)

// ===================================
// Listen for requests
// ===================================

const mongoose = require('mongoose')

// function to create new schema
const Schema = mongoose.Schema

// create new schema
// define the structure of the documents
const workoutSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    reps: {
      type: Number,
      required: true,
    },
    load: {
      type: Number,
      required: true,
    },
    user_id: {
      type: String,
      required: true,
    },
  },

  {timestamps: true}
)

// Create the model
// Use the methods on the model to interact with the database
module.exports = mongoose.model('Workout', workoutSchema)

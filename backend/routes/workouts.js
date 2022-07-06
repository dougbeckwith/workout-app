const express = require('express')
const Workout = require('../models/workoutModel')
const router = express.Router()

// GET all workouts document
router.get('/', (req, res) => {
  res.json({mssg: 'GET all workouts documents'})
})

// GET a single workout document
router.get('/:id', (req, res) => {
  res.json({mssg: 'GET a single workout document'})
})

// CREATE a new workout document
router.post('/', async (req, res) => {
  const {title, load, reps} = req.body

  try {
    const workout = await Workout.create({title, load, reps})
    res.status(200).json(workout)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
})

// DELETE a single workout document
router.delete('/:id', (req, res) => {
  res.json({mssg: 'DELETE a single workout document'})
})

// UPDATE a single workout document
router.patch('/:id', (req, res) => {
  res.json({mssg: 'UPDATE a single workout document'})
})

module.exports = router

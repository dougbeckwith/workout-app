const express = require('express')
const {
  createWorkout,
  getWorkout,
  getWorkouts,
  deleteWorkout,
  updateWorkout,
} = require('../controllers/workoutController')
const router = express.Router()

// GET all workouts document
router.get('/', getWorkouts)

// GET a single workout document
router.get('/:id', getWorkout)

// CREATE a new workout document
router.post('/', createWorkout)

// DELETE a single workout document
router.delete('/:id', deleteWorkout)

// UPDATE a single workout document
router.patch('/:id', updateWorkout)

module.exports = router

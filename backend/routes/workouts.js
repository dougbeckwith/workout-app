const express = require('express')
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
router.post('/', (req, res) => {
  res.json({mssg: 'POST a new workout document'})
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

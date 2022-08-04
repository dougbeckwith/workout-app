const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

// create jwt token and return it
const createToken = (_id) => {
  return jwt.sign({_id: _id}, process.env.SECRET, {expiresIn: '3d'})
}

// login user
// calls the login method on User schema
// checks if email and password match
// if it does create jwt token
// send the email and token in the response
// if error response with error message
const loginUser = async (req, res) => {
  const {email, password} = req.body

  try {
    const user = await User.login(email, password)

    // create token
    const token = createToken(user._id)

    res.status(200).json({email, token})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// signup user
// use the signup method on the User schema
// checks if there is email and password and if they are valid
// if sign up is valid returns the user document
// create the jwt token
// response with the jwt token
// if error respond with error message
const signupUser = async (req, res) => {
  const {email, password} = req.body

  try {
    const user = await User.signup(email, password)

    // create token
    const token = createToken(user._id)

    res.status(200).json({email, token})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

module.exports = {signupUser, loginUser}

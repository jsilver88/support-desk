import asyncHandler from 'express-async-handler'

//* Register a new user
//* /api/users
//* access public
export const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body
  // Validation
  if (!name || !email || !password) {
    res.status(400)
    throw new Error('Please include all fields')
  }
})

//* Login a user
//* /api/users/login
//* access public
export const loginUser = asyncHandler(async (req, res) => {
  res.send('Login User')
})

export default { registerUser, loginUser }

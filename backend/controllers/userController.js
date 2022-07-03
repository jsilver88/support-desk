//* Register a new user
//* /api/users
//* access public
export const registerUser = (req, res) => {
  res.send('Register User')
}

//* Login a user
//* /api/users/login
//* access public
export const loginUser = (req, res) => {
  res.send('Login User')
}

export default { registerUser, loginUser }

import express from 'express'
import dotenv from 'dotenv'
import userRoutes from './routes/userRoutes.js'

const app = express()
dotenv.config()

const PORT = process.env.PORT || 8000

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to the support desk API' })
})

app.use('/api/users', userRoutes)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

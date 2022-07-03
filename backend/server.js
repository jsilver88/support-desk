import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import userRoutes from './routes/userRoutes.js'
import { errorHandler } from './middleware/errorMiddleware.js'
import connectDB from './config/db.js'

const app = express()
dotenv.config()

// Connect to databasee
connectDB()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const PORT = process.env.PORT || 8000

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to the support desk API' })
})

app.use('/api/users', userRoutes)

app.use(errorHandler)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

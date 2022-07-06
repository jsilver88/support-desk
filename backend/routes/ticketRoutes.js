import express from 'express'
import { protect } from '../middleware/authMiddleware.js'
import { getTickets, createTicket } from '../controllers/ticketController.js'

const router = express.Router()

router.route('/').get(protect, getTickets).post(protect, createTicket)

export default router

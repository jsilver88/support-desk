import express from 'express'
import { protect } from '../middleware/authMiddleware.js'
import {
  getTickets,
  getTicket,
  createTicket,
  deleteTicket,
  updateTicket,
} from '../controllers/ticketController.js'

const router = express.Router()

router.route('/').get(protect, getTickets).post(protect, createTicket)

router
  .route('/:id')
  .get(protect, getTicket)
  .delete(protect, deleteTicket)
  .put(protect, updateTicket)

export default router

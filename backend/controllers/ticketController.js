import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'
import Ticket from '../models/ticketModel.js'

//* get user tickets
//* GET /api/tickets
//* access private
export const getTickets = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'getTickets' })
})

//* create user ticket
//* POST /api/tickets
//* access private
export const createTicket = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'createTicket' })
})

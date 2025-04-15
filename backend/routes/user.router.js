// routes/transport.routes.js

import express from 'express';
import {
  getParkingByStation,
  bookParkingSlot,
  getAvailableRidesByStation,
  bookRide,
  getUserRideBookings,
  getUserParkingBookings
} from '../controller/user.controller.js';

import authenticateUser from '../middleware/userProtectRoute.js';

const router = express.Router();

// Parking endpoints
router.get('/parking/by-station', getParkingByStation);
router.post('/parking/book', authenticateUser, bookParkingSlot);
router.get('/parking/bookings', authenticateUser, getUserParkingBookings); // 🆕 user parking bookings

// Ride endpoints
router.get('/ride/available', getAvailableRidesByStation);
router.post('/ride/book', authenticateUser, bookRide);
router.get('/ride/bookings', authenticateUser, getUserRideBookings); // 🆕 user ride bookings

export default router;

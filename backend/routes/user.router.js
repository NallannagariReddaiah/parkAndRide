// routes/transport.routes.js

import express from 'express';
import {
  getParkingByStation,
  bookParkingSlot,
  getAvailableRidesByStation,
  bookRide
} from '../controller/user.controller.js';
import authenticateUser from '../middleware/userProtectRoute.js'; // Assuming you're using a middleware to authenticate users

const router = express.Router();


router.get('/parking/by-station', getParkingByStation);


router.post('/parking/book', authenticateUser, bookParkingSlot);


router.get('/ride/available', getAvailableRidesByStation);


router.post('/ride/book', authenticateUser, bookRide);

export default router;

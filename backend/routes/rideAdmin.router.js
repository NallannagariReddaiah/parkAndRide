// routes/ride.routes.js

import express from 'express';
import {
  createRide,
  getAllRides,
  getRidesByStation,
  updateRideAvailability,
  deleteRide
} from '../controller/ride/ride.admin.controller.js';

import authenticateAdmin from '../middleware/RideAdminProtectRoute.js';

const router = express.Router();

router.get('/', getAllRides);


router.post('/', authenticateAdmin, createRide);


router.get('/by-station', getRidesByStation);


router.patch('/:rideId/availability', authenticateAdmin, updateRideAvailability);


router.delete('/:rideId', authenticateAdmin, deleteRide);

export default router;

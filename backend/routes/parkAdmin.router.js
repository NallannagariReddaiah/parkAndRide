// routes/parking.routes.js

import express from 'express';
import {
  createParkingArea,
  getAllParkingAreas,
  getParkingAreasByStation,
  updateParkingAvailability,
  deleteParkingArea,
  toggleParkingAvailability
} from '../controller/parking/parking.admin.controller.js';

import authenticateAdmin  from '../middleware/parkAdminProtectRoute.js';

const router = express.Router();

router.get('/', getAllParkingAreas);

router.post('/', authenticateAdmin, createParkingArea);

router.get('/by-station', getParkingAreasByStation);


router.patch('/:parkingId/availability', authenticateAdmin, updateParkingAvailability);

router.patch('/:id/toggle', authenticateAdmin, toggleParkingAvailability);

router.delete('/:parkingId', authenticateAdmin, deleteParkingArea);

export default router;

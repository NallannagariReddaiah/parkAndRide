import express from 'express';

const router = express.Router();

import userAuthRouter from './user.auth.router.js'
import parkingAdminAuthRouter from './parkingAdmin.auth.router.js'
import rideAdminAuthRouter from './rideAdmin.auth.router.js'

router.use('/user',userAuthRouter);
router.use('/ride-admin',rideAdminAuthRouter);
router.use('/parking-admin',parkingAdminAuthRouter);

export default router;
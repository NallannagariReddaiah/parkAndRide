// models/RideAdmin.js
import mongoose from 'mongoose';

const rideAdminSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, default: 'ride-admin' },
  rideVehicles: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Ride',
    }],
});
export default mongoose.model('RideAdmin', rideAdminSchema);
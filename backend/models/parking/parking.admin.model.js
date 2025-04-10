// models/ParkingAdmin.js
import mongoose from "mongoose";

const parkingAdminSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, default: 'parking-admin' },
  parkingAreas: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ParkingArea',
  }],
});

export default mongoose.model('ParkingAdmin', parkingAdminSchema);

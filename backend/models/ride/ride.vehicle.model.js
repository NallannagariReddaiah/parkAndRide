import mongoose from 'mongoose';

const rideSchema = new mongoose.Schema({
  driverName: {
    type: String,
    required: true,
  },
  vehicleType: {
    type: String,
    enum: ['cab', 'shuttle', 'e-rickshaw'],
    required: true,
  },
  vehicleNumber: {
    type: String,
    required: true,
  },
  station: {
    type: String, // or ref to a Station model
    required: true,
  },
  isAvailable: {
    type: Boolean,
    default: true,
  },
  capacity: {
    type: Number,
    required: true,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'RideAdmin',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

export default mongoose.model('Ride', rideSchema);

// models/rideBooking.model.js

import mongoose from 'mongoose';
import QRCode from 'qrcode';

const rideBookingSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  ride: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Ride',
    required: true,
  },
  pickupLocation: {
    type: String,
    required: true,
  },
  dropLocation: {
    type: String,
    required: true,
  },
  scheduledTime: {
    type: Date,
    default: Date.now,
  },
  fare: {
    type: Number,
    required: true,
  },
  qrCode: {
    type: String,
  },
  status: {
    type: String,
    enum: ['booked', 'cancelled', 'completed'],
    default: 'booked',
  },
}, {
  timestamps: true,
});

rideBookingSchema.pre('save', async function (next) {
  if (!this.qrCode) {
    const qrText = `RideBooking:${this._id}`;
    this.qrCode = await QRCode.toDataURL(qrText);
  }
  next();
});

export default mongoose.model('RideBooking', rideBookingSchema);

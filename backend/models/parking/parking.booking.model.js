import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  parkingArea: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ParkingArea',
    required: true,
  },
  startTime: {
    type: Date,
    required: true,
  },
  endTime: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    enum: ['confirmed', 'cancelled', 'completed'],
    default: 'confirmed',
  },
  bookingId: {
    type: String,
    unique: true,
    required: true,
  },
  qrCode: {
    type: String, // base64 string or image URL
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

bookingSchema.pre('validate', function(next) {
  if (!this.bookingId) {
    this.bookingId = `BOOK-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
  }
  next();
});

export default mongoose.model('Booking', bookingSchema);

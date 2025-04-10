import mongoose from 'mongoose';

const parkingAreaSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true },
  },
  address: String,
  totalSpots: Number,
  availableSpots: Number,
  pricePerHour: Number,
  nearStation: String, 
});

export default mongoose.model('ParkingArea', parkingAreaSchema);

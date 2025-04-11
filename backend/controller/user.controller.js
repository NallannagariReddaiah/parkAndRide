import ParkingArea from '../models/parking/parkingSpot.model';
import Booking from '../models/parking/parking.booking.model.js';
import QRCode from 'qrcode';
import Ride from '../models/ride/ride.admin.model.js';
import rideBooking from '../models/ride/ride.booking.model.js';

export const getParkingByStation = async (req, res) => {
  try {
    const { station } = req.query;
    if (!station) return res.status(400).json({ message: 'Station name is required' });

    const results = await ParkingArea.find({
      nearStation: { $regex: station, $options: 'i' },
    });

    res.json({ parkingAreas: results });
  } catch (err) {
    res.status(500).json({ message: 'Error fetching parking areas', error: err.message });
  }
};
export const bookParkingSlot = async (req, res) => {
  try {
    const userId = req.user.id;
    const { parkingAreaId, startTime, endTime } = req.body;

    if (!startTime || !endTime || !parkingAreaId) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

   
    const parkingArea = await ParkingArea.findById(parkingAreaId);
    if (!parkingArea) {
      return res.status(404).json({ message: 'Parking area not found' });
    }

    
    const overlappingBookings = await Booking.find({
      parkingArea: parkingAreaId,
      $or: [
        { startTime: { $lt: endTime }, endTime: { $gt: startTime } }
      ]
    });

    if (overlappingBookings.length >= parkingArea.totalSpots) {
      return res.status(400).json({ message: 'No available slots in this time range' });
    }

   
    const newBooking = await Booking.create({
      user: userId,
      parkingArea: parkingAreaId,
      startTime,
      endTime,
      status: 'confirmed'
    });
    const qrData = `BookingID:${newBooking.bookingId}|User:${user._id}`;
    newBooking.qrCode = await QRCode.toDataURL(qrData); // generates base64 string
    await newBooking.save();
    res.status(201).json({
      message: 'Booking successful',
      booking: newBooking
    });

  } catch (err) {
    res.status(500).json({ message: 'Booking failed', error: err.message });
  }
};
export const getAvailableRidesByStation = async (req, res) => {
  try {
    const { station } = req.query;

    if (!station) {
      return res.status(400).json({ message: 'Station is required' });
    }

    const rides = await Ride.find({
      station: station.trim().toLowerCase(),
      isAvailable: true
    });

    res.status(200).json({ message: 'Available rides fetched', rides });
  } catch (err) {
    res.status(500).json({ message: 'Error fetching rides', error: err.message });
  }
};
export const bookRide = async (req, res) => {
  try {
    const { rideId, pickupLocation, dropLocation } = req.body;
    const userId = req.user.id; // Assuming middleware sets req.user

    const ride = await Ride.findById(rideId);
    if (!ride) return res.status(404).json({ message: 'Ride not found' });

    const fare = ride.farePerKm * 5; // You can replace with actual distance logic

    const booking = await RideBooking.create({
      user: userId,
      ride: rideId,
      pickupLocation,
      dropLocation,
      fare,
    });

    res.status(201).json({
      message: 'Ride booked successfully',
      booking,
    });
  } catch (err) {
    res.status(500).json({ message: 'Ride booking failed', error: err.message });
  }
};
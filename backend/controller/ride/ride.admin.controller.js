import Ride from '../../models/ride/ride.vehicle.model.js';

export const createRide = async (req, res) => {
    try {
      const {
        driverName,
        vehicleType,
        vehicleNumber,
        station,
        capacity,
        createdBy
      } = req.body;
  
      const newRide = new Ride({
        driverName,
        vehicleType,
        vehicleNumber,
        station: station.trim().toLowerCase(),
        capacity,
        createdBy,
      });
  
      await newRide.save();
      res.status(201).json({ message: 'Ride created successfully', ride: newRide });
    } catch (error) {
      res.status(500).json({ message: 'Failed to create ride', error: error.message });
    }
  };
  
 
  export const getAllRides = async (req, res) => {
    try {
      const rides = await Ride.find();
      res.status(200).json({ rides });
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch rides', error: error.message });
    }
  };
  

  export const getRidesByStation = async (req, res) => {
    try {
      const { station } = req.query;
      if (!station) return res.status(400).json({ message: 'Station is required' });
  
      const rides = await Ride.find({
        station: station.trim().toLowerCase(),
        isAvailable: true,
      });
  
      res.status(200).json({ rides });
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch rides', error: error.message });
    }
  };
  

  export const updateRideAvailability = async (req, res) => {
    try {
      const { rideId } = req.params;
      const ride = await Ride.findById(rideId);
      if (!ride) return res.status(404).json({ message: 'Ride not found' });
  
      ride.isAvailable = false;
      await ride.save();
  
      res.status(200).json({ message: 'Ride marked as unavailable', ride });
    } catch (error) {
      res.status(500).json({ message: 'Error updating ride', error: error.message });
    }
  };
  

  export const deleteRide = async (req, res) => {
    try {
      const { rideId } = req.params;
      await Ride.findByIdAndDelete(rideId);
      res.status(200).json({ message: 'Ride deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Failed to delete ride', error: error.message });
    }
  };
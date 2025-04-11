

import ParkingArea from '../../models/parking/parkingSpot.model.js';

export const createParkingArea = async (req, res) => {
  try {
    const {
      name,
      location,
      address,
      totalSpots,
      availableSpots,
      pricePerHour,
      nearStation
    } = req.body;

    const newParking = new ParkingArea({
      name,
      location,
      address,
      totalSpots,
      availableSpots,
      pricePerHour,
      nearStation: nearStation.trim().toLowerCase(),
    });

    await newParking.save();
    res.status(201).json({ message: 'Parking area created successfully', parkingArea: newParking });
  } catch (error) {
    res.status(500).json({ message: 'Failed to create parking area', error: error.message });
  }
};

export const getAllParkingAreas = async (req, res) => {
  try {
    const parkingAreas = await ParkingArea.find();
    res.status(200).json({ parkingAreas });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch parking areas', error: error.message });
  }
};

export const getParkingAreasByStation = async (req, res) => {
  try {
    const { station } = req.query;
    if (!station) return res.status(400).json({ message: 'Station is required' });

    const parkingAreas = await ParkingArea.find({
      nearStation: { $regex: station.trim().toLowerCase(), $options: 'i' },
    });

    res.status(200).json({ parkingAreas });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch parking areas', error: error.message });
  }
};

export const updateParkingAvailability = async (req, res) => {
  try {
    const { parkingId } = req.params;
    const parkingArea = await ParkingArea.findById(parkingId);
    if (!parkingArea) return res.status(404).json({ message: 'Parking area not found' });

    // Example update: mark as full
    parkingArea.availableSpots = 0;
    await parkingArea.save();

    res.status(200).json({ message: 'Parking availability updated', parkingArea });
  } catch (error) {
    res.status(500).json({ message: 'Error updating parking availability', error: error.message });
  }
};

export const deleteParkingArea = async (req, res) => {
  try {
    const { parkingId } = req.params;
    await ParkingArea.findByIdAndDelete(parkingId);
    res.status(200).json({ message: 'Parking area deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete parking area', error: error.message });
  }
};
export const toggleParkingAvailability = async (req, res) => {
    try {
      const { id } = req.params;
      const parking = await ParkingArea.findById(id);
      if (!parking) return res.status(404).json({ message: 'Parking not found' });
  
      parking.availableSpots = parking.availableSpots === 0 ? parking.totalSpots : 0;
      await parking.save();
  
      res.status(200).json({ message: 'Availability updated', updatedParkingArea: parking });
    } catch (error) {
      res.status(500).json({ message: 'Toggle failed', error: error.message });
    }
  };
  
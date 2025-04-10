import RideCard from '../../components/rideAdmin/rideCard';
import { Container, Row } from 'react-bootstrap';
import '../../../styles/ride.css';
// src/data/sampleRides.js
const sampleRides = [
  {
    _id: '1',
    driverName: 'Rajesh Kumar',
    vehicleType: 'cab',
    vehicleNumber: 'DL01AB1234',
    station: 'New Delhi',
    isAvailable: true,
    capacity: 4,
    createdAt: '2024-04-10T10:00:00Z',
  },
  {
    _id: '2',
    driverName: 'Priya Sharma',
    vehicleType: 'e-rickshaw',
    vehicleNumber: 'UP32CD5678',
    station: 'Lucknow',
    isAvailable: false,
    capacity: 3,
    createdAt: '2024-04-09T09:30:00Z',
  },
];


const Rides = () => {
  return (
    <Container className="py-4">
      <h2 className="text-center mb-4">All Available Rides</h2>
      <Row className="g-4">
        {sampleRides.map((ride) => (
          <div key={ride._id} className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex">
            <RideCard ride={ride} />
          </div>
        ))}
      </Row>
    </Container>
  );
};

export default Rides;
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { FaTaxi, FaShuttleVan, FaBolt, FaUser, FaIdCard, FaMapMarkerAlt, FaUsers } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import axios from 'axios';

const RideDetails = () => {
  const { id } = useParams(); // ride ID from URL
  const navigate = useNavigate();
  const [ride, setRide] = useState(null);
  const [loading, setLoading] = useState(true);
  const getVehicleIcon = () => {
    switch (ride.vehicleType) {
      case 'cab': return <FaTaxi className="me-2 text-primary" />;
      case 'shuttle': return <FaShuttleVan className="me-2 text-success" />;
      case 'e-rickshaw': return <FaBolt className="me-2 text-warning" />;
      default: return null;
    }
  };
//   useEffect(() => {
//     const fetchRide = async () => {
//       try {
//         const { data } = await axios.get(`/api/rides/${id}`);
//         setRide(data.ride);
//       } catch (error) {
//         console.error('Error fetching ride:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchRide();
//   }, [id]);
useEffect(() => {
    // Simulate fetching with delay
    setTimeout(() => {
      setRide({
        _id: "6616f2d85c13ae1abc000123",
        driverName: "Ramesh Kumar",
        vehicleType: "cab",
        vehicleNumber: "DL01AB1234",
        station: "Rajiv Chowk",
        isAvailable: true,
        capacity: 4,
        createdBy: "6616f1e05c13ae1abc000121",
        createdAt: "2025-04-09T10:30:00.000Z"
      });
      setLoading(false);
    }, 500);
  }, [id]);

  const toggleAvailability = async () => {
    try {
      const { data } = await axios.patch(`/api/rides/${id}/toggle`);
      setRide(data.updatedRide);
    } catch (err) {
      console.error('Failed to toggle ride:', err);
    }
  };

  const deleteRide = async () => {
    if (!window.confirm('Are you sure you want to delete this ride?')) return;

    try {
      await axios.delete(`/api/rides/${id}`);
      navigate('/admin/rides');
    } catch (err) {
      console.error('Delete failed:', err);
    }
  };

  if (loading) return <p className="text-center mt-4">Loading ride details...</p>;
  if (!ride) return <p className="text-center mt-4 text-danger">Ride not found.</p>;

  return (
    <Container className="py-4">
      <Row>
        {/* Left Side: Ride Info */}
        <Col md={7}>
        <Card className="shadow-sm rounded-4 border-0 mb-3">
      <Card.Body>
        <div className="d-flex align-items-center mb-2">
          {getVehicleIcon()}
          <h5 className="mb-0 text-uppercase">{ride.vehicleType} - {ride.vehicleNumber}</h5>
        </div>
        <hr />
        <p className="mb-1"><FaUser className="me-2" /> <strong>Driver:</strong> {ride.driverName}</p>
        <p className="mb-1"><FaMapMarkerAlt className="me-2" /> <strong>Station:</strong> {ride.station}</p>
        <p className="mb-1"><FaUsers className="me-2" /> <strong>Capacity:</strong> {ride.capacity}</p>
        <p className="mb-1">
          <strong>Status:</strong>{' '}
          <Badge bg={ride.isAvailable ? 'success' : 'secondary'}>
            {ride.isAvailable ? 'Available' : 'Not Available'}
          </Badge>
        </p>
        <p className="mb-0"><strong>Created At:</strong> {new Date(ride.createdAt).toLocaleString()}</p>
      </Card.Body>
    </Card>
        </Col>

        {/* Right Side: Admin Controls */}
        <Col md={5}>
          <Card className="shadow-sm">
            <Card.Header className="bg-light"><strong>Actions</strong></Card.Header>
            <Card.Body>
              <Button
                variant={ride.isAvailable ? 'warning' : 'success'}
                className="w-100 mb-3"
                onClick={toggleAvailability}
              >
                {ride.isAvailable ? 'Mark as Unavailable' : 'Mark as Available'}
              </Button>

              <Button variant="danger" className="w-100" onClick={deleteRide}>
                Delete Ride
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default RideDetails;

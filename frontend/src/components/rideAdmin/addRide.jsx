import React, { useState } from 'react';
import { Form, Button, Card, Container, Row, Col, Alert } from 'react-bootstrap';

const AdminAddRide = () => {
  const [rideData, setRideData] = useState({
    driverName: '',
    vehicleType: 'cab',
    vehicleNumber: '',
    station: '',
    capacity: '',
    costPerHour: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setRideData({
      ...rideData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Ride Submitted:', rideData);

    // Example POST request (connect to your backend later)
    // await axios.post('/api/rides', rideData)

    setMessage('Ride added successfully!');
    setRideData({
      driverName: '',
      vehicleType: 'cab',
      vehicleNumber: '',
      station: '',
      capacity: '',
      costPerHour: ''
    });
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="shadow-lg p-4 border-0 rounded-4">
            <h3 className="mb-4 text-center">Add New Ride</h3>

            {message && <Alert variant="success">{message}</Alert>}

            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Driver Name</Form.Label>
                <Form.Control
                  type="text"
                  name="driverName"
                  value={rideData.driverName}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Vehicle Type</Form.Label>
                <Form.Select
                  name="vehicleType"
                  value={rideData.vehicleType}
                  onChange={handleChange}
                >
                  <option value="cab">Cab</option>
                  <option value="shuttle">Shuttle</option>
                  <option value="e-rickshaw">E-Rickshaw</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Vehicle Number</Form.Label>
                <Form.Control
                  type="text"
                  name="vehicleNumber"
                  value={rideData.vehicleNumber}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Station</Form.Label>
                <Form.Control
                  type="text"
                  name="station"
                  value={rideData.station}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Capacity</Form.Label>
                <Form.Control
                  type="number"
                  name="capacity"
                  value={rideData.capacity}
                  onChange={handleChange}
                  required
                  min="1"
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label>Cost per Hour (₹)</Form.Label>
                <Form.Control
                  type="number"
                  name="costPerHour"
                  value={rideData.costPerHour}
                  onChange={handleChange}
                  required
                  min="0"
                />
              </Form.Group>

              <div className="d-grid">
                <Button variant="primary" type="submit" size="lg">
                  Add Ride
                </Button>
              </div>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminAddRide;

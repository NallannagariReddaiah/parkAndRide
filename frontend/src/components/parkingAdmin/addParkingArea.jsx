// src/components/AddParkingArea.jsx

import { useState } from 'react';
import axios from 'axios';
import { Container, Form, Button, Card, Row, Col, Alert } from 'react-bootstrap';

const AddParkingArea = () => {
  const [formData, setFormData] = useState({
    name: '',
    lat: '',
    lng: '',
    address: '',
    totalSpots: '',
    availableSpots: '',
    pricePerHour: '',
    nearStation: '',
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        name: formData.name,
        location: {
          lat: parseFloat(formData.lat),
          lng: parseFloat(formData.lng),
        },
        address: formData.address,
        totalSpots: parseInt(formData.totalSpots),
        availableSpots: parseInt(formData.availableSpots),
        pricePerHour: parseFloat(formData.pricePerHour),
        nearStation: formData.nearStation,
      };

      const res = await axios.post('http://localhost:5000/api/parking/create', payload);
      setSuccessMessage(res.data.message);
      setErrorMessage('');
      setFormData({
        name: '',
        lat: '',
        lng: '',
        address: '',
        totalSpots: '',
        availableSpots: '',
        pricePerHour: '',
        nearStation: '',
      });
    } catch (error) {
      setErrorMessage(error.response?.data?.message || 'Something went wrong');
      setSuccessMessage('');
    }
  };

  return (
    <Container className="my-5">
      <Card className="shadow p-4 rounded-4">
        <h3 className="mb-4 text-center">Add Parking Area</h3>

        {successMessage && <Alert variant="success">{successMessage}</Alert>}
        {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}

        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Parking Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Green Park Basement"
                />
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.Group className="mb-3">
                <Form.Label>Latitude</Form.Label>
                <Form.Control
                  type="number"
                  step="any"
                  name="lat"
                  value={formData.lat}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.Group className="mb-3">
                <Form.Label>Longitude</Form.Label>
                <Form.Control
                  type="number"
                  step="any"
                  name="lng"
                  value={formData.lng}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Street, City, Zip"
            />
          </Form.Group>

          <Row>
            <Col md={4}>
              <Form.Group className="mb-3">
                <Form.Label>Total Spots</Form.Label>
                <Form.Control
                  type="number"
                  name="totalSpots"
                  value={formData.totalSpots}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group className="mb-3">
                <Form.Label>Available Spots</Form.Label>
                <Form.Control
                  type="number"
                  name="availableSpots"
                  value={formData.availableSpots}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group className="mb-3">
                <Form.Label>Price Per Hour (₹)</Form.Label>
                <Form.Control
                  type="number"
                  name="pricePerHour"
                  step="0.01"
                  value={formData.pricePerHour}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-4">
            <Form.Label>Nearest Station</Form.Label>
            <Form.Control
              type="text"
              name="nearStation"
              value={formData.nearStation}
              onChange={handleChange}
              placeholder="e.g. Green Park Metro"
              required
            />
          </Form.Group>

          <div className="text-center">
            <Button variant="primary" type="submit" className="px-4">
              Add Parking Area
            </Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
};

export default AddParkingArea;

import React, { useState } from "react";
import {
  Card,
  Button,
  Container,
  Form,
  Row,
  Col,
  Alert,
} from "react-bootstrap";

// Sample parking area data
const sampleParkingAreas = [
  {
    id: 1,
    name: "Central Park Parking",
    location: { lat: 12.9716, lng: 77.5946 },
    address: "MG Road, Bangalore",
    totalSpots: 50,
    availableSpots: 8,
    pricePerHour: 30,
    nearStation: "MG Road Metro",
  },
  {
    id: 2,
    name: "Jayanagar Parking Lot",
    location: { lat: 12.925, lng: 77.5938 },
    address: "Jayanagar 4th Block",
    totalSpots: 40,
    availableSpots: 0,
    pricePerHour: 20,
    nearStation: "Jayanagar Metro",
  },
  {
    id: 3,
    name: "Indiranagar Lot",
    location: { lat: 12.9719, lng: 77.6412 },
    address: "100 Feet Road, Indiranagar",
    totalSpots: 30,
    availableSpots: 10,
    pricePerHour: 25,
    nearStation: "Indiranagar Metro",
  },
];

const AvailableParking = () => {
  const [station, setStation] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [alert, setAlert] = useState("");

  const handleSearch = () => {
    const result = sampleParkingAreas.filter((parking) =>
      parking.nearStation.toLowerCase().includes(station.toLowerCase())
    );
    setFilteredResults(result);
    setAlert(
      result.length === 0 ? "No parking areas found near this station." : ""
    );
  };

  const handleBooking = (id) => {
    setFilteredResults((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, availableSpots: p.availableSpots - 1 } : p
      )
    );
  };

  return (
    <Container className="my-4">
      <h2 className="mb-4 text-center">Search Available Parking Areas</h2>

      <Form className="mb-4">
        <Row className="align-items-center">
          <Col md={8}>
            <Form.Control
              type="text"
              placeholder="Enter station name"
              value={station}
              onChange={(e) => setStation(e.target.value)}
            />
          </Col>
          <Col md={4}>
            <Button onClick={handleSearch} variant="primary" className="w-100">
              Search
            </Button>
          </Col>
        </Row>
      </Form>

      {alert && <Alert variant="warning">{alert}</Alert>}

      <Row>
        {filteredResults.map((parking) => (
          <Col md={4} key={parking.id} className="mb-4">
            <Card className="shadow-lg rounded-4 border-0">
              <Card.Body className="p-4">
                <Card.Title className="fs-4 fw-bold text-primary mb-2">
                  {parking.name}
                </Card.Title>
                <Card.Subtitle className="mb-3 text-secondary">
                  {parking.nearStation}
                </Card.Subtitle>
                <Card.Text className="mb-3 text-muted">
                  <strong>📍 Address:</strong> {parking.address}
                  <br />
                  <strong>🚗 Total Spots:</strong> {parking.totalSpots}
                  <br />
                  <strong>🟢 Available:</strong> {parking.availableSpots}
                  <br />
                  <strong>💰 Rate:</strong> ₹{parking.pricePerHour}/hr
                </Card.Text>
                <div className="d-flex flex-column gap-2">
                  <Button
                    variant="outline-success"
                    disabled={parking.availableSpots <= 0}
                    onClick={() => handleBooking(parking.id, "hourly")}
                  >
                    Book Hourly
                  </Button>
                  <Button
                    variant="outline-primary"
                    disabled={parking.availableSpots <= 0}
                    onClick={() => handleBooking(parking.id, "daily")}
                  >
                    Book Daily
                  </Button>
                  <Button
                    variant="outline-warning"
                    disabled={parking.availableSpots <= 0}
                    onClick={() => handleBooking(parking.id, "monthly")}
                  >
                    Book Monthly
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AvailableParking;

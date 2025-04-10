import React, { useState } from "react";
import { Card, Button, Container, Row, Col, Form } from "react-bootstrap";

const AvailableRides = () => {
  const [station, setStation] = useState("");
  const [rides, setRides] = useState([]);

  const sampleRides = [
    {
      id: "1",
      driverName: "John Doe",
      vehicleType: "cab",
      vehicleNumber: "KA01AB1234",
      station: "Majestic",
      isAvailable: true,
      capacity: 4,
      costPerHour: 120,
    },
    {
      id: "2",
      driverName: "Priya Singh",
      vehicleType: "e-rickshaw",
      vehicleNumber: "DL05ER7890",
      station: "MG Road",
      isAvailable: true,
      capacity: 3,
      costPerHour: 60,
    },
    {
      id: "3",
      driverName: "Amit Verma",
      vehicleType: "shuttle",
      vehicleNumber: "MH20SH5678",
      station: "Majestic",
      isAvailable: true,
      capacity: 12,
      costPerHour: 200,
    },
  ];

  const handleSearch = () => {
    const filtered = sampleRides.filter((ride) =>
      ride.station.toLowerCase().includes(station.trim().toLowerCase())
    );
    setRides(filtered);
  };

  const handleBook = (rideId) => {
    alert(`Booked ride ID: ${rideId}`);
    // Add API call here later
  };

  return (
    <Container className="my-4">
      <h2 className="text-center mb-4">Available Rides</h2>
      <Row className="mb-3 justify-content-center">
        <Col md={6}>
          <Form.Control
            type="text"
            placeholder="Enter station name..."
            value={station}
            onChange={(e) => setStation(e.target.value)}
          />
        </Col>
        <Col md="auto">
          <Button onClick={handleSearch}>Search</Button>
        </Col>
      </Row>
      <Row>
        {rides.length > 0 ? (
          rides.map((ride) => (
            <Col key={ride.id} md={4} className="mb-4">
            <Card className="shadow-sm border-0 rounded-4 h-100"
      style={{ backgroundColor: "#e7f1ff" }}>

                <Card.Body className="d-flex flex-column justify-content-between">
                  <div className="mb-2">
                    <div className="d-flex justify-content-between align-items-center">
                      <h5 className="fw-bold mb-0">{ride.driverName}</h5>
                      <span className="badge bg-dark text-capitalize">
                        <i className={`bi bi-truck-front me-1`}></i>
                        {ride.vehicleType}
                      </span>
                    </div>

                    <p className="text-muted mt-2 mb-1">
                      <i className="bi bi-123 me-2"></i>
                      <strong>Vehicle:</strong> {ride.vehicleNumber}
                    </p>
                    <p className="text-muted mb-1">
                      <i className="bi bi-geo-alt-fill me-2"></i>
                      <strong>Station:</strong> {ride.station}
                    </p>
                    <p className="text-muted mb-1">
                      <i className="bi bi-people-fill me-2"></i>
                      <strong>Capacity:</strong> {ride.capacity} pax
                    </p>
                    <p className="text-success fw-semibold mb-0">
                      <i className="bi bi-currency-rupee me-2"></i>
                      {ride.costPerHour}/hr
                    </p>
                  </div>

                  <Button
                    variant="primary"
                    className="mt-3 w-100"
                    onClick={() => handleBook(ride.id)}
                    disabled={!ride.isAvailable}
                  >
                    <i className="bi bi-check2-circle me-2"></i>
                    Book Ride
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <p className="text-center">
            No rides found for the selected station.
          </p>
        )}
      </Row>
    </Container>
  );
};

export default AvailableRides;

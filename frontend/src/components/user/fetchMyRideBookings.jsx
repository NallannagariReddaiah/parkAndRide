// RideBookings.jsx

import React from 'react';
import { Card, Row, Col, Spinner, Badge, Container } from 'react-bootstrap';
import { FaCar, FaMapMarkerAlt, FaMoneyBillAlt, FaClock, FaQrcode, FaCheckCircle, FaTimesCircle, FaHourglassHalf } from 'react-icons/fa';

const sampleBookings = [
  {
    _id: '1',
    ride: {
      driverName: 'John Doe',
      vehicleType: 'Sedan',
      vehicleNumber: 'ABC-1234',
      station: 'central station'
    },
    pickupLocation: 'Downtown Plaza',
    dropLocation: 'Tech Park',
    scheduledTime: new Date(),
    fare: 150,
    qrCode: 'https://api.qrserver.com/v1/create-qr-code/?data=RideBooking:1&size=100x100',
    status: 'booked'
  },
  {
    _id: '2',
    ride: {
      driverName: 'Jane Smith',
      vehicleType: 'SUV',
      vehicleNumber: 'XYZ-9876',
      station: 'north terminal'
    },
    pickupLocation: 'Mall Stop',
    dropLocation: 'Airport Road',
    scheduledTime: new Date(),
    fare: 220,
    qrCode: 'https://api.qrserver.com/v1/create-qr-code/?data=RideBooking:2&size=100x100',
    status: 'completed'
  }
];

const getStatusVariant = (status) => {
  switch (status) {
    case 'booked':
      return <Badge bg="warning"><FaHourglassHalf /> Booked</Badge>;
    case 'completed':
      return <Badge bg="success"><FaCheckCircle /> Completed</Badge>;
    case 'cancelled':
      return <Badge bg="danger"><FaTimesCircle /> Cancelled</Badge>;
    default:
      return <Badge bg="secondary">{status}</Badge>;
  }
};

const RideBookings = () => {
  const bookings = sampleBookings;

  return (
    <Container className="my-4">
      <h2 className="mb-4 text-center">Your Ride Bookings</h2>
      <Row xs={1} md={2} className="g-4">
        {bookings.length === 0 ? (
          <div className="text-center">
            <Spinner animation="border" />
            <p>Loading bookings...</p>
          </div>
        ) : (
          bookings.map((booking) => (
            <Col key={booking._id}>
              <Card className="shadow-sm h-100 border-0">
                <Card.Body>
                  <Card.Title className="d-flex justify-content-between align-items-center">
                    <span><FaCar className="me-2" />{booking.ride.vehicleType} - {booking.ride.vehicleNumber}</span>
                    {getStatusVariant(booking.status)}
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Driver: {booking.ride.driverName}</Card.Subtitle>
                  <hr />
                  <p><FaMapMarkerAlt className="me-2" />From: <strong>{booking.pickupLocation}</strong></p>
                  <p><FaMapMarkerAlt className="me-2" />To: <strong>{booking.dropLocation}</strong></p>
                  <p><FaClock className="me-2" />Scheduled: {new Date(booking.scheduledTime).toLocaleString()}</p>
                  <p><FaMoneyBillAlt className="me-2" />Fare: ₹{booking.fare}</p>
                </Card.Body>
                <Card.Footer className="bg-white text-center">
                  <div>
                    <FaQrcode className="mb-2" size={22} />
                    <div>
                      <img src={booking.qrCode} alt="QR Code" width="100" height="100" />
                    </div>
                  </div>
                </Card.Footer>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
};

export default RideBookings;

// ParkingBookings.jsx

import React from 'react';
import { Card, Row, Col, Spinner, Badge, Container } from 'react-bootstrap';
import { FaCar, FaMapMarkerAlt, FaMoneyBillAlt, FaClock, FaQrcode, FaCheckCircle, FaTimesCircle, FaHourglassHalf } from 'react-icons/fa';

const sampleParkingBookings = [
  {
    _id: '1',
    parkingArea: {
      name: 'Downtown Parking',
      location: 'Downtown Plaza',
      address: '123 Downtown Street',
    },
    startTime: new Date(),
    endTime: new Date(),
    fare: 100,
    bookingId: 'BOOK-XYZ123',
    qrCode: 'https://api.qrserver.com/v1/create-qr-code/?data=ParkingBooking:1&size=100x100',
    status: 'confirmed'
  },
  {
    _id: '2',
    parkingArea: {
      name: 'Tech Park Parking',
      location: 'Tech Park',
      address: '456 Tech Road',
    },
    startTime: new Date(),
    endTime: new Date(),
    fare: 150,
    bookingId: 'BOOK-ABC456',
    qrCode: 'https://api.qrserver.com/v1/create-qr-code/?data=ParkingBooking:2&size=100x100',
    status: 'completed'
  }
];

const getStatusVariant = (status) => {
  switch (status) {
    case 'confirmed':
      return <Badge bg="warning"><FaHourglassHalf /> Confirmed</Badge>;
    case 'completed':
      return <Badge bg="success"><FaCheckCircle /> Completed</Badge>;
    case 'cancelled':
      return <Badge bg="danger"><FaTimesCircle /> Cancelled</Badge>;
    default:
      return <Badge bg="secondary">{status}</Badge>;
  }
};

const ParkingBookings = () => {
  const bookings = sampleParkingBookings;

  return (
    <Container className="my-4">
      <h2 className="mb-4 text-center">Your Parking Bookings</h2>
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
                    <span><FaCar className="me-2" />{booking.parkingArea.name}</span>
                    {getStatusVariant(booking.status)}
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Location: {booking.parkingArea.location}</Card.Subtitle>
                  <hr />
                  <p><FaMapMarkerAlt className="me-2" />Address: <strong>{booking.parkingArea.address}</strong></p>
                  <p><FaClock className="me-2" />Start Time: {new Date(booking.startTime).toLocaleString()}</p>
                  <p><FaClock className="me-2" />End Time: {new Date(booking.endTime).toLocaleString()}</p>
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

export default ParkingBookings;

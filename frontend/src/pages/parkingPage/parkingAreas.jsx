
import { Container, Card, Row, Col, Badge } from 'react-bootstrap';
import { FaMapMarkerAlt, FaCar, FaMoneyBillWave, FaParking } from 'react-icons/fa';

const sampleParkingAreas = [
  {
    _id: '1',
    name: 'Green Park Basement',
    location: { lat: 28.567, lng: 77.234 },
    address: 'Green Park, New Delhi',
    totalSpots: 100,
    availableSpots: 35,
    pricePerHour: 20,
    nearStation: 'green park',
  },
  {
    _id: '2',
    name: 'Cyber City Zone A',
    location: { lat: 28.495, lng: 77.089 },
    address: 'Cyber Hub, Gurugram',
    totalSpots: 150,
    availableSpots: 60,
    pricePerHour: 30,
    nearStation: 'cyber city',
  },
  {
    _id: '3',
    name: 'Sector 18 Multilevel',
    location: { lat: 28.567, lng: 77.325 },
    address: 'Sector 18, Noida',
    totalSpots: 120,
    availableSpots: 12,
    pricePerHour: 15,
    nearStation: 'noida sec 18',
  },
];

const ParkingAreas = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4 fw-bold">Available Parking Areas</h2>
      <Row className="g-4">
        {sampleParkingAreas.map((area) => (
          <Col key={area._id} xs={12} sm={6} md={4}>
            <Card className="h-100 shadow-lg border-0 bg-light bg-gradient rounded-4">
              <Card.Body className="p-4">
                <h4 className="mb-3 text-primary">
                  <FaParking className="me-2 mb-1" />
                  {area.name}
                </h4>

                <p>
                  <FaMapMarkerAlt className="me-2 text-danger" />
                  <strong>Address:</strong> {area.address}
                </p>

                <p>
                  <FaCar className="me-2 text-secondary" />
                  <strong>Spots:</strong> {area.availableSpots}/{area.totalSpots}
                </p>

                <p>
                  <FaMoneyBillWave className="me-2 text-success" />
                  <strong>Price/hr:</strong> ₹{area.pricePerHour}
                </p>

                <p>
                  <strong>Nearest Station:</strong>{' '}
                  <Badge bg="info" className="text-uppercase">
                    {area.nearStation}
                  </Badge>
                </p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ParkingAreas;

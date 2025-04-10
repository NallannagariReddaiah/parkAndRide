import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import {
  FaMapMarkerAlt,
  FaParking,
  FaMoneyBillWave,
  FaMapPin,
  FaTrash,
} from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";

const ParkingAreaDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [parking, setParking] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulated data fetch (replace with actual fetch)
    setTimeout(() => {
      setParking({
        _id: id,
        name: "CyberHub Parking",
        location: { lat: 28.5041, lng: 77.0934 },
        address: "CyberHub, Gurugram, Haryana",
        totalSpots: 80,
        availableSpots: 25,
        pricePerHour: 40,
        nearStation: "cyber city",
      });
      setLoading(false);
    }, 600);
  }, [id]);

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this parking area?"))
      return;
    try {
      await axios.delete(`/api/parking/${id}`);
      navigate("/admin/parking");
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };
  const toggleAvailability = async () => {
    try {
      const { data } = await axios.patch(
        `/api/parking/${id}/toggle-availability`
      );
      setParking(data.updatedParkingArea);
    } catch (err) {
      console.error("Toggle availability failed:", err);
    }
  };

  if (loading)
    return <p className="text-center mt-4">Loading parking details...</p>;
  if (!parking)
    return <p className="text-center text-danger">Parking area not found.</p>;

  return (
    <Container className="py-4">
      <Row>
        {/* Left Side - Info */}
        <Col md={7}>
          <Card className="shadow-sm border-0 rounded-4 mb-3">
            <Card.Body>
              <div className="d-flex align-items-center mb-2">
                <FaParking className="me-2 text-primary" size={22} />
                <h5 className="mb-0 text-uppercase">{parking.name}</h5>
              </div>
              <hr />
              <p className="mb-1">
                <FaMapMarkerAlt className="me-2 text-danger" />{" "}
                <strong>Address:</strong> {parking.address}
              </p>
              <p className="mb-1">
                <FaMapPin className="me-2 text-info" />{" "}
                <strong>Near Station:</strong> {parking.nearStation}
              </p>
              <p className="mb-1">
                <strong>Location (Lat, Lng):</strong> {parking.location.lat},{" "}
                {parking.location.lng}
              </p>
              <p className="mb-1">
                <strong>Total Spots:</strong> {parking.totalSpots}
              </p>
              <p className="mb-1">
                <strong>Available Spots:</strong>{" "}
                <Badge bg={parking.availableSpots > 0 ? "success" : "danger"}>
                  {parking.availableSpots}
                </Badge>
              </p>
              <p className="mb-0">
                <FaMoneyBillWave className="me-2 text-success" />{" "}
                <strong>Price Per Hour:</strong> ₹{parking.pricePerHour}
              </p>
            </Card.Body>
          </Card>
        </Col>

        {/* Right Side - Controls */}
        <Col md={5}>
          <Card className="shadow-sm border-0 rounded-4">
            <Card.Header className="bg-light">
              <strong>Actions</strong>
            </Card.Header>
            <Card.Body>
              <Button
                variant="danger"
                className="w-100 mb-2"
                onClick={handleDelete}
              >
                <FaTrash className="me-2" />
                Delete Parking
              </Button>
              <Button
                variant={parking.availableSpots === 0 ? "success" : "warning"}
                className="w-100 mb-3"
                onClick={toggleAvailability}
              >
                {parking.availableSpots === 0
                  ? "Mark Available"
                  : "Mark as Full (0)"}
              </Button>
              {/* Future: Add Update or Mark Full button here */}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ParkingAreaDetails;

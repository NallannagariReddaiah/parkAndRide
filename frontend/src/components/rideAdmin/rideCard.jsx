// src/components/RideCard.jsx
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsPerson, BsCarFrontFill, BsCheckCircle, BsXCircle } from 'react-icons/bs';

const RideCard = ({ ride }) => {
  return (
    <Card className="shadow-sm rounded-4 m-2" style={{ width: '22rem', background: '#f8f9fa' }}>
      <Card.Body>
        <Card.Title className="mb-3 d-flex align-items-center gap-2">
          <BsCarFrontFill /> {ride.vehicleType.toUpperCase()}
        </Card.Title>
        <Card.Text><BsPerson /> Driver: {ride.driverName}</Card.Text>
        <Card.Text>Vehicle No: {ride.vehicleNumber}</Card.Text>
        <Card.Text>Station: {ride.station}</Card.Text>
        <Card.Text>Capacity: {ride.capacity}</Card.Text>
        <Card.Text>
          Status:{' '}
          {ride.isAvailable ? (
            <span className="text-success"><BsCheckCircle /> Available</span>
          ) : (
            <span className="text-danger"><BsXCircle /> Not Available</span>
          )}
        </Card.Text>
        <Card.Text>Created At: {new Date(ride.createdAt).toLocaleString()}</Card.Text>

        <Link to={`/ride/${ride._id}`}>
          <Button variant="primary" className="w-100 mt-2">View Details</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default RideCard;

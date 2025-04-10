// src/components/Footer.jsx
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer mt-auto py-5 text-light" style={{ backgroundColor: '#212529' }}>
      <Container>
        <Row>
          <Col md={4} className="mb-4">
            <h5 className="fw-bold">Park & Ride</h5>
            <p>
              Making urban mobility smarter and more sustainable. Book rides and parking with ease!
            </p>
          </Col>

          <Col md={2} className="mb-4">
            <h6 className="text-uppercase fw-bold mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li><a href="/" className="footer-link">Home</a></li>
              <li><a href="/user/login" className="footer-link">Login</a></li>
              <li><a href="/user/signup" className="footer-link">Register</a></li>
              <li><a href="/user/parking-slots-by-station" className="footer-link">Parking</a></li>
              <li><a href="/user/availabe-rides-by-station" className="footer-link">Rides</a></li>
            </ul>
          </Col>

          <Col md={3} className="mb-4">
            <h6 className="text-uppercase fw-bold mb-3">Contact</h6>
            <p>Email: support@parkandride.com</p>
            <p>Phone: +91 98765 43210</p>
            <p>Location: Hyderabad, India</p>
          </Col>

          <Col md={3} className="mb-4">
            <h6 className="text-uppercase fw-bold mb-3">Follow Us</h6>
            <div className="d-flex gap-3">
              <a href="#"><FaFacebookF className="footer-icon" /></a>
              <a href="#"><FaTwitter className="footer-icon" /></a>
              <a href="#"><FaInstagram className="footer-icon" /></a>
              <a href="#"><FaLinkedin className="footer-icon" /></a>
            </div>
          </Col>
        </Row>
        <hr className="border-top border-light mt-4" />
        <div className="text-center">
          <small>&copy; {new Date().getFullYear()} Park & Ride. All rights reserved.</small>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const RideAdminSignupForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    vehicleType: '',
    station: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${import.meta.env.VITE_API_BASE_URL}/auth/ride-admin/signup`, formData,{
        withCredentials:true,
      });
      alert('Ride Admin account created. Please log in.');
      navigate('/ride-admin/login');
    } catch (err) {
      alert(err.response?.data?.message || 'Signup failed');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Ride Admin Signup</h2>
      <form onSubmit={handleSubmit} className="mt-3">
        <input
          className="form-control mb-2"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          required
        />
        <input
          className="form-control mb-2"
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <input
          className="form-control mb-2"
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />
        <select
          className="form-select mb-2"
          name="vehicleType"
          onChange={handleChange}
          required
        >
          <option value="">Select Vehicle Type</option>
          <option value="cab">Cab</option>
          <option value="shuttle">Shuttle</option>
          <option value="e-rickshaw">E-Rickshaw</option>
        </select>
        <input
          className="form-control mb-3"
          name="station"
          placeholder="Station"
          onChange={handleChange}
          required
        />
        <button className="btn btn-primary w-100">Sign Up</button>
      </form>
      <p className="mt-3">
        Already have an account? <Link to="/ride-admin/login">Go to Login</Link>
      </p>
    </div>
  );
};

export default RideAdminSignupForm;

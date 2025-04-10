import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const ParkingAdminSignupForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${import.meta.env.VITE_API_BASE_URL}/auth/parking-admin/signup`, formData,{
        withCredentials:true,
      });
      alert('Parking Admin account created. Please log in.');
      navigate('/parking-admin/login');
    } catch (err) {
      alert(err.response?.data?.message || 'Signup failed');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Parking Admin Signup</h2>
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
          className="form-control mb-3"
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />
        <button className="btn btn-primary w-100">Sign Up</button>
      </form>
      <p className="mt-3">
        Already have an account?{' '}
        <Link to="/parking-admin/login">Go to Login</Link>
      </p>
    </div>
  );
};

export default ParkingAdminSignupForm;

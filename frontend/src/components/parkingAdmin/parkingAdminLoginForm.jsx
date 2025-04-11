import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const ParkingAdminLoginForm = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${import.meta.env.VITE_API_BASE_URL}/auth/parking-admin/login`, formData,{
        withCredentials:true,
      });
      navigate('/parking-admin/dashboard'); // or relevant page
    } catch (err) {
      alert(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Parking Admin Login</h2>
      <form onSubmit={handleSubmit} className="mt-3">
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
        <button className="btn btn-primary w-100">Login</button>
      </form>
      <p className="mt-3">
        Don’t have an account?{' '}
        <Link to="/parking-admin/signup">Create one</Link>
      </p>
    </div>
  );
};

export default ParkingAdminLoginForm;

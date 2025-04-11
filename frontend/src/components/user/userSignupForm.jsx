import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignupForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${import.meta.env.VITE_API_BASE_URL}/auth/user/signup`, formData,{
        withCredentials:true,
      });
      alert('Account created! Please log in.');
      navigate('/login');
    } catch (err) {
      alert(err.response?.data?.message || 'Signup failed');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit} className="mt-3">
        <input name="name" placeholder="Name" className="form-control mb-2" onChange={handleChange} required />
        <input name="email" placeholder="Email" type="email" className="form-control mb-2" onChange={handleChange} required />
        <input name="password" placeholder="Password" type="password" className="form-control mb-2" onChange={handleChange} required />
        <button className="btn btn-primary w-100">Sign Up</button>
      </form>
      <p className="mt-3">
        Already have an account? <Link to="/user/login">Go to Login</Link>
      </p>
    </div>
  );
};

export default SignupForm;

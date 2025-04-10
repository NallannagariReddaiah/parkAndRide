import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginForm = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${import.meta.env.VITE_API_BASE_URL}/auth/user/login`, formData,{
        withCredentials:true,
      });
      navigate('/'); // or your dashboard route
    } catch (err) {
      alert(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="mt-3">
        <input name="email" placeholder="Email" type="email" className="form-control mb-2" onChange={handleChange} required />
        <input name="password" placeholder="Password" type="password" className="form-control mb-2" onChange={handleChange} required />
        <button className="btn btn-primary w-100">Login</button>
      </form>
      <p className="mt-3">
        Don’t have an account? <Link to="/user/signup">Create one</Link>
      </p>
    </div>
  );
};

export default LoginForm;

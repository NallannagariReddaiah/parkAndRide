import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import User from '../models/user.model.js';
import generateTokenAndSetCookie from '../lib/utils/generateTokenAndSetCookie.js';


export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;


    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'User already exists' });

   
    const hashedPassword = await bcrypt.hash(password, 10);

    
    const user = await User.create({ name, email, password: hashedPassword });


    generateTokenAndSetCookie(user._id,"user",res);
    res.status(201).json({
      message: 'Signup successful',
      user: { name: user.name, email: user.email, role: user.role },
    });
  } catch (err) {
    res.status(500).json({ message: 'Signup failed', error: err.message });
  }
};

export const login= async (req, res) => {
  try {
    const { email, password } = req.body;

    
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'User not found' });

    
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

   
    generateTokenAndSetCookie(user._id,"user",res);
    
    res.json({
      message: 'Login successful',
      user: { name: user.name, email: user.email, role: user.role },
    });
  } catch (err) {
    res.status(500).json({ message: 'Login failed', error: err.message });
  }
};

export const logout = (req, res) => {
  res.clearCookie('jwt', COOKIE_OPTIONS).json({ message: 'Logged out successfully' });
};

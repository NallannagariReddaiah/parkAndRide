import bcrypt from 'bcryptjs';
import ParkingAdmin from '../../models/parking/parking.admin.model.js';
import generateTokenAndSetCookie from '../../lib/utils/generateTokenAndSetCookie.js';


export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingAdmin = await ParkingAdmin.findOne({ email });
    if (existingAdmin) return res.status(400).json({ message: 'Parking admin already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);

    const admin = await ParkingAdmin.create({ name, email, password: hashedPassword });

    generateTokenAndSetCookie(admin._id, 'parkingAdmin', res);

    res.status(201).json({
      message: 'Signup successful',
      admin: { name: admin.name, email: admin.email, role: admin.role },
    });
  } catch (err) {
    res.status(500).json({ message: 'Signup failed', error: err.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await ParkingAdmin.findOne({ email });
    if (!admin) return res.status(404).json({ message: 'Parking admin not found' });

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    generateTokenAndSetCookie(admin._id, 'parkingAdmin', res);

    res.json({
      message: 'Login successful',
      admin: { name: admin.name, email: admin.email, role: admin.role },
    });
  } catch (err) {
    res.status(500).json({ message: 'Login failed', error: err.message });
  }
};

export const logout = (req, res) => {
  res.clearCookie('jwt', COOKIE_OPTIONS).json({ message: 'Logged out successfully' });
};

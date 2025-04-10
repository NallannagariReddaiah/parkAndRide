import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, default: 'user' }, // Fixed as user
});

const userModel = mongoose.model('User', userSchema);

export default userModel;

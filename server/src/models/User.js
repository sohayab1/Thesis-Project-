import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: { type: String, unique: true },
  phone: String,
  nidNumber: String,
  password: String,
  nidFront: String,
  nidBack: String,
  selfie: String,
}, { timestamps: true });

export default mongoose.model("User", userSchema);

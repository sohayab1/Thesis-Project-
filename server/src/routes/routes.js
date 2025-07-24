import express from "express";
import multer from "multer";
import path from "path";
import bcrypt from "bcryptjs";
import User from "../models/User.js";

const router = express.Router();

// Setup multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
});

const upload = multer({ storage });

// --- REGISTER ---
router.post("/register", upload.fields([
  { name: "nidFront", maxCount: 1 },
  { name: "nidBack", maxCount: 1 },
  { name: "selfie", maxCount: 1 },
]), async (req, res) => {
  try {
    const { firstName, lastName, email, phone, nidNumber, password } = req.body;

    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ msg: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      firstName,
      lastName,
      email,
      phone,
      nidNumber,
      password: hashedPassword,
      nidFront: req.files.nidFront?.[0].filename,
      nidBack: req.files.nidBack?.[0].filename,
      selfie: req.files.selfie?.[0].filename,
    });

    await user.save();
    res.status(201).json({ msg: "User registered!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
});

// --- LOGIN ---
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: "Invalid email or password" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid email or password" });

    res.status(200).json({ msg: "Login successful", user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
});

export default router;

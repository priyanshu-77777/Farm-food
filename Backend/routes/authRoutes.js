const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const rateLimit = require("express-rate-limit");
const { body, validationResult } = require("express-validator");

const User = require("../models/User");

const router = express.Router();
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: {
    message: "Too many authentication attempts. Please try again later."
  },
  standardHeaders: true,
  legacyHeaders: false
});


// ================= REGISTER =================

// POST /api/auth/register
router.post(
  "/register",
  authLimiter,

  // Validation
  [
    body("email")
      .isEmail()
      .withMessage("Please provide a valid email")
      .normalizeEmail(),

    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters")
  ],

  async (req, res) => {
    try {
      // Check validation errors
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          message: "Validation failed",
          errors: errors.array()
        });
      }

      const { email, password } = req.body;

      // Check if email already exists
      const existingUser = await User.findOne({ email });

      if (existingUser) {
        return res.status(400).json({
          message: "Email already registered"
        });
      }

      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create user
      const user = await User.create({
        email,
        password: hashedPassword
      });

      // Never return password
      res.status(201).json({
        message: "User registered successfully",
        user: {
          id: user._id,
          email: user.email
        }
      });

    } catch (error) {
      console.error("Registration error:", error);

      res.status(500).json({
        message: "Server error during registration"
      });
    }
  }
);


// ================= LOGIN =================

// POST /api/auth/login
router.post(
  "/login",
  authLimiter,

  // Validation
  [
    body("email")
      .isEmail()
      .withMessage("Please provide a valid email")
      .normalizeEmail(),

    body("password")
      .notEmpty()
      .withMessage("Password is required")
  ],

  async (req, res) => {
    try {
      // Check validation errors
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          message: "Validation failed",
          errors: errors.array()
        });
      }

      const { email, password } = req.body;

      // Find user
      const user = await User.findOne({ email });

      if (!user) {
        return res.status(401).json({
          message: "Invalid email or password"
        });
      }

      // Compare entered password with hashed password
      const isPasswordCorrect = await bcrypt.compare(
        password,
        user.password
      );

      if (!isPasswordCorrect) {
        return res.status(401).json({
          message: "Invalid email or password"
        });
      }

      // Login successful
     // Create JWT
const token = jwt.sign(
  {
    userId: user._id,
    email: user.email
  },
  process.env.JWT_SECRET,
  {
    expiresIn: "7d"
  }
);

// Login successful
res.status(200).json({
  message: "Login successful",
  token
});

    } catch (error) {
      console.error("Login error:", error);

      res.status(500).json({
        message: "Server error during login"
      });
    }
  }
);


module.exports = router;
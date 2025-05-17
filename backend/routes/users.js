const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const auth = require("../middleware/auth");
const signup = require("../controllers/user/signup");
const login = require("../controllers/user/login"); // Add login controller
const get = require("../controllers/user/get");
const update = require("../controllers/user/update");

// @route   POST api/users/signup
// @desc    Register a user
// @access  Public
router.post(
  "/signup",
  [
    check("firstName", "First name is required").not().isEmpty(),
    check("lastName", "Last name is required").not().isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check("password", "Please enter a password with 6 or more characters").isLength({ min: 6 }),
  ],
  signup
);

// @route   POST api/users/login
// @desc    Authenticate user and get token
// @access  Public
router.post(
  "/login",
  [
    check("email", "Please include a valid email").isEmail(),
    check("password", "Password is required").exists(),
  ],
  login
);

// @route   GET api/users/me
// @desc    Get current user profile
// @access  Private
router.get("/me", auth, get);

// @route   PUT api/users/me
// @desc    Update user profile
// @access  Private
router.put("/me", auth, update);

module.exports = router;

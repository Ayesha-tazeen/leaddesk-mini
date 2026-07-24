const express = require('express');
const { body } = require('express-validator');
const { loginUser } = require('../controllers/authController');

const router = express.Router();

// Validation rules for login
const loginValidation = [
  body('email')
    .isEmail()
    .withMessage('Please provide a valid email address')
    .normalizeEmail(),
  body('password')
    .notEmpty()
    .withMessage('Password is required'),
];

// POST /api/auth/login
router.post('/login', loginValidation, loginUser);

module.exports = router;

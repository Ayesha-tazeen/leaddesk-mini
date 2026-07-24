const express = require('express');
const { body } = require('express-validator');
const { createLead, getLeads, updateLeadStatus } = require('../controllers/leadController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

// Validation rules for creating a new lead
const createLeadValidation = [
  body('name')
    .trim()
    .notEmpty().withMessage('Name is required')
    .isLength({ min: 2, max: 100 }).withMessage('Name must be between 2 and 100 characters'),

  body('email')
    .isEmail().withMessage('Please provide a valid email address')
    .normalizeEmail(),

  body('budget')
    .notEmpty().withMessage('Budget range is required')
    .isIn(['Under $1,000', '$1,000 - $5,000', '$5,000 - $10,000', '$10,000 - $50,000', '$50,000+'])
    .withMessage('Please select a valid budget range'),

  body('message')
    .trim()
    .notEmpty().withMessage('Message is required')
    .isLength({ min: 10, max: 1000 }).withMessage('Message must be between 10 and 1000 characters'),
];

// POST /api/leads — public (anyone can submit)
router.post('/', createLeadValidation, createLead);

// GET /api/leads — protected (admin only)
router.get('/', protect, getLeads);

// PATCH /api/leads/:id — protected (admin only)
router.patch('/:id', protect, updateLeadStatus);

module.exports = router;

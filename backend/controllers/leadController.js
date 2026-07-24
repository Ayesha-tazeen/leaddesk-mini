const asyncHandler = require('express-async-handler');
const { validationResult } = require('express-validator');
const Lead = require('../models/Lead');

/**
 * @desc    Create a new lead (public form submission)
 * @route   POST /api/leads
 * @access  Public
 */
const createLead = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400);
    throw new Error(errors.array().map((e) => e.msg).join(', '));
  }

  const { name, email, budget, message } = req.body;

  const lead = await Lead.create({ name, email, budget, message });

  res.status(201).json({
    success: true,
    message: 'Thank you! Your message has been received. We will be in touch soon.',
    data: lead,
  });
});

/**
 * @desc    Get all leads with optional search filtering
 * @route   GET /api/leads?search=<term>
 * @access  Protected (Admin)
 */
const getLeads = asyncHandler(async (req, res) => {
  const { search } = req.query;

  let query = {};

  if (search && search.trim() !== '') {
    const term = search.trim();
    // Case-insensitive regex search across name and email fields
    query = {
      $or: [
        { name: { $regex: term, $options: 'i' } },
        { email: { $regex: term, $options: 'i' } },
      ],
    };
  }

  const leads = await Lead.find(query).sort({ createdAt: -1 });

  res.status(200).json({
    success: true,
    count: leads.length,
    data: leads,
  });
});

/**
 * @desc    Update a lead's status
 * @route   PATCH /api/leads/:id
 * @access  Protected (Admin)
 */
const updateLeadStatus = asyncHandler(async (req, res) => {
  const { status } = req.body;

  const allowedStatuses = ['New', 'Contacted', 'Closed'];
  if (!status || !allowedStatuses.includes(status)) {
    res.status(400);
    throw new Error(`Invalid status. Must be one of: ${allowedStatuses.join(', ')}`);
  }

  const lead = await Lead.findByIdAndUpdate(
    req.params.id,
    { status },
    { new: true, runValidators: true }
  );

  if (!lead) {
    res.status(404);
    throw new Error('Lead not found');
  }

  res.status(200).json({
    success: true,
    message: `Lead status updated to "${status}"`,
    data: lead,
  });
});

module.exports = { createLead, getLeads, updateLeadStatus };

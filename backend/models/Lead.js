const mongoose = require('mongoose');

const BUDGET_RANGES = [
  'Under $1,000',
  '$1,000 - $5,000',
  '$5,000 - $10,000',
  '$10,000 - $50,000',
  '$50,000+',
];

const STATUS_VALUES = ['New', 'Contacted', 'Closed'];

const leadSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
      minlength: [2, 'Name must be at least 2 characters'],
      maxlength: [100, 'Name cannot exceed 100 characters'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address'],
    },
    budget: {
      type: String,
      required: [true, 'Budget range is required'],
      enum: {
        values: BUDGET_RANGES,
        message: 'Please select a valid budget range',
      },
    },
    message: {
      type: String,
      required: [true, 'Message is required'],
      trim: true,
      minlength: [10, 'Message must be at least 10 characters'],
      maxlength: [1000, 'Message cannot exceed 1000 characters'],
    },
    status: {
      type: String,
      enum: {
        values: STATUS_VALUES,
        message: 'Status must be New, Contacted, or Closed',
      },
      default: 'New',
    },
  },
  {
    timestamps: true, // adds createdAt and updatedAt automatically
  }
);

// Index for fast search queries on name and email
leadSchema.index({ name: 'text', email: 'text' });

const Lead = mongoose.model('Lead', leadSchema);

module.exports = Lead;

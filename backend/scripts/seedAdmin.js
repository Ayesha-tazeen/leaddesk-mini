/**
 * Admin Seeder Script
 * -------------------
 * Creates the initial admin user in MongoDB from environment variables.
 * Run ONCE after initial setup: npm run seed
 *
 * Usage:
 *   1. Ensure your .env file is configured with ADMIN_EMAIL and ADMIN_PASSWORD
 *   2. Run: npm run seed
 */

require('dotenv').config();
const mongoose = require('mongoose');
const User = require('../models/User');
const connectDB = require('../config/db');

const seedAdmin = async () => {
  try {
    await connectDB();

    const { ADMIN_EMAIL, ADMIN_PASSWORD } = process.env;

    if (!ADMIN_EMAIL || !ADMIN_PASSWORD) {
      console.error('❌ ADMIN_EMAIL and ADMIN_PASSWORD must be set in your .env file');
      process.exit(1);
    }

    // Check if admin already exists
    const existingAdmin = await User.findOne({ email: ADMIN_EMAIL });

    if (existingAdmin) {
      console.log(`ℹ️  Admin user already exists: ${ADMIN_EMAIL}`);
      process.exit(0);
    }

    // Create new admin — password hashing is handled by the User model pre-save hook
    const admin = await User.create({
      email: ADMIN_EMAIL,
      password: ADMIN_PASSWORD,
      role: 'admin',
    });

    console.log(`✅ Admin user created successfully!`);
    console.log(`   Email:    ${admin.email}`);
    console.log(`   Role:     ${admin.role}`);
    console.log(`   Created:  ${admin.createdAt}`);
    console.log('\n⚠️  Store your credentials securely. This script has exited.');

    process.exit(0);
  } catch (error) {
    console.error(`❌ Seeder error: ${error.message}`);
    process.exit(1);
  }
};

seedAdmin();

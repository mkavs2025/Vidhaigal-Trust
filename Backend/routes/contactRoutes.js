const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// @desc    Submit contact form
// @route   POST /api/contacts
// @access  Public
router.post('/', async (req, res) => {
  try {
    const contact = await Contact.create(req.body);
    res.status(201).json({
      success: true,
      data: contact
    });
  } catch (err) {
    if (err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map(val => val.message);
      return res.status(400).json({
        success: false,
        error: messages
      });
    } else {
      res.status(500).json({
        success: false,
        error: 'Server Error'
      });
    }
  }
});

module.exports = router;

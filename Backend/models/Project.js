const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a project name'],
    trim: true
  },
  status: {
    type: String,
    required: [true, 'Please add a status'],
    enum: ['Active', 'Planning', 'Completed'],
    default: 'Planning'
  },
  progress: {
    type: Number,
    required: true,
    min: 0,
    max: 100,
    default: 0
  },
  startDate: {
    type: String,
    required: true
  },
  targetDate: {
    type: String,
    required: true
  },
  lead: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Project', projectSchema);

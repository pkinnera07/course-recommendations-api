// models/Course.js
const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  courseId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  description: { type: String },
  tags: [String],  // Array of tags
  complexity: { type: String },
  prerequisites: [String],
  duration: { type: String },
  rating: { type: Number },
});

const Course = mongoose.model('Course', courseSchema);
module.exports = Course;

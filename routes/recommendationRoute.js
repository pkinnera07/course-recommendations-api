// routes/recommendationRoute.js
const express = require('express');
const router = express.Router();
const { getRecommendations } = require('../services/recommendationService');

// GET /recommendations/:courseId
router.get('/:courseId', async (req, res) => {
  try {
    const courseId = req.params.courseId;
    
    // Fetch recommended courses based on courseId
    const recommendedCourses = await getRecommendations(courseId);

    // Return recommended courses
    res.status(200).json(recommendedCourses);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;

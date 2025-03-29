const Course = require('../models/Course');

async function getRecommendations(courseId) {
  try {
    // Find the course by ID
    const course = await Course.findById(courseId);
    
    if (!course) {
      throw new Error('Course not found');
    }

    // Get the tags of the course
    const tags = course.tags;

    // Find other courses with matching tags, excluding the course itself
    const recommendedCourses = await Course.find({
      tags: { $in: tags },  // Match courses with any of the tags
      _id: { $ne: courseId }  // Exclude the current course
    });

    return recommendedCourses;
  } catch (error) {
    console.error('Error fetching recommendations:', error);
    throw error;
  }
}

module.exports = { getRecommendations };

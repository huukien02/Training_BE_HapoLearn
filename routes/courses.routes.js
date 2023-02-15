const express = require('express');
const router = express.Router();
const listCoursesService = require('../service/courses.service')


/* GET All Courses. */
router.get('/', listCoursesService.getCourses);

module.exports = router;




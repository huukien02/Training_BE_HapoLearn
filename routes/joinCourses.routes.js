const express = require('express');
const router = express.Router();
const joinCoursesService = require('../service/joinCourses.service')
const auth = require('../middleware/auth')

/* Join Courses */
router.post('/', auth, joinCoursesService.joinCourses);

/* Get By Name */
router.get('/detail/join', auth, joinCoursesService.getByName);


/* Check Join Courses */
router.get('/check/courses/:id', auth, joinCoursesService.checkJoinCourses);

module.exports = router;




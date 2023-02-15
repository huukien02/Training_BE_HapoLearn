const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth')

const userService = require('../service/user.service')

/* Get User By Id */
router.get('/', auth, userService.getUser);

module.exports = router;


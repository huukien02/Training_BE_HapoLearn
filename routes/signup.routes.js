const express = require('express');
const router = express.Router();

const signupService = require('../service/signup.service')

/* Signup */
router.post('/', signupService.signup);

module.exports = router;




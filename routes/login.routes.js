const express = require('express');
const router = express.Router();
const loginService = require('../service/login.service')



/* Login. */
router.post('/', loginService.login);

module.exports = router;
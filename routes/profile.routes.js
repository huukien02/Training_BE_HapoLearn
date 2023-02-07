const express = require('express');
const router = express.Router();
const profileService = require('../service/profile.service')
const auth = require('../middleware/auth')


/* Update User. */
router.put('/', auth, profileService.updateProfile);

module.exports = router;





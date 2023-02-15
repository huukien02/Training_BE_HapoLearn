const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth')

const reserPassService = require('../service/resetPass.service')



/* Update password */
router.post('/', reserPassService.reserPass);

module.exports = router;




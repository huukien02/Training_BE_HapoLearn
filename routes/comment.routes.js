const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth')

const commentService = require('../service/comment.service')
const contans = require('../contants/paginationComment')


/* Pagination. */
router.get('/:courses/:page', contans.paginationComment);

/* POST comments. */
router.post('/', auth, commentService.createComment);

/* GET by ID. */
router.get('/:id', commentService.getById);

/* Delete comment */
router.delete('/delete/:id', auth, commentService.deleteComment);

/* Update comment */
router.put('/update', auth, commentService.updateComment);


module.exports = router;
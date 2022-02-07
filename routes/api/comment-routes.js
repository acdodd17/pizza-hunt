const router = require('express').Router();
const { addComment, removeComment } = require('../../controllers/comment-controllers');

// add comment route
router.route('/:pizzaId').post(addComment);

// remove comment route
router.route('/:pizzaId/:commentId').delete(removeComment);

module.exports = router;
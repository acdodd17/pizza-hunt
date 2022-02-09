const router = require('express').Router();
const { 
    addComment, 
    removeComment, 
    addReply, 
    removeReply
} = require('../../controllers/comment-controllers');

// add comment route
router.route('/:pizzaId').post(addComment);

// remove comment or update to add reply 
router
    .route('/:pizzaId/:commentId')
    .put(addReply)
    .delete(removeComment);

// remove reply route
router.route('/:pizzaId/:commentId/:replyId').delete(removeReply);

module.exports = router;
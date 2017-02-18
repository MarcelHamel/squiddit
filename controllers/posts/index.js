// YOU ARE IN POSTS

const express         = require('express');
const router          = express.Router();
const controller      = require('./controller');


// Upvote routing
router.put('/:id/vote', controller.vote);

// New Post
// router.get('/new', controller.new);

// Delete a comment
router.delete('/:id', controller.destroy);




module.exports = router;

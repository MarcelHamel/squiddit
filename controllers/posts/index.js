// YOU ARE IN POSTS

const express         = require('express');
const router          = express.Router();
const controller      = require('./controller');


// Upvote routing
router.put('/:id/vote', controller.vote)

// New comment routing
// router.post('/new', controller.new);




module.exports = router;

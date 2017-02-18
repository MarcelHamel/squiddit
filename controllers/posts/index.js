// YOU ARE IN POSTS

const express         = require('express');
const router          = express.Router();
const controller      = require('./controller');



// New comment routing
// router.post('/new', controller.new);

// Upvote routing
router.put(':id/vote', controller.vote)



module.exports = router;

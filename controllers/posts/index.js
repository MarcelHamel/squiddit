// YOU ARE IN POSTS

const express         = require('express');
const router          = express.Router();
const controller      = require('./controller');


// Upvote routing
router.put('/:id/vote', controller.vote);

// Delete Subcomment
router.delete('/:id/:subid', controller.destroySub);

// New Subcomment
router.post('/:id', controller.newSub);

// Delete a comment
router.delete('/:id', controller.destroy);




module.exports = router;

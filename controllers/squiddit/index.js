const express         = require('express');
const router          = express.Router();
const controller      = require('./controller');



// New topic routing
router.get('/new', controller.new);

// Discussion topic routing
router.get('/:id', controller.show);

// Upvote
router.put('/:id', controller.vote);

// Delete a topic
router.delete('/:id', controller.destroy);

// Add a comment
router.post('/:id', controller.createPost);

// Index routing
router.get('/', controller.index);

// Create a new topic
router.post('/', controller.createTopic);





module.exports = router;

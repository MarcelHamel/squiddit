const express         = require('express');
const router          = express.Router();
const controller      = require('./controller');
const AuthService     = require('../../services/auth.js')



// New topic routing
router.get('/new',
  AuthService.restrict,
  controller.new);

// Discussion topic routing
router.get('/:id', controller.show);

// Upvote
router.put('/:id', controller.vote);

// Delete a topic
router.delete('/:id',
  AuthService.restrict,
  controller.destroy);

// Add a comment
router.post('/:id',
  AuthService.restrict,
  controller.newComment);

// Index routing
router.get('/', controller.index);

// Create a new topic
router.post('/',
  AuthService.restrict,
  controller.newTopic);





module.exports = router;

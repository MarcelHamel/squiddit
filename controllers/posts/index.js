// YOU ARE IN POSTS

const express         = require('express');
const router          = express.Router();
const controller      = require('./controller');
const AuthService     = require('../../services/auth.js');


// Upvote routing
router.put('/:id/vote', controller.vote);

// Delete Subcomment
router.delete('/:id/:subid',
  AuthService.restrict,
  controller.destroySub);

// New Subcomment
router.post('/:id',
  AuthService.restrict,
  controller.newSub);

// Delete a comment
router.delete('/:id',
  AuthService.restrict,
  controller.destroy);




module.exports = router;

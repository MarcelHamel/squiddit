const express         = require('express');
const router          = express.Router();
const controller      = require('./controller');

// Login page
router.get('/', controller.login);

// New User
router.post('/', controller.newUser);

// Log out user
router.get('/logout', controller.logout);

// Check login validity
router.get('/verify', controller.process_login);


module.exports = router;

const express         = require('express');
const router          = express.Router();
const controller      = require('./controller');

// Login page
router.get('/login', controller.login);

// New User
router.post('/login', controller.newUser);

// Log out user
router.get('/logout', controller.logout);

// Check login validity
router.get('/verify', controller.loginVerify);


module.exports = router;

const express         = require('express');
const router          = express.Router();

// Index function
router.use('/squiddit', require('./controllers/squiddit'));

// Single Topic Routing
router.use('/posts', require('./controllers/posts'));

// Users Routing
router.use('/users', require('./controllers/users'));

module.exports = router;

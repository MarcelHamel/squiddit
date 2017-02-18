const express         = require('express');
const router          = express.Router();

// Index function
router.use('/squiddit', require('./controllers/squiddit'));

// Single Topic Routing
router.use('/posts', require('./controllers/posts'));

module.exports = router;

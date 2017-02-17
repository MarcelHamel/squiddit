const express         = require('express');
const router          = express.Router();

router.use('/squiddit', require('./controllers/squiddit'));

module.exports = router;

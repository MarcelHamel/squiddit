const express         = require('express');
const router          = express.Router();
const controller      = require('./controller');



// New topic routing
router.get('/new', controller.new);

// Discussion topic routing
router.get('/:id', controller.show);

// Index routing
router.get('/', controller.index);

// Create a new topic
router.post('/', controller.createTopic);



module.exports = router;

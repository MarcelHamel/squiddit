const express         = require('express');
const router          = express.Router();
const controller      = require('./controller');

//Sub-comment routing
router.put('/posts/:id', controller.editSub);
router.post('/posts/:id', controller.createSub);
router.delete('/posts/:id', controller.destroySub);

// New topic routing
router.get('/new', controller.new);

// User control routing
router.get('/users', controller.newUser);
router.post('/users', controller.createUser);
router.delete('/users', controller.destroyUser);

// Discussion topic routing
router.get('/:id', controller.show);
router.put('/:id', controller.editPost);
router.post('/:id', controller.createPost);
router.delete('/:id', controller.destroyPost);

// Index routing
router.get('/', controller.index);
router.post('/', controller.createTopic);
router.delete('/', controller.destroy);
router.put('/', controller.edit);

module.exports = router;

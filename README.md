# squiddit

A discussion forum for all things squid related. Unit 2 Project for General Assembly Web Development Immersive.

Routes Structure: These SHOULD be labelled semantically.

router.post('/:topic_id/:id' controller.vote);
router.delete('/:id/users', controller.deleteUser);
router.get(':/id/edit', controller.edit);
router.delete('/:id', controller.deletePost);
router.post('/:id', controller.vote); 
router.get(':/id', controller.show);
router.put('/:id', controller.editPost);
router.get('/new', controller.new);
router.post('/users', controller.newUser);
router.put('/users', controller.editUser);
router.post('/', controller.create);
router.get('/', controller.index);


<!-- Redesigned -->
router.put('/posts/:id', controller.editSub);
router.post('/posts/:id', controller.createSub);
router.delete('/posts/:id', controller.destroySub);
router.get('/new', controller.new);
router.get('/users', controller.newUser);
router.post('/users', controller.createUser);
router.delete('/users', controller.destroyUser);
router.get('/:id', controller.show);
router.put('/:id', controller.editPost);
router.post('/:id', controller.createPost);
router.delete('/:id', controller.destroyPost);
router.get('/', controller.index);
router.post('/', controller.createTopic);
router.delete('/', controller.destroy);
router.put('/', controller.edit);



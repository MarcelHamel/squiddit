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

# squiddit

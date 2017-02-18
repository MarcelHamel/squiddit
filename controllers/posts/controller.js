const Posts         = require('../../models/posts');

let controller = {};

controller.vote = (req, res) => {
  Posts.vote(req.params.id)
  .then(() => res.redirect('squiddit/show'))
  .catch(err => console.log('ERROR:', err));
};

module.exports = controller;

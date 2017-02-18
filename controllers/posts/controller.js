const Posts         = require('../../models/posts');

let controller = {};

controller.vote = (req, res) => {
  console.log(req.body);
  Posts.vote(req.params.id)
  .then(() => res.redirect(`/squiddit/${req.body.redir[0]}`))
  .catch(err => console.log('ERROR:', err));
};

controller.destroy = (req, res) => {
  console.log(req.body);
  Posts.destroy(req.params.id)
  .then(() => res.redirect(`/squiddit/${req.body.redir[0]}`))
  .catch(err => console.log('ERROR:', err));
};

module.exports = controller;

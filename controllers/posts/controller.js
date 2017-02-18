const Posts         = require('../../models/posts');

let controller = {};

controller.vote = (req, res) => {
  console.log(req.body);
  Posts.vote(req.params.id)
  .then(() => res.redirect(`/squiddit/${req.body.redir}`))
  .catch(err => console.log('ERROR:', err));
};

module.exports = controller;

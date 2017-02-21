const Posts         = require('../../models/posts');

let controller = {};

// Increments the vote count for specific comments
controller.vote = (req, res) => {
  console.log(req.body);
  Posts.vote(req.params.id)
  .then(() => res.redirect(`/squiddit/${req.body.redir[0]}`))
  .catch(err => console.log('ERROR:', err));
};

// Deletes a comment
controller.destroy = (req, res) => {
  console.log(req.body);
  Posts.destroy(req.params.id)
  .then(() => res.redirect(`/squiddit/${req.body.redir[0]}`))
  .catch(err => console.log('ERROR:', err));
};

// Post a new subcomment
controller.newSub = (req, res) => {
  console.log(req.body);
  Posts.newSub(req.params.id, req.body.subPost, req.session.user)
  .then(() => res.redirect(`/squiddit/${req.body.redir[0]}`))
  .catch(err => console.log('ERROR:', err));
};

// Delete subcomment
controller.destroySub = (req, res) => {
  console.log(req.params.id, req.params.subid);
  Posts.destroySub(req.params.id, req.params.subid)
  .then(() => res.redirect(`/squiddit/${req.body.redir[0]}`))
  .catch(err => console.log('ERROR:', err));
}

module.exports = controller;

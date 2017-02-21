const Posts         = require('../../models/posts');

let controller = {};

// Increments the vote count for specific comments
controller.vote = (req, res) => {
  Posts.vote(req.params.id)
  // Redirects to topic via topic ID held in "Redir" property from EJS
  .then(() => res.redirect(`/squiddit/${req.body.redir[0]}`))
  .catch(err => console.log('ERROR:', err));
};

// Deletes a comment
controller.destroy = (req, res) => {
  Posts.destroy(req.params.id)
  // Redirects to topic via topic ID held in "Redir" property from EJS
  .then(() => res.redirect(`/squiddit/${req.body.redir[0]}`))
  .catch(err => console.log('ERROR:', err));
};

// Post a new subcomment
controller.newSub = (req, res) => {
  Posts.newSub(req.params.id, req.body.subPost, req.session.user)
  // Redirects to topic via topic ID held in "Redir" property from EJS
  .then(() => res.redirect(`/squiddit/${req.body.redir[0]}`))
  .catch(err => console.log('ERROR:', err));
};

// Delete subcomment
controller.destroySub = (req, res) => {
  Posts.destroySub(req.params.id, req.params.subid)
  .then(() => res.redirect(`/squiddit/${req.body.redir[0]}`))
  .catch(err => console.log('ERROR:', err));
}

module.exports = controller;

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

controller.newSub = (req, res) => {
  console.log(req.body);
  Posts.newSub(req.params.id, req.body.subPost)
  .then(() => res.redirect(`/squiddit/${req.body.redir[0]}`))
  .catch(err => console.log('ERROR:', err));
};

controller.destroySub = (req, res) => {
  console.log(req.params.id, req.params.subid);
  Posts.destroySub(req.params.id, req.params.subid)
  .then(() => res.redirect(`/squiddit/${req.body.redir[0]}`))
  .catch(err => console.log('ERROR:', err));
}

module.exports = controller;

const session         = require('express-session');
const Squiddit        = require('../../models/squiddit');
const Posts           = require('../../models/posts');
const marked          = require('marked');
const AuthService    = require('../../services/auth.js');

let controller = {};

// Index functions
controller.index = (req, res) => {
  // Find all posts
  Squiddit.findAll()
  .then((data) => {
    // Then count all comments
    Squiddit.commentCount()
    .then((count) => {

      // Render topics with comment count
      console.log('User Session on Index Page:', req.session.user)
      res.render('squiddit/index', {
        topics: data,
        count: count,
        req: req
      })
    })
  })

  .catch(err => console.log('ERROR:', err));

};

// Create a new topic
controller.newTopic = (req, res) => {
  console.log(req.session.user);
  Squiddit.newTopic(req.body.topics, req.session.user.username)
  .then(() => res.redirect('/squiddit'))
  .catch(err => console.log('ERROR:', err));
};

// Create a new COMMENT -
controller.newComment = (req, res) => {
  Squiddit.newComment(req.body.post, req.session.user)
  .then(() => res.redirect(`/squiddit/${req.params.id}`))
  .catch(err => console.log('ERROR:', err));
};


// New Topic function
controller.new = (req, res) => {
  res.render('squiddit/new', {
    req: req
  })
};

// Show individual topic page
controller.show = (req, res) => {

  // First grab topic by ID
  Squiddit.findById(req.params.id)
  .then((topic) => {

    // Then grab all of its comments by Topic ID
    Posts.findAllById(req.params.id)
    .then((posts) => {

      // Then grab all sub comments by ID
      Posts.findAllSubsById(req.params.id)
      .then((subs) => {

        // Render it all
        res.render('squiddit/show', {
          topic: topic[0], posts: posts, subs: subs, req: req

        });
      })
    })
  })

  .catch(err => console.log('ERROR:', err));
};

// Vote on topics
controller.vote = (req, res) => {
  Squiddit.vote(req.params.id)
  .then(() => res.redirect(`/squiddit`))
  .catch(err => console.log('ERROR:', err));
};

// Delete a topic
controller.destroy = (req, res) => {
  Squiddit.destroy(req.params.id)
  .then(() => res.redirect('/squiddit'))
  .catch(err => console.log('ERROR:', err));
};


module.exports = controller;

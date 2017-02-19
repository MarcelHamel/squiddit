const Squiddit = require('../../models/squiddit');
const Posts = require('../../models/posts');

let controller = {};

// Index functions
controller.index = (req, res) => {
  Squiddit.findAll()
  .then((data) => {
    Squiddit.commentCount()
    .then((count) => {
      console.log(count);
      res.render('squiddit/index', {
        topics: data, count: count
      })
    })
  })
  .catch(err => console.log('ERROR:', err));
};

controller.createTopic = (req, res) => {
  console.log(req.body.topics);
  Squiddit.createTopic(req.body.topics)
  .then(() => res.redirect('/squiddit'))
  .catch(err => console.log('ERROR:', err));
};

controller.createPost = (req, res) => {
  console.log(req.body.post);
  Squiddit.createPost(req.body.post)
  .then(() => res.redirect(`/squiddit/${req.params.id}`))
  .catch(err => console.log('ERROR:', err));
};


// New Topic function
controller.new = (req, res) => {
  res.render('squiddit/new');
};

controller.show = (req, res) => {
  Squiddit.findById(req.params.id)
  .then((topic) => {
    console.log(topic);

    Posts.findAllById(req.params.id)
    .then((posts) => {
      console.log(posts);

      Posts.findAllSubsById(req.params.id)
      .then((subs) => {
        console.log(subs);
        res.render('squiddit/show', {
          topic: topic[0], posts: posts, subs: subs
        });
      })
    })
  })
  .catch(err => console.log('ERROR:', err));
};

controller.vote = (req, res) => {
  console.log(req.body);
  Squiddit.vote(req.params.id)
  .then(() => res.redirect(`/squiddit`))
  .catch(err => console.log('ERROR:', err));
};

controller.destroy = (req, res) => {
  Squiddit.destroy(req.params.id)
  .then(() => res.redirect('/squiddit'))
  .catch(err => console.log('ERROR:', err));
};

module.exports = controller;

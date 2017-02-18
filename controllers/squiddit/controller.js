const Squiddit = require ('../../models/squiddit');
const Posts = require ('../../models/posts');

let controller = {};

// Index functions
controller.index = (req, res) => {
  Squiddit.findAll()
  .then((data) => res.render('squiddit/index', { topics: data }))
  .catch(err => console.log('ERROR:', err));
};

controller.createTopic = (req, res) => {
  console.log(req.body.topics);
  Squiddit.createTopic(req.body.topics)
  .then(() => res.redirect('/squiddit'))
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
    res.render('squiddit/show', {
        topic: topic[0], posts: posts
      });
    })
   })
  .catch(err => console.log('ERROR:', err));
};


controller.createPost = (req, res) => {

};

module.exports = controller;

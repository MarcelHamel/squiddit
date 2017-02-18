// This is the model for "POSTS"

const db            = require('../config/database');

let controller = {};

controller.findAllById = (id) => {
  return db.manyOrNone('SELECT * FROM posts WHERE topic_id = $1', [id])
};

controller.vote = (id) => {
  return db.none('UPDATE posts SET post_votes = post_votes + 1 WHERE post_id = $1', [id])
}

module.exports = controller;

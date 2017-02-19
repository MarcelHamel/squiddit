const db          = require('../config/database');

let controller = {};

controller.findAll = () => {
  return db.manyOrNone('SELECT * FROM topics ORDER BY votes DESC');
};

controller.createTopic = (topics) => {
  return db.none('INSERT INTO topics (subject, content) VALUES ($1, $2)', [topics.subject, topics.content]);
};

controller.createPost = (post) => {
  return db.none('INSERT INTO posts (topic_id, post_content) VALUES ($1, $2)', [post.topic_id, post.content]);
};

controller.findById = (id)  => {
  return db.manyOrNone('SELECT * FROM topics WHERE id = $1', [id]);
};

controller.vote = (id) => {
  return db.none('UPDATE topics SET votes = votes + 1 WHERE id = $1', [id])
};

controller.commentCount = () => {
  return db.query('SELECT COUNT(*), topic_id FROM posts GROUP BY topic_id;');
}

controller.destroy = (id) => {
  return db.none('DELETE FROM topics WHERE id = $1', [id])
}

module.exports = controller;

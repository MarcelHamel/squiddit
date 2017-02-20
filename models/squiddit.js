const db          = require('../config/database');

let controller = {};

controller.findAll = () => {
  return db.manyOrNone('SELECT * FROM topics ORDER BY votes DESC');
};

controller.createTopic = (topics, user) => {
  return db.none('INSERT INTO topics (subject, content, username) VALUES ($1, $2, $3)', [topics.subject, topics.content, user]);
};

controller.createPost = (post, user) => {
  return db.none('INSERT INTO posts (topic_id, post_content, username) VALUES ($1, $2, $3)', [post.topic_id, post.content, user]);
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

controller.loginVerify = (name, pin) => {
  return db.manyOrNone('SELECT * FROM users WHERE name = $1 AND password = $2', [name, pin]);
};

controller.findUserById = (id) => {
  return db.one('SELECT * FROM users WHERE id = $1', [id]);
};

module.exports = controller;

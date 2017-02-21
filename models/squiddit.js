const db          = require('../config/database');

let controller = {};

// Display all topics
controller.findAll = () => {
  return db.manyOrNone('SELECT * FROM topics ORDER BY votes DESC');
};


// Create new topic
controller.newTopic = (topics, user) => {
  return db.none('INSERT INTO topics (subject, content, username) VALUES ($1, $2, $3)', [topics.subject, topics.content, user]);
};

// Create new comment
controller.newComment = (post, user) => {
  return db.none('INSERT INTO comments (topic_id, content, username) VALUES ($1, $2, $3)', [post.topic_id, post.content, user]);
};

// Find topic by ID
controller.findById = (id)  => {
  return db.manyOrNone('SELECT * FROM topics WHERE id = $1', [id]);
};

// Vote on topic
controller.vote = (id) => {
  return db.none('UPDATE topics SET votes = votes + 1 WHERE id = $1', [id])
};

// find comment count for each topic
controller.commentCount = () => {
  return db.query('SELECT COUNT(*), topic_id FROM comments GROUP BY topic_id;');
}

// Delete topic
controller.destroy = (id) => {
  return db.none('DELETE FROM topics WHERE id = $1', [id])
}



module.exports = controller;

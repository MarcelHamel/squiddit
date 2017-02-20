// This is the model for "POSTS"

const db            = require('../config/database');

let controller = {};

controller.findAllById = (id) => {
  return db.manyOrNone('SELECT * FROM posts WHERE topic_id = $1 ORDER BY post_votes DESC', [id])
};

controller.vote = (id) => {
  return db.none('UPDATE posts SET post_votes = post_votes + 1 WHERE post_id = $1', [id])
};

controller.destroy = (id) => {
  return db.none('DELETE FROM posts WHERE post_id = $1', [id])
};

controller.destroySub = (id, subId) => {
  return db.none('DELETE FROM sub_posts WHERE post_id = $1 AND sub_id = $2', [id, subId])
}

controller.newSub = (id, subPost, user) => {
  return db.none('INSERT INTO sub_posts (post_id, sub_comment, username) VALUES ($1, $2, $3)', [id, subPost.content, user]);
};

// controller.findAllSubsById = (id) => {
//   return db.manyOrNone('SELECT * FROM sub_posts WHERE post_id = $1', [id]);
// };

controller.findAllSubsById = (id) => {
  return db.manyOrNone('SELECT * FROM posts LEFT JOIN sub_posts ON posts.post_id = sub_posts.post_id WHERE topic_id = $1', [id]);
};

module.exports = controller;

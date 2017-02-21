// This is the model for "POSTS"

const db            = require('../config/database');

let controller = {};

controller.findAllById = (id) => {
  return db.manyOrNone('SELECT * FROM comments WHERE topic_id = $1 ORDER BY votes DESC', [id])
};

controller.vote = (id) => {
  return db.none('UPDATE comments SET votes = post_votes + 1 WHERE id = $1', [id])
};

controller.destroy = (id) => {
  return db.none('DELETE FROM sub_comments WHERE comment_id = $1; DELETE FROM comments WHERE id = $1', [id])
};

controller.destroySub = (id, subId) => {
  return db.none('DELETE FROM sub_comments WHERE id = $1 AND id = $2', [id, subId])
}

controller.newSub = (id, subPost, user) => {
  return db.none('INSERT INTO sub_comments (comment_id, content, username) VALUES ($1, $2, $3)', [id, subPost.content, user]);
};


controller.findAllSubsById = (id) => {
  return db.manyOrNone('SELECT * FROM comments LEFT JOIN sub_comments ON comments.id = sub_comments.comment_id WHERE topic_id = $1', [id]);
};

module.exports = controller;

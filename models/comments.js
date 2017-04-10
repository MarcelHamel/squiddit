// This is the model for "POSTS"

const db            = require('../config/database');

let controller = {};

// Find all comments by id
controller.findAllById = (id) => {
  return db.manyOrNone('SELECT * FROM comments WHERE topic_id = $1 ORDER BY votes DESC', [id])
};

// Vote on a comment
controller.vote = (id) => {
  return db.none('UPDATE comments SET votes = post_votes + 1 WHERE id = $1', [id])
};

// Delete COMMENT
// Hits sub_comments with matching comment id first to avoid foreign key constraints
controller.destroy = (id) => {
  return db.none('DELETE FROM sub_comments WHERE comment_id = $1; DELETE FROM comments WHERE id = $1', [id])
};

// Delete sub_comment
controller.destroySub = (id, subId) => {
  return db.none('DELETE FROM sub_comments WHERE id = $1 AND id = $2', [id, subId])
}

// New subcomment
controller.newSub = (id, subPost, user) => {
  return db.none('INSERT INTO sub_comments (comment_id, content, username) VALUES ($1, $2, $3)', [id, subPost.content, user]);
};

// Find all sub-comments
// Joined to comments table so that I can pass topic ID as an argument to all three of the functions
// to find topic, commments and sub comments -- SEE show.ejs for more...
controller.findAllSubsById = (id) => {
  return db.manyOrNone('SELECT * FROM comments LEFT JOIN sub_comments ON comments.id = sub_comments.comment_id WHERE topic_id = $1', [id]);
};

module.exports = controller;

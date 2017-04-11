const db          = require('../config/database');
const bcrypt      = require('bcrypt');

let controller = {};

// Verify login info
controller.findByEmail = (email) => {
  return db.oneOrNone('SELECT * FROM users WHERE email = $1', [email]);
};

// Create a new user
controller.newUser = (newUser) => {
  let password = bcrypt.hashSync(newUser.password, 10);
  return db.none(`
    INSERT INTO users (
      username,
      email,
      password_digest)
    VALUES ($1, $2, $3)`, [
      newUser.username,
      newUser.email,
      password
    ]);
};

// See if new user already exists
controller.userExist = (newUser) => {
  return db.manyOrNone('SELECT * FROM users WHERE username = $1', [newUser.username]);
}

module.exports    = controller;

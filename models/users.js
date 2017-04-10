const db          = require('../config/database');
const bcrypt      = require('bcrypt');

let controller = {};

// Verify login info
controller.findByUsername = (name) => {
  return db.oneOrNone('SELECT * FROM users WHERE name = $1', [name]);
};

// Create a new user
controller.newUser = (newUser) => {
  let password = bcrypt.hashSync(newUser.password, 10);
  return db.none(`
    INSERT INTO users (
      name,
      password_digest)
    VALUES ($1, $2)`, [
      newUser.name,
      password
    ]);
};

// See if new user already exists
controller.userExist = (newUser) => {
  return db.manyOrNone('SELECT * FROM users WHERE name = $1', [newUser.name]);
}

module.exports    = controller;

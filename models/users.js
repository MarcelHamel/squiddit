const db          = require('../config/database');

let controller = {};

// Verify login info
controller.loginVerify = (name, pin) => {
  return db.manyOrNone('SELECT * FROM users WHERE name = $1 AND password = $2', [name, pin]);
};

// Create a new user
controller.newUser = (newUser) => {
  return db.none('INSERT INTO users (name, password) VALUES ($1, $2)', [newUser.name, newUser.password]);
};

// See if new user already exists
controller.userExist = (newUser) => {
  return db.manyOrNone('SELECT * FROM users WHERE name = $1', [newUser.name]);
}

module.exports    = controller;

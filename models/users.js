const db          = require('../config/database');

let controller = {};

controller.loginVerify = (name, pin) => {
  return db.manyOrNone('SELECT * FROM users WHERE name = $1 AND password = $2', [name, pin]);
};

controller.newUser = (newUser) => {
  return db.none('INSERT INTO users (name, password) VALUES ($1, $2)', [newUser.name, newUser.password]);
};

controller.userExist = (newUser) => {
  return db.manyOrNone('SELECT * FROM users WHERE name = $1', [newUser.name]);
}

module.exports    = controller;

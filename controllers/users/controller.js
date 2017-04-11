const session      = require('express-session');
const Users        = require('../../models/users');
const bcrypt       = require('bcrypt') ;

let controller = {};

// Display login page
controller.login = (req, res) => {
  res.render('squiddit/login', { req: req });
};


// Verify user credentials
controller.process_login = (req, res) => {
  console.log(req.body);
  console.log('Finding by email..');
  Users
  .findByEmail(req.body.email)
  .then((user) => {
    if (user) {
      const isAuthed = bcrypt.compareSync(req.body.password, user.password_digest);
      if (isAuthed) {
        req.session.isAuthenticated = true;
        delete user.password_digest;
        req.session.user = user;
        res.redirect(`/squiddit`);
      } else {
        res.redirect('/users?error=true');
      }
    } else {
      res.redirect('/users?error=true');
    }
  })
  .catch(err => console.log('ERROR:', err));
};


// Logout
controller.logout = (req, res) => {
  req.session.destroy((err) => {
    if(err) {
      console.log(err);
    } else {
      res.redirect('/squiddit');
    }
  });
};

// Create a New User
controller.newUser = (req, res) => {
  console.log('Creating new user in controller.newUser:', req.body);
  Users.userExist(req.body.newUser)
  .then((data) => {
    if (data.length > 0) {
      res.redirect('/users?invalid=user')
    } else {
      Users.newUser(req.body.newUser)
      .then((user) => {
        console.log('processing login...')
        req.session.isAuthenticated = true;
        req.session.user = req.body.newUser
      })
      .then(() => res.redirect('/'))
    }}
  )
  .catch(err => console.log('ERROR:', err));
};

module.exports = controller;

const session         = require('express-session');
const Users           = require('../../models/users');

let controller = {};

// Display login page
controller.login = (req, res) => {
  res.render('squiddit/login', { req: req });
};

// Verify user credentials
controller.loginVerify = (req, res) => {
  // Check password where username equals input
  Users.loginVerify(req.query.name, req.query.password)
  .then((data) => {
    // DB query set to manyOrNone. If no username matches that password, then length = 0;
    if (data.length === 0) {
      res.send('Invalid login!')
      // Else....
    } else {
      // Get session property of user equal to provided name
      req.session.user = req.query.name;
      // Do the same for userID (this was actually never used)
      req.session.userid = data[0].id;
      // {Your Name Here} Go home
      res.redirect('/squiddit')
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
  Users.userExist(req.body.newUser)
  .then((data) => {
    if (data.length > 0) {
      res.redirect('/users/login?invalid=true')
    } else {
      Users.newUser(req.body.newUser)
      .then(() => {
        Users.loginVerify(req.body.newUser.name, req.body.newUser.password)
        .then(() => res.redirect('/Squiddit'));
      })
    }
  })
  .catch(err => console.log('ERROR:', err));
};

module.exports = controller;

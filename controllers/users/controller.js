const session         = require('express-session');
const Users           = require('../../models/users');

let controller = {};

controller.login = (req, res) => {
  res.render('squiddit/login', { req: req });
};

controller.loginVerify = (req, res) => {
  console.log(req.query);
  Users.loginVerify(req.query.name, req.query.password)
  .then((data) => {
    console.log(data);
    if (data.length === 0) {
      res.send('Invalid login!')
    } else {
      req.session.user = req.query.name;
      req.session.userid = data[0].id;
      res.redirect('/squiddit')
    }
  })
  .catch(err => console.log('ERROR:', err));
};

controller.logout = (req, res) => {
  req.session.destroy((err) => {
    if(err) {
      console.log(err);
    } else {
      res.redirect('/squiddit');
    }
  });
};

controller.newUser = (req, res) => {
  console.log(req.body.newUser);
  Users.newUser(req.body.newUser)
  .then(() => {
    Users.userExist(req.body.newUser)
    .then((data) => {
      if (data.length > 0) {
        res.redirect('/users/login?invalid=true')
      } else {
        Users.loginVerify(req.body.newUser.name, req.body.newUser.password)
        .then(() => res.redirect('/Squiddit'));
      }
    })
  })
  .catch(err => console.log('ERROR:', err));
};


module.exports = controller;

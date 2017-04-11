const AuthService = {};

AuthService.restrict = (req, res, next) => {
  if (req.session.isAuthenticated) {
    next();
  } else {
    res.redirect('/users');
  }
};

module.exports = AuthService;

function authMiddleware(req, res, next) {
    if (!req.session.user) {
      return res.redirect('/');
    }
    next();
  }
  
  module.exports = authMiddleware;
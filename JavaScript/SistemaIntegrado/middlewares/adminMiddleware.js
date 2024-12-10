function adminMiddleware(req, res, next) {
    if (req.session.user.accessLevel !== 'Administrador') {
      req.session.errorMessage = 'Acesso negado. Somente administradores podem acessar esta página.';
      return res.redirect('/dashboard');
    }
    next();
  }
  
  module.exports = adminMiddleware;
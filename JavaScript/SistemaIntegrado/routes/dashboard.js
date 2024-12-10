const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

// Rota do painel
router.get('/dashboard', authMiddleware, (req, res) => {
    const user = req.session.user;
    const errorMessage = req.session.errorMessage;
    req.session.errorMessage = null;  // Limpa a mensagem de erro após a exibição
    res.render('dashboard', { pageTitle: 'Dashboard',   user, currentTime: new Date().toLocaleString(), errorMessage });
  });

  module.exports = router;
const express = require('express');
const QRCode = require('qrcode');
const router = express.Router();
const users = require('../models/users'); // Importar os usuários
const { findUser } = require('../models/users'); // Importar o método findUser/* Simulação de um banco de dados em memória

// Rota de login
router.get('/', (req, res) => {
    QRCode.toDataURL('https://autoric.com.br', (err, url) => {
      res.render('login', { qrCodeUrl: url });
    });
});

router.post('/login', (req, res) => {
    const { usuario, senha } = req.body;
    // Adicione a lógica de autenticação aqui
    // Verifique se o usuário existe no banco de dados em memória
    const user = findUser(usuario, senha);
    if (user) {
      req.session.user = { name: user.name, accessLevel: user.accessLevel };
      res.redirect('/dashboard');
    } else {
      res.redirect('/');
      console.log("Senha incorreta")
    }
  });
  
  router.get('/logout', (req, res) => {
    req.session.destroy(err => {
      if (err) {
        return res.redirect('/dashboard');
      }
      res.clearCookie('connect.sid');
      res.redirect('/');
    });
  });
  module.exports = router;
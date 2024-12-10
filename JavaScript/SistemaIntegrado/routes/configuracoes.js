const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const adminMiddleware = require('../middlewares/adminMiddleware');
const router = express.Router();
const users = require('../models/users'); // Importar os usuários
const { getUsers, addUser, updateUser, deleteUser } = require('../models/users'); // Importar os métodos necessários

// Rota de configurações
router.get('/configuracoes', authMiddleware, adminMiddleware, (req, res) => {
    const users = getUsers(); // Garantir que estamos obtendo um array de usuários
    res.render('configuracoes', {pageTitle: 'Configurações', user: req.session.user, users, currentTime: new Date().toLocaleString() });
});

// Rotas de usuário
router.post('/configuracoes/usuario', authMiddleware, adminMiddleware, (req, res) => {
    const { nome, login, senha, nivel } = req.body;
    const newUser = {
      id: getUsers().length + 1,
      name: nome,
      username: login,
      password : senha,
      accessLevel: nivel
    };
    addUser(newUser);
    res.redirect('/configuracoes');
});

router.put('/configuracoes/usuario/:id', authMiddleware, adminMiddleware, (req, res) => {
    const { id } = req.params;
    const { nome, login, senha, nivel } = req.body;
    const updatedUser = { name: nome, username: login, password: senha, accessLevel: nivel };
    updateUser(id, updatedUser);
    res.redirect('/configuracoes');
});
  
router.delete('/configuracoes/usuario/:id', authMiddleware, adminMiddleware, (req, res) => {
    const { id } = req.params;
    deleteUser(id);
    res.redirect('/configuracoes');
});

module.exports = router;
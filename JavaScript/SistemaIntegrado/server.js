const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const methodOverride = require('method-override');

const app = express();
const PORT = 3000;

// Configuração do EJS
app.set('view engine', 'ejs');

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  secret: 'segredo',
  resave: false,
  saveUninitialized: true
}));
app.use(express.static('public'));
app.use(methodOverride('_method'));

// Rotas
const authRoutes = require('./routes/auth');
const dashboardRoutes = require('./routes/dashboard');
const configuracoesRoutes = require('./routes/configuracoes');

app.use(authRoutes);
app.use(dashboardRoutes);
app.use(configuracoesRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

app.use(express.static('public'));

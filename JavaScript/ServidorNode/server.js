const express = require('express');
const app = express();
const port = 3000;

// Middleware para analisar o corpo das requisições como JSON
app.use(express.json());

// Rota GET
app.get('/api/saudacao', (req, res) => {
  res.send('Saluton, Mondo!'); // "Olá, Mundo!" em Esperanto
});

// Rota POST
app.post('/api/mensagem', (req, res) => {
  const { mensagem } = req.body;
  res.send(`Vi sendis: ${mensagem}`); // "Você enviou: [mensagem]" em Esperanto
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
const express = require('express');
const app = express();
const port = 3001;

// Adicionando cabeçalhos CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Permitir solicitações de qualquer origem
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Permitir os métodos HTTP especificados
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Permitir os cabeçalhos especificados
  next();
});

// Dados JSON embutidos no código
const ongs = [
  {
    "id": 1,
    "nome": "AmoAnimais",
    "local": "Belo Horizonte",
    
  },
  {
    "id": 2,
    "nome": "AmoNatureza",
    "local": "Belo Horizonte",
  }
];

// Middleware para analisar JSON
app.use(express.json());

// Rota para obter os dados
app.get('/api/ongs', (req, res) => {
  res.json(ongs);
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
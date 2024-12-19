// Importação do módulo Express e do array de usuários
import express from 'express';
import { users } from '../data.js';

// Criação de um roteador usando o Express
const router = express.Router();

// Definição das rotas para o endpoint raiz ('/')
router
  .route('/')
  .get((req, res) => {
    // Processamento antes de entregar a resposta
    res.status(200).send(users); // Envia a lista de usuários com status 200 (OK)
  })
  .post((req, res) => {
    console.log(req.body); // Loga o corpo da solicitação no console
    res.status(200).send('novo usuário criado'); // Responde com uma mensagem de sucesso
  })
  .put((req, res) => {
    res.status(200).send('usuário editado'); // Responde com uma mensagem de sucesso
  })
  .delete((req, res) => {
    res.status(200).send('usuário apagado'); // Responde com uma mensagem de sucesso
  });

// Exportação do roteador para ser usado em outros arquivos
export default router;

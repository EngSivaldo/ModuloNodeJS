// Importação do módulo Express e do array de posts
import express from 'express';
import { posts } from '../data.js';

// Criação de um roteador usando o Express
const router = express.Router();

router.use(registerOnDatabase);


// Definição das rotas para o endpoint raiz ('/')
router
  .route('/')
  .get(registerOnDatabase, (req, res) => {
    // Processamento antes de entregar a resposta
    res.status(200).send(posts); // Envia a lista de posts com status 200 (OK)
  })
  .post((req, res) => {
    res.status(200).send('novo post criado'); // Responde com uma mensagem de sucesso
  })
  .put((req, res) => {
    res.status(200).send('Post editado'); // Responde com uma mensagem de sucesso
  })
  .delete((req, res) => {
    res.status(200).send('Post apagado'); // Responde com uma mensagem de sucesso
  });

// Exportação do roteador para ser usado em outros arquivos
export default router;

// Função middleware para simular o acesso ao banco de dados e registrar uma transação
function registerOnDatabase(req, res, next) {
  console.log('Acessando o banco de dados');
  console.log('Registrando transação');
  next();
}

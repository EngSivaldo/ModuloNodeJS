import express from 'express';
import { generateTeamsArray } from '../data.js';
import { validatePosition } from '../inputValidation.js';

// Importações:
// - Importa o framework Express para criar o servidor.
// - Importa a função `generateTeamsArray` para gerar a lista de equipes.
// - Importa a função `validatePosition` para validar a posição fornecida.

const router = express.Router();

// Criação do Router:
// - Cria um novo roteador do Express para definir as rotas da aplicação.

router.get('/', (req, res) => {
  res.status(200).send(generateTeamsArray());
});

// Rota GET para Listar Todas as Equipes:
// - Gera a lista de equipes usando `generateTeamsArray`.
// - Responde com a lista completa de equipes.

router.get('/standings/:position', (req, res, next) => {
  const teams = generateTeamsArray();
  const { position } = req.params;
  const { error } = validatePosition(position, teams.length);

  if (error) {
    const err = new Error();
    err.statusCode = 400;
    err.description = error.details;
    return next(err);
  }
  const selectedTeam = teams[position - 1];
  res.status(200).send(selectedTeam);
});

// Rota GET para Obter Equipe por Posição:
// - Gera a lista de equipes usando `generateTeamsArray`.
// - Valida a posição fornecida.
// - Se houver erro na validação, cria um novo erro com status 400 e descrição detalhada, e passa para o próximo middleware de erro.
// - Se a posição for válida, retorna a equipe correspondente.

export default router;

// Exportação do Router:
// - Exporta o roteador para ser usado em outras partes da aplicação.
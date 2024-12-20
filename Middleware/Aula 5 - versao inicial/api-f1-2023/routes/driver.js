import express from "express";
import { drivers } from "../data.js";
import { randomUUID } from "node:crypto";
import {
  validateDriverInfo,
  validateUpdateDriverInfo,
  validatePosition,
} from "../inputValidation.js";

// Importações e Configurações Iniciais:
// - Importa o framework Express para criar o servidor.
// - Importa os dados dos drivers de um arquivo externo.
// - Importa a função `randomUUID` para gerar IDs únicos.
// - Importa funções de validação para verificar as informações dos drivers.

const router = express.Router();
// Criação do Router:
// - Cria um novo roteador do Express para definir as rotas da aplicação.

router.get("/", (req, res) => {
  res.status(200).send(drivers);
});
// Rota GET para Listar Todos os Drivers:
// - Responde com a lista completa de drivers quando a rota raiz é acessada.

router.get("/standings/:position", (req, res, next) => {
  const { position } = req.params;
  const { error } = validatePosition(position, drivers.length);

  if (error) {
    const err = new Error();
    err.statusCode = 400;
    err.description = error.details;
    return next(err);
    
  }
  const selectedDriver = drivers[position - 1];
  res.status(200).send(selectedDriver);
});

// Rota GET para Obter Driver por Posição:
// - Valida a posição fornecida.
// - Se a posição for válida, retorna o driver correspondente.
// - Se houver erro na validação, responde com um status 400 e a mensagem de erro.

router.get("/:id", (req, res, next) => {
  const { id } = req.params;
  const selectedDriver = drivers.find((driver) => driver.id === id);

  if (!selectedDriver) {
    const err = new Error();
    err.statusCode = 404;
    err.description = 'Driver not found!';
    return next(err);
    
  }

  res.status(200).send(selectedDriver);
});

// Rota GET para Obter Driver por ID:
// - Busca um driver pelo ID fornecido.
// - Se o driver não for encontrado, responde com um status 404.
// - Se encontrado, retorna o driver.

router.post("/", (req, res, next) => {
  const { error } = validateDriverInfo(req.body);
  if (error) {
    const err = new Error();
    err.statusCode = 400;
    err.description = error.details;
    return next(err);
    
  }
  const newDriver = { ...req.body, id: randomUUID() };
  drivers.push(newDriver);
  drivers.sort((b, a) => {
    if (a.points > b.points) {
      return 1;
    }
    if (b.points > a.points) {
      return -1;
    }
    return 0;
  });
  res.status(200).send(newDriver);
});

// Rota POST para Adicionar um Novo Driver:
// - Valida as informações do novo driver.
// - Se houver erro na validação, responde com um status 400.
// - Se válido, cria um novo driver com um ID único, adiciona à lista e ordena os drivers por pontos.
// - Retorna o novo driver adicionado.

router.put("/:id", (req, res, next) => {
  const { error } = validateUpdateDriverInfo(req.body);
  if (error) {
    const err = new Error();
    err.statusCode = 400;
    err.description = error.details;
    return next(err);
    
  }

  const { id } = req.params;
  const selectedDriver = drivers.find((d) => d.id === id);
  if (!selectedDriver) {
    const err = new Error();
    err.statusCode = 404;
    err.description = 'Driver not found!';
    return next(err);
    
  }

  for (const key in selectedDriver) {
    if (req.body[key]) {
      selectedDriver[key] = req.body[key];
    }
  }

  res.status(200).send(selectedDriver);
});

// Rota PUT para Atualizar um Driver:
// - Valida as informações de atualização do driver.
// - Se houver erro na validação, responde com um status 400.
// - Se válido, busca o driver pelo ID e atualiza as informações fornecidas.
// - Se o driver não for encontrado, responde com um status 404.
// - Retorna o driver atualizado.

router.delete("/:id", (req, res, next) => {
  const { id } = req.params;
  const selectedDriver = drivers.find((d) => d.id === id);

  if (!selectedDriver) {
    const err = new Error();
    err.statusCode = 404;
    err.description = 'Driver not found!';
    return next(err);
  }

  const index = drivers.indexOf(selectedDriver);
  drivers.splice(index, 1);

  res.status(200).send(selectedDriver);
});

// Rota DELETE para Remover um Driver:
// - Busca o driver pelo ID fornecido.
// - Se o driver não for encontrado, responde com um status 404.
// - Se encontrado, remove o driver da lista e retorna o driver removido.

export default router;

// Exportação do Router:
// - Exporta o roteador para ser usado em outras partes da aplicação.
import express from "express";
import driversRouter from "./routes/driver.js";
import teamsRouter from "./routes/team.js";
import pkg from 'joi';
const { number } = pkg;

// Importações:
// - Importa o framework Express para criar o servidor.
// - Importa os roteadores para as rotas de drivers e teams.

const baseAPIRoute = "/api/v1";

// Definição da Rota Base da API:
// - Define a rota base para a API como "/api/v1".

const app = express();

// Criação da Aplicação Express:
// - Cria uma nova aplicação Express.

app.use(express.json());
// Middleware para Analisar JSON:
// - Adiciona middleware para analisar requisições com corpo JSON.

app.use(baseAPIRoute + "/drivers", driversRouter);
app.use(baseAPIRoute + "/teams", teamsRouter);
app.use((error, req, res, next) => {
  res.status(error.statusCode ?? 500).send(error);

})

// Definição das Rotas:
// - Define a rota para drivers usando o roteador importado.
// - Define a rota para teams usando o roteador importado.

const port = 3001;
app.listen(port, () => console.log("API rodando com sucesso"));
// Inicialização do Servidor:
// - Define a porta em que o servidor vai rodar (3001).
// - Inicia o servidor e exibe uma mensagem no console indicando que a API está rodando com sucesso.



// Importações dos módulos necessários
import express from 'express';
import usersRouter from './routes/users.js';
import postsRouter from './routes/posts.js';

// Criação da instância da aplicação Express
const app = express();

// Middleware para registrar cada solicitação HTTP
app.use(registerRequest);

// Middleware para simular o acesso ao banco de dados e registrar transações
// app.use(registerOnDatabase);

// Middleware para converter JSON no corpo da solicitação em objeto JavaScript
app.use(express.json()); // Converter JSON para objeto JavaScript

// Definição das rotas para '/users' e '/posts' usando os roteadores importados
app.use('/users', usersRouter);
app.use('/posts', postsRouter);

// Rota principal que responde com uma mensagem de boas-vindas
app.get('/', (req, res) => {
  res.status(200).send('Olá, Impressionador!');
});

// Inicialização do servidor na porta 5000
app.listen(5000, () => console.log('api rodando com sucesso'));

// Função middleware para registrar cada nova solicitação HTTP
function registerRequest(req, res, next) {
  console.log('Nova solicitação http');
  console.log('Endpoint solicitado: ', req.url);
  next();
}



// Explicação
// app.use(express.json());: Esta linha de código configura o middleware express.json() na sua aplicação Express.
// Função do Middleware
// Middleware: No Express, middleware são funções que têm acesso ao objeto de solicitação (req), ao objeto de resposta (res) e à próxima função de middleware no ciclo de solicitação-resposta. Eles podem executar qualquer código, fazer alterações nos objetos de solicitação e resposta, encerrar o ciclo de solicitação-resposta ou chamar a próxima função de middleware.

// express.json(): Este middleware específico analisa solicitações JSON. Ele transforma o corpo da solicitação em um objeto JavaScript acessível através de req.body. Isso é útil quando você está lidando com dados enviados no formato JSON, como em APIs RESTful.
import express from 'express';
import { posts } from './data.js';

const app = express();

//faz o meddleware ser chamado
app.use(registerRequest);
app.use(registerOnDatabase);

app.get('/', (req, res) => {
  res.status(200).send('Olá, Impressionador!');
});
//isso tambem é um middleware sem o next
app.get('/posts', (req, res) => {
  //todo um processamento antes de entregar a resposta
  res.status(200).send(posts);//enviar
});

app.listen(5000, () => console.log('api rodando com sucesso'));

//middleware                       next=proximo
function registerRequest(req, res, next) {
  console.log('Nova solicitação http');
  console.log('Endpoint solicitado: ', req.url);
  next();
}

function registerOnDatabase(req, res, next) {
  console.log('Acessando o banco de dados');
  console.log('Registrando transação');
  next();//funcao que precisa ser chamada
}

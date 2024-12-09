// Importa o módulo 'http' do Node.js
import http from "node:http";

// Importa o módulo 'path' do Node.js
// import resolve from "node:path";

// Cria um servidor HTTP
const server = http.createServer();

// Adiciona um listener para o evento 'request' do servidor
server.addListener("request", (request, response) => {




  // Define o cabeçalho da resposta com o status 200 (OK) e o tipo de conteúdo como JSON
  response.writeHead(200, { "Content-Type": "application/json" });
  
  // Escreve uma mensagem de resposta
  response.write("Olá, Impressionador! Está aqui a resposta do seu servidor!");
  
  // Finaliza a resposta
  response.end();
});

// Faz o servidor escutar na porta 8000
server.listen(8000);
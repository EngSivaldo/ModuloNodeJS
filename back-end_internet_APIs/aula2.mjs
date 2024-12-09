import http  from "node:http";
import resolve  from "node:path";

const server = http.createServer();

server.addListener("request", (request, response) => {
  response.writeHead(200, { "Content-Type": "application/json" });
  response.write("Olá, Impressionador! Está aqui a resposta do seu servidor!");
  response.end();
});

server.listen(8000);
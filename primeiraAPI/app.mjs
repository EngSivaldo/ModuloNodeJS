import http from "node:http"; // Importa o módulo HTTP do Node.js
import { stock } from "./stock.mjs"; // Importa o módulo 'stock' (verifique a estrutura do seu projeto para garantir que o caminho está correto)
import { URL } from "node:url";
import { url } from "node:inspector/promises";

const server = http.createServer(); // Cria um servidor HTTP

// Adiciona um listener para eventos de requisição
server.addListener("request", (request, response) => {
  const urlObject = new URL(`http://${request.headers.host}${request.url}`);
  console.log(urlObject);
  if (urlObject.pathname === "/") { // Verifica se a URL da requisição é "/"
    response.writeHead(200, { "Content-Type": "application/json" }); // Define o cabeçalho da resposta com status 200 e tipo de conteúdo JSON
    response.write(JSON.stringify(stock)); // Converte o objeto 'stock' para JSON e escreve na resposta
    response.end(); // Encerra a resposta
  } 
  if (urlObject.pathname === "/get-unavailable-products") { // Verifica se a URL da requisição é "/get-unavailable-products"
    const getUnavailableProducts = stock.filter(
      (product) => product.amountLeft === 0 // Filtra os produtos que estão indisponíveis (amountLeft igual a 0)
    );
    response.writeHead(200, { "Content-Type": "application/json" }); // Define o cabeçalho da resposta com status 200 e tipo de conteúdo JSON
    response.write(JSON.stringify(getUnavailableProducts)); // Converte a lista de produtos indisponíveis para JSON e escreve na resposta
    response.end(); // Encerra a resposta
  }

  if (urlObject.pathname === '/get-by-id') {
    const selectedObject = stock.find((product) => product.id === Number(urlObject.searchParams.get('id')));
    console.log('Olha só como funciona!')
    response.writeHead(200, { "Content-Type": "application/json" }); // Define o cabeçalho da resposta com status 200 e tipo de conteúdo JSON
    response.write(JSON.stringify(selectedObject)); // Converte a lista de produtos indisponíveis para JSON e escreve na resposta
    response.end(); // Encerra a resposta
    
   
   }
  });

  server.listen(8000); // Faz o servidor escutar na porta 8000
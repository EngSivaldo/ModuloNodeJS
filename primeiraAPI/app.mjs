import http from "node:http"; // Importa o módulo HTTP
import { stock } from "./stock.mjs"; // Importa o módulo 'stock'
import { URL } from "node:url"; // Importa o módulo URL

const server = http.createServer(); // Cria um servidor HTTP

// Listener para eventos de requisição
server.addListener("request", (request, response) => {
  const urlObject = new URL(`http://${request.headers.host}${request.url}`);
  console.log(urlObject);

  if (urlObject.pathname === "/") { // Verifica se a URL é "/"
    response.writeHead(200, { "Content-Type": "application/json" }); // Cabeçalho da resposta
    response.write(JSON.stringify(stock)); // Responde com 'stock' em JSON
    response.end(); // Encerra a resposta
  } 
//Tratamento para o metodo GET--------------------------------------------


  if (urlObject.pathname === "/get-unavailable-products" && request.method === 'GET') { // Verifica se a URL é "/get-unavailable-products"
    const getUnavailableProducts = stock.filter(
      (product) => product.amountLeft === 0 // Filtra produtos indisponíveis
    );
    response.writeHead(200, { "Content-Type": "application/json" }); // Cabeçalho da resposta
    response.write(JSON.stringify(getUnavailableProducts)); // Responde com produtos indisponíveis
    response.end(); // Encerra a resposta
  }
  //Tratamento para o metodo POST----------------------------------------
  if (urlObject.pathname === "/get-unavailable-products" && request.method === 'POST') {
    response.writeHead(405, {'Content-Type': 'text/plain'});
    response.write('Este endpoint não permite acesso por meio de requisições POST!')
    response.end();
    return;

  }

  // Tratar erros na requisição
  if (urlObject.pathname === '/get-by-id') { // Verifica se a URL é "/get-by-id"
    const idParam = urlObject.searchParams.get('id');
    if (!idParam || isNaN(idParam)) { // Verifica se o ID é válido
      response.writeHead(400, { "Content-Type": "text/plain" }); // Cabeçalho da resposta
      response.write("ID inválido! O ID deve ser um número. Por favor, tente novamente."); // Mensagem de erro
      response.end(); // Encerra a resposta
      return;
    }
    const selectedObject = stock.find((product) => product.id === Number(idParam));

    if (!selectedObject) { // Verifica se o produto existe
      response.writeHead(404, { "Content-Type": "text/plain" }); // Cabeçalho da resposta
      response.write("ID inválido! Não existe um produto com esse ID"); // Mensagem de erro
      response.end(); // Encerra a resposta
      return;
    }

    response.writeHead(200, { "Content-Type": "application/json" }); // Cabeçalho da resposta
    response.write(JSON.stringify(selectedObject)); // Responde com o produto selecionado
    response.end(); // Encerra a resposta
    return;
  }

  if (urlObject.pathname === '/delete-by-id') {
    const idParam = urlObject.searchParams.get('id');
    if (!idParam || isNaN(idParam)) { // Verifica se o ID é válido
      response.writeHead(400, { "Content-Type": "text/plain" }); // Cabeçalho da resposta
      response.write("ID inválido! O ID deve ser um número. Por favor, tente novamente."); // Mensagem de erro
      response.end(); // Encerra a resposta
      return;
    }
    const selectedObject = stock.find((product) => product.id === Number(idParam));

  }
});

server.listen(8000); // Servidor escuta na porta 8000
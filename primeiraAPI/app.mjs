import http from "node:http";
import { stock }  from "./stock.mjs"; // Verifique a importação de acordo de como está a estrutura do seu computador

const server = http.createServer();

server.addListener("request", (request, response) => {
    // console.log(request.url);
  if (request.url === "/") {
    response.writeHead(200, { "Content-Type": "application/json" });
    response.write(JSON.stringify(stock));
    // response.write("Olá, impressionador! Está aqui a resposta do seu servidor");
    response.end();
  } else if (request.url === "/getUnavailableProducts") {
    const getUnavailableProducts = stock.filter(
      (product) => product.amountLeft === 0
    );
    response.writeHead(200, { "Content-Type": "application/json" });
    response.write(JSON.stringify(getUnavailableProducts));
    response.end();
  }
});

server.listen(8000);

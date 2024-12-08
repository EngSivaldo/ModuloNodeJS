// Exercício 10: Crie um programa Node.js que leia o conteúdo de um arquivo de texto e, ao terminar de ler, emita um evento fileReadSuccess com o conteúdo lido. Em seguida, escreva esse conteúdo em um novo arquivo e, ao finalizar a escrita, emita um evento fileWriteSuccess.


//Crie um programa Node.js que leia o conteúdo de um arquivo de texto
const EventEmitter = require("events");
const fs = require('fs');
class ArquivoEmitter extends EventEmitter {
  //metodo para ler o arquivo(leitura)
  lerArquivo(caminho) {
    fs.readFile(caminho, "utf-8", (err, dados) => {
      if(err) {
        this.emit("fileReadError", err);
      } else {
        this.emit("fileReadSucess", dados);
      }
    })
  }
  //metodo para escrever o arquivo
  escreverArquivo(caminho, conteudo) {
    fs.writeFile(caminho, conteudo, (err) => {
      if(err) {//se acontecer um erro
        this.emit("fileWriteError", err);
      }else {//caso contrario
        this.emit("fileWriteSucess", caminho);
      }
    })
  }
  
}

const arquivoEmitter = new ArquivoEmitter();
//escutar evento fileReadSucess
arquivoEmitter.on("fileReadSucess", (conteudo) => {
  console.log("Arquivo lido com sucesso!");
  console.log(`Conteúdo: ${conteudo}`);
  arquivoEmitter.escreverArquivo("novoArquivo.txt", conteudo);
});

//escutar evento fileWriteSucess
arquivoEmitter.off("fileWriteSucess", (caminho) => {
  console.log(`Arquivo escrito com sucesso em : ${caminho}`);
})


//escutar evento fileReadError
arquivoEmitter.on("fileReadError", (erro) => {
  console.error("Erro ao ler o arquivo", erro);
})
//escutar evento fileWriteError
arquivoEmitter.on("fileWriteError", (erro) => {
  console.error("Erro ao escrever o arquivo", erro);
})


//testar método
arquivoEmitter.lerArquivo("arquivo.txt")
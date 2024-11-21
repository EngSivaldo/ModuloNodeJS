// Crie uma classe chamada Conversa, que herde de EventEmitter. A classe
// deve ter um método chamado enviarMensagem que emita o evento mensagemEnviada. O
// evento deve aceitar um argumento com a mensagem enviada e exibir no console quando a
// mensagem for enviada.

//importa o módulo events e atribui a classe EventEmitter à constante EventEmitter.
const EventEmitter = require('events');

class Conversa extends EventEmitter{
  enviarMensagem(mensagem) {
    // Emite o evento 'mensagemEnviada' com a mensagem como argumento
    this.emit('mensagemEnviada', mensagem);

  }
}


// Cria uma instância da classe Conversa
const minhaConversa = new Conversa();

// Adiciona um ouvinte para o evento 'mensagemEnviada'
minhaConversa.on('mensagemEnviada', (mensagem) => {
  console.log(`Mensagem enviada: ${mensagem}`);
});

// Envia uma mensagem
minhaConversa.enviarMensagem('Olá, mundo!');
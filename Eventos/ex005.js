



// Importa o módulo events e atribui a classe EventEmitter à constante EventEmitter.
const EventEmitter = require('events');

// Define a classe Conversa que herda de EventEmitter
class Conversa extends EventEmitter {
  constructor() {
    super();
    this.totalMensagens = 0;
  }
  // Método para enviar uma mensagem
  enviarMensagem(mensagem) {
    // Emite o evento 'mensagemEnviada' com a mensagem como argumento
    this.emit('mensagemEnviada', mensagem);
  }

  // Método para receber uma mensagem
  receberMensagem(mensagem) {
    // Emite o evento 'mensagemRecebida' com a mensagem como argumento
    this.emit('mensagemRecebida', mensagem);
  }
}

// Cria uma instância da classe Conversa
const minhaConversa = new Conversa();

// Adiciona um ouvinte para o evento 'mensagemEnviada'
minhaConversa.on('mensagemEnviada', (mensagem) => {
  console.log(`Mensagem enviada: ${mensagem}`);
});

// Adiciona um ouvinte para o evento 'mensagemRecebida'
minhaConversa.on('mensagemRecebida', (mensagem) => {  
  console.log(`Mensagem: ${mensagem}`);
});

minhaConversa.on('mensagemRecebida', () => {
  minhaConversa.totalMensagens++;
  console.log(`Total de msgs recebidas: ${minhaConversa.totalMensagens}`)
});

minhaConversa.receberMensagem('Olá, mundo novamente')
minhaConversa.receberMensagem('Olá, como estão')
minhaConversa.receberMensagem('Olá, vocês')
minhaConversa.receberMensagem('Olá, mundo novamente')
minhaConversa.receberMensagem('Olá, mundo novamente')
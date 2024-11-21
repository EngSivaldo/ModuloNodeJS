// Exercício 5: Modifique o código da classe Conversa para adicionar dois ouvintes diferentes
// para o evento mensagemRecebida. O primeiro ouvinte deve exibir o conteúdo da mensagem,
// e o segundo ouvinte deve contar quantas mensagens foram recebidas.

const EventEmitter = require('events');

// Define a classe Conversa que herda de EventEmitter
class Conversa extends EventEmitter {
  constructor() {
    super();
    this.contadorMensagens = 0; // Inicializa o contador de mensagens
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

// Adiciona o primeiro ouvinte para o evento 'mensagemRecebida'
minhaConversa.on('mensagemRecebida', (mensagem) => {
  console.log(`Mensagem recebida: ${mensagem}`);
});

// Adiciona o segundo ouvinte para o evento 'mensagemRecebida'
minhaConversa.on('mensagemRecebida', function() {
  this.contadorMensagens++;
  console.log(`Número de mensagens recebidas: ${this.contadorMensagens}`);
});

// Adiciona um ouvinte para o evento 'mensagemEnviada'
minhaConversa.on('mensagemEnviada', (mensagem) => {
  console.log(`Mensagem enviada: ${mensagem}`);
});

// Envia uma mensagem
minhaConversa.enviarMensagem('Olá, mundo!');

// Recebe uma mensagem
minhaConversa.receberMensagem('Como você está?');
minhaConversa.receberMensagem('Tudo bem?');
minhaConversa.receberMensagem('Tudo bem?');
minhaConversa.receberMensagem('Tudo bem?');
minhaConversa.receberMensagem('Tudo bem?');
minhaConversa.receberMensagem('Tudo bem?');
// Exercício 6: Crie um sistema de login que herda de EventEmitter. O sistema deve emitir
// um evento loginAttempt toda vez que uma tentativa de login é feita. Se o usuário e senha
// forem corretos, emita o evento loginSuccess, caso contrário, loginFailure. Use um
// callback para simular uma operação assíncrona (como consultar um banco de dados) que leva
// 1 segundo.

//Importação do módulo EventEmitter: Importa a classe EventEmitter do módulo events do Node.js.
const EventEmitter = require('events');

// Definindo a classe LoginSystem que herda de EventEmitter
class LoginSystem extends EventEmitter {
  constructor(validUser, validPassword) {
    super(); // Chamando o construtor da classe pai (EventEmitter)
    this.validUser = validUser; // Armazenando o usuário válido
    this.validPassword = validPassword; // Armazenando a senha válida
  }

  // Método para tentar o login
  login(user, password) {
    // Emitindo o evento de tentativa de login
    this.emit('loginAttempt', { user, password });

    // Simulando uma operação assíncrona com setTimeout
    setTimeout(() => {
      // Verificando se o usuário e a senha são corretos
      if (user === this.validUser && password === this.validPassword) {
        // Emitindo o evento de sucesso no login
        this.emit('loginSuccess', { user });
      } else {
        // Emitindo o evento de falha no login
        this.emit('loginFailure', { user });
      }
    }, 1000); // Esperando 1 segundo antes de verificar as credenciais
  }
}

// Exemplo de uso do sistema de login
const loginSystem = new LoginSystem('usuarioCorreto', 'senhaCorreta');

// Registrando um listener para o evento de tentativa de login
loginSystem.on('loginAttempt', (data) => {
  console.log(`Tentativa de login: ${data.user}`);
});

// Registrando um listener para o evento de sucesso no login
loginSystem.on('loginSuccess', (data) => {
  console.log(`Login bem-sucedido: ${data.user}`);
});

// Registrando um listener para o evento de falha no login
loginSystem.on('loginFailure', (data) => {
  console.log(`Falha no login: ${data.user}`);
});

// Testando o sistema de login
loginSystem.login('usuarioCorreto', 'senhaCorreta'); // Deve emitir loginSuccess
loginSystem.login('usuarioErrado', 'senhaErrada');   // Deve emitir loginFailure
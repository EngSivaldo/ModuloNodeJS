const EventEmitter = require('events');
const readline = require('readline');

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

// Configurando o readline para capturar a entrada do usuário
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Capturando o nome de usuário
rl.question('Digite o nome de usuário: ', (user) => {
  // Capturando a senha
  rl.question('Digite a senha: ', (password) => {
    // Tentando o login com as credenciais fornecidas pelo usuário
    loginSystem.login(user, password);
    rl.close(); // Fechando a interface readline
  });
});
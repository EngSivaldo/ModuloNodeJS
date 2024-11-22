const EventEmitter = require('events');
const readline = require('readline');

// Definindo a classe LoginSystem que herda de EventEmitter
class LoginSystem extends EventEmitter {
  constructor() {
    super(); // Chamando o construtor da classe pai (EventEmitter)
    this.users = {}; // Armazenando os usuários e senhas cadastrados
  }

  // Método para cadastrar um novo usuário
  register(user, password) {
    if (this.users[user]) {
      console.log('Usuário já cadastrado.');
    } else {
      this.users[user] = password;
      console.log('Usuário cadastrado com sucesso.');
    }
  }

  // Método para tentar o login
  login(user, password) {
    // Emitindo o evento de tentativa de login
    this.emit('loginAttempt', { user, password });

    // Simulando uma operação assíncrona com setTimeout
    setTimeout(() => {
      // Verificando se o usuário e a senha são corretos
      if (this.users[user] && this.users[user] === password) {
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
const loginSystem = new LoginSystem();

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
  console.log('Login e/ou senha inválidos.');
});

// Configurando o readline para capturar a entrada do usuário
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função para capturar as credenciais do usuário
function askCredentials() {
  rl.question('Digite o nome de usuário: ', (user) => {
    rl.question('Digite a senha: ', (password) => {
      // Tentando o login com as credenciais fornecidas pelo usuário
      loginSystem.login(user, password);
      rl.close(); // Fechando a interface readline
    });
  });
}

// Função para capturar os dados de cadastro do usuário
function registerUser() {
  rl.question('Digite o nome de usuário para cadastro: ', (user) => {
    rl.question('Digite a senha para cadastro: ', (password) => {
      // Cadastrando o novo usuário
      loginSystem.register(user, password);
      console.log('Agora, faça login com suas credenciais.');
      askCredentials(); // Solicitando login após o cadastro
    });
  });
}

// Função para escolher entre login e cadastro
function chooseAction() {
  rl.question('Digite "1" para login ou "2" para cadastro: ', (choice) => {
    if (choice === '1') {
      askCredentials();
    } else if (choice === '2') {
      registerUser();
    } else {
      console.log('Opção inválida.');
      rl.close();
    }
  });
}

// Chamando a função para escolher entre login e cadastro
chooseAction();
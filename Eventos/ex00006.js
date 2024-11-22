// Exercício 6: Crie um sistema de login que herda de EventEmitter. O sistema deve emitir um evento loginAttempt toda vez que uma tentativa de login é feita. Se o usuário e senha forem corretos, emita o evento loginSuccess, caso contrário, loginFailure. Use um callback para simular uma operação assíncrona (como consultar um banco de dados) que leva 1 segundo.

//criar um sistema de login que herda de EventEmitter
const EventEmitter = require('events');

class SistemaLogin extends EventEmitter {
  constructor() {
    super();
    this.usuarioCorreto = 'admin';
    this.senhaCorreta = '12345';
  }
  //O sistema deve emitir um evento loginAttempt toda vez que uma tentativa de login é feita.
  tentativaLogin(usuario, senha) {
    this.emit('loginAttempt', usuario);
  
  //simulação assincrona + dois metodos loginSuccess e loginFailure - 1 segundo
  setTimeout(() => {
    if(usuario === this.usuarioCorreto && senha === this.senhaCorreta) {
      this.emit('loginSuccess', usuario);
    } else {
      this.emit('loginFailure', usuario)
    } 
  }, 1000);//simula op assincrona
  }


}


const login = new SistemaLogin();

//Escutar o evento loginAttempt
login.on('loginAttempt', (usuario) => {
  console.log(`Tentativa de login do usuario: ${usuario}`);
});

//Escutar o evento loginSuccess
login.on('loginSuccess', (usuario) => {
  console.log(`Login bem-sucedido para o usuario: ${usuario}`);
});
//Escutar o evento loginFailure
login.on('loginFailure', (usuario) => {
  console.log(`Login mal-sucedido para o usuario: ${usuario}`);
});

//testar o metodo
// login.tentativaLogin('admin', '12345');
//login.tentativaLogin('admin', '123');//falhou
//login.tentativaLogin('user', '123');//falhou
login.tentativaLogin('user', '12345');//falhou

// Exercício 8: Crie um sistema de log que herda de EventEmitter e registra todos os eventos emitidos, como login, logout e error. O sistema deve armazenar as mensagens de log e, ao final de cada dia (simulado por um intervalo de tempo de 5 segundos), emita um evento dailyLogReport com um resumo de todos os logs do dia.


//Crie um sistema de log que herda de EventEmitter
const EventEmitter = require('events');

class SistemaLogin extends EventEmitter {
  constructor() {
    super();
    this.logs = []; //lista de dados(logs) - objeto
    this.iniciarRelatorioDiario();

  }
  //registra todos os eventos emitidos, como login, logout e error
  registrarEvento(evento, mensagem) {
    const log = {
      evento,
    mensagem,
    data: new Date().toISOString(),//cria log único
    };
    this.logs.push(log);//empurrar para a lista
    this.emit('eventoRegistrado', log);//emitir evento qundo log é registrado
  }
  //Relatório diário - evento dailyLogReport - 5 segundos
  iniciarRelatorioDiario() {
    setInterval(() => {
      this.emit('dailyLogReport', this.logs);
      this.logs = [];//limpar os logs após o relatório

    }, 5000);

  }

}


//Escutar evento eventoRegistrado
const sistema = new SistemaLogin();
sistema.on('eventoRegistrado',(log) => {
  console.log(`Evento registrado: ${log.evento} - ${log.mensagem} - ${log.data}`)
})

//escutar evento dailyLogReport
sistema.on('dailyLogReport', (logs) => {
  console.log('Relatório diário de logs: ');
  logs.forEach((log) => {
    console.log(`${log.evento} - ${log.mensagem} - ${log.data}`);
    
  });
})

//testar médoto
sistema.registrarEvento('login', 'usuário admin fez login');
sistema.registrarEvento('logout', 'usuário admin fez logout');
sistema.registrarEvento('error', 'Error ao carregar');










// const dataTeste = new Date();
// console.log(typeof dataTeste);
// const dataIso = new Date().toISOString();
// console.log(typeof dataIso);

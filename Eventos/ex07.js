// Exercício 7: Crie um sistema de fila que herde de EventEmitter. A fila deve permitir adicionar "tarefas" (strings) e processá-las uma por vez a cada 2 segundos, emitindo um evento taskProcessed cada vez que uma tarefa for completada. Quando todas as tarefas forem processadas, emita um evento allTasksProcessed.


//Crie um sistema de fila que herde de EventEmitter

const EventEmitter = require('events');

class Fila extends EventEmitter {
  constructor() {
    super();
    this.tarefas = [];
    this.processamento = false;

  }
  //criar método adicionarTarefa(emitir evento taskAdded)
  adicionarTarefa(tarefa) {
    this.tarefas.push(tarefa);
    this.emit('taskAdded', tarefa);//emitir evento(taskAdded), e adicionar atrefa
    if(!this.processamento) {//true
      this.processarTarefa();
      // console.log(!this.processamento);
    }
    // console.log(this.processamento);
  }
  //método processarTarefa- 2 segundos(emitir evento taskProcessed + allTasksProcessed)
  processarTarefa() {
    if(this.tarefas.length > 0) {
      this.processamento = true;
      const tarefaAtual = this.tarefas.shift();//extrai primeiro elemento da lista
      setTimeout(() => {
        this.emit('taskProcessed', tarefaAtual)//emite evento
        this.processarTarefa();//recursividade = processa a prox tarefa
        // console.log(!this.processamento);
      }, 2000);
    } else {
      this.processamento = false;
      this.emit('allTasksProcessed');
    }
  }
}
const fila = new Fila();
//Escutar evento taskAdded
fila.on('taskAdded', (tarefa) => {
  console.log(`Tarefa adicionada: ${tarefa}`);
  // console.log(fila.processamento);
});

//Escutar evento taskProcessed
fila.on('taskProcessed', (tarefa) => {
  console.log(`Tarefa processada: ${tarefa}`);
  // console.log(fila.processamento);
});

//Escutar evento allTaskProcessed
fila.on('allTasksProcessed', () => {
  console.log('Todas as tarefas foram processadas!');
  // console.log(fila.processamento);
});

//Testar metodo
fila.adicionarTarefa('Eviar email');
fila.adicionarTarefa('Gerar relatório');
fila.adicionarTarefa('Adicionar dados ao banco de dados ');














//exemplo de como o processarTarefa ira funcionar
// const lista = ['laranja', 'macã', 'banana'];
// const frutaAtual = lista.shift();
// console.log(frutaAtual)
// const frutaAtual2 = lista.shift();
// console.log(frutaAtual2)

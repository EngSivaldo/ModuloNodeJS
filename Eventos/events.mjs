import { EventEmitter } from "node:events";

const eventEmitter = new EventEmitter();
//quem vai escutar e como deve reagir
eventEmitter.on('Evento1 Lançado', (login, password) => console.log(`Escutei o evento1! O usuário ${login} quer acessar a senha:${password}`)
);

//emitir o evento com informações
eventEmitter.emit(
  'Evento1 Lançado', 
  'SivaldoVieira2000', 
  'flamengo'
);


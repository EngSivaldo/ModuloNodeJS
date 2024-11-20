import { EventEmitter } from "node:events";

const eventEmitter = new EventEmitter();

//quem vai escutar e como deve reagir(registra evento)
// eventEmitter.on('Evento1 Lançado', (login, password) => console.log(`Escutei o evento1! O usuário ${login} quer acessar a senha:${password}`)
// );

// //emitir o evento com informações
// eventEmitter.emit(
//   'Evento1 Lançado', 
//   'SivaldoVieira2000', 
//   'flamengo'
// );


class CompanySales extends EventEmitter{

  performSale() {
    console.log('Registrando venda no banco de dados!')
    //lógica de execução de venda de um produto
    super.emit('Venda realizada!');


  }
}

function sendToBigCompanyTV(message) {
  console.log('=============================================');
  console.log(message);
}

const sales = new CompanySales();
sales.on('Venda realizada!', () => sendToBigCompanyTV('Mais uma venda realizada!'))
sales.performSale();
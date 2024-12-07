// Exercício 9: Crie um EventEmitter que emite o evento ping a cada segundo. O evento ping deve ser emitido no máximo 5 vezes. Após a quinta emissão, o processo deve ser finalizado emitindo um evento pingFinished.

//Crie um EventEmitter que emite o evento ping
const EventEmitter = require("events");//puxar do node

class PingEmitter extends EventEmitter {
  constructor() {
    super();
    this.contador = 0;
    this.maxPings = 5;
  }
  //criar metodo que conte os pings(evento ping) - 5 maximo(evento pingFinished)
  iniciarPings() {
    const intervalo = setInterval(() => {
      this.contador++;  // a cada 1 segundo , aumenta o conator em +1
      if(this.contador <= this.maxPings) {
        this.emit("ping", this.contador);
      } else {
        this.emit("pingFinished");
        clearInterval(intervalo); //interrompe /limpa intervalo
      }
    }, 1000);
  }

}


//Escutar evento ping
const ping = new PingEmitter();

ping.on("ping", (contagem) => {
  console.log(`Ping numero: ${contagem}`);
});
//Escutar evento pingFinished
ping.on("pingFinished", () => {
  console.log("O número máximo de pings foi atingido!");
})

//Testar metodo
ping.iniciarPings();


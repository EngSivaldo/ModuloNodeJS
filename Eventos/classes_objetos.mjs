// const cadeira1 = {
//   nome: 'cadeira gamer hashtag',
//   modelo: 'gamer',
//   ajustavel: true,
//   ergonomica: true,
//   alturaMinimaRecomendada: 150,
//   subirAltura: function () {
//     console.log('Cadeira aumentou seu tamanho!');
//   },
// };

// const cadeira2 = {
//   nome: 'cadeira Escritório hashtag',
//   modelo: 'office',
//   ajustavel: true,
//   ergonomica: true,
//   alturaMinimaRecomendada: 140,
//   subirAltura: function () {
//     console.log('Cadeira aumentou seu tamanho!');
//   },
// };


// const cadeira3 = {
//   nome: 'cadeira Escritório com encosto hashtag',
//   modelo: 'office',
//   ajustavel: true,
//   ergonomica: true,
//   alturaMinimaRecomendada: 145,
//   subirAltura: function () {
//     console.log('Cadeira aumentou seu tamanho!');
//   },
// };



// const cadeira4 = {
//   nome: 'cadeira Escritório simples hashtag',
//   modelo: 'office',
//   ajustavel: true,
//   ergonomica: true,
//   alturaMinimaRecomendada: 145,
//   subirAltura: function () {
//     console.log('Cadeira aumentou seu tamanho!');
//   },
// };


class CadeiraHashtag {
  //metodo construtor
  constructor(nome, modelo, ajustavel, ergonomica, alturaMinimaRecomendada) {
    this.nome = nome,
    this.modelo = modelo,
    this.ajustavel = ajustavel,
    this.ergonomica = ergonomica,
    this.alturaMinimaRecomendada = alturaMinimaRecomendada

  }

  subirAltura() {
    console.log('Cadeira aumentou seu tamanho!');
  }
}

//construir objeto cadeira1
const cadeira1 = new CadeiraHashtag('Cadeira Gamer Hashtag', 'Gamer', true, true, 1.50);


//construir objeto cadeira2
const cadeira2 = new CadeiraHashtag('Cadeira Escritorio com Encosto Hashtag', 'Office', true, true, 1.50);


//construir objeto cadeira3
const cadeira3 = new CadeiraHashtag('Cadeira Escritorio Hashtag', 'Office', true, true, 1.45);


//construir objeto cadeira4
const cadeira4 = new CadeiraHashtag('Cadeira Escritorio Simples Hashtag', 'Office', true, true, 1.40);


cadeira3.subirAltura();
console.log(cadeira2.nome);
console.log(cadeira2)
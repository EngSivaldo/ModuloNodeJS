console.log('Olá, boa noite!Pasta commonJS');


function addFiveNumbers(number1, number2, number3, number4, number5) {
  return number1+number2+number3+number4+number5;
}

function selectBestCountry() {
  return 'Brasil';
}

// console.log(global)

global.console.log('Ola,feliz ano novo!');


const path = require('node:path');


const pathObj = path.parse(module.filename);
console.log(pathObj);


//modo de importar commonJS(padrão)
// const script3 = require('./script3');
// console.log(script3.BestCountry());
//modo de importar
import { selectBestCountry as BestCountry } from './script3.js';

console.log('Olá, boa noite!Pasta commonJS');


function addFiveNumbers(number1, number2, number3, number4, number5) {
  return number1+number2+number3+number4+number5;
}

function selectBestCountry() {
  return 'Brasil';
}


global.console.log('Ola,feliz ano novo!')

console.log(BestCountry())
console.log('Olá, boa noite!');


function addFiveNumbers(number1, number2, number3, number4, number5) {
  return number1+number2+number3+number4+number5;
}

function selectBestCountry() {
  return 'Brasil';
}

// console.log(global)

global.console.log('Ola,feliz ano novo!');

//não funciona
// console.log(global.addFiveNumbers(1,2,3,4,5));
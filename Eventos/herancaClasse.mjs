//class pai
class Human {
  constructor(name, nationality) {
    this.name = name;
    this.nationality = nationality;

  }

  sayHello() {
    console.log('Olá, meu caro!');
  }
}

//classe filho
class F1Pilot extends Human{
  //construtor
  constructor(name, nationality, team, points=0) {
    super(name, nationality);//acessar a classe pai
    this.team = team;
    this.points = points;

  }
  //metodo
  race() {
    console.log('Vruuuuuuuuuuuuummmmmmm!');
  }
}


const firstPilot = new F1Pilot('Max VersTappen', 'Holandês', 'Red Bull racing', 575);

const secondPilot = new F1Pilot('Sergio Perez', 'Mexicano', 'Red Bull racing', 285);


const thirdPilot = new F1Pilot('Lewis Hamilton', 'Britânico', 'Mercedes', 234);

console.log(thirdPilot.name);
thirdPilot.race();
thirdPilot.sayHello();

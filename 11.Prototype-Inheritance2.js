// __proto__를 이용한 객체 상속

const player1 = {
  name: '짱구',
  firstScore: 100, secondScore: 20,
  totalScore: function() {
    return (this.firstScore + this.secondScore);
  }
}

const player2 = {
  name: '철수',
  firstScore: 50, secondScore: 70,
  avg: function() {
    return (this.firstScore + this.secondScore) / 2;
  }
}

player2.__proto__ = player1;
console.log(`player2.totalScore() -> ${player2.totalScore()}`);
console.log(`player2.avg() -> ${player2.avg()}`);


// Object.create()를 이용한 객체 상속

const player3 = {
  name: '흰둥이',
  firstScore: 100, secondScore: 20,
  totalScore: function() {
    return (this.firstScore + this.secondScore);
  }
}

const player4 = Object.create(player3);
player4.name = '맹구';
player4.firstScore = 100;
player4.secondScore = 65;

console.log(`player4.totalScore() -> ${player4.totalScore()}`);

player4.avg = function() {
  return (this.firstScore + this.secondScore) / 2;
}

console.log(`player4.avg() -> ${player4.avg()}`);

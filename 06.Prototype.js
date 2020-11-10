function Game(name, firstScore, secondScore, thirdScore) {
  this.name = name;
  this.firstScore = firstScore;
  this.secondScore = secondScore;
  this.thirdScore = thirdScore;
}

Game.prototype.totalScore = function() {
  return `prototype : ${this.firstScore + this.secondScore + this.thirdScore}`;
}

const player1 = new Game('짱구', 10, 20, 30);

// player1을 다르게 동작하도록 하고 싶을 때 이렇게 바꿀 수 있다.
player1.totalScore = function() {
  return `this : ${this.firstScore + this.secondScore + this.thirdScore}`;
}

const player2 = new Game('철수', 20, 20, 100);

console.log(player1.totalScore());
console.log(player2.totalScore());
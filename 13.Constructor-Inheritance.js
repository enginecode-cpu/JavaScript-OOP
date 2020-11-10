function Game(name, firstScore, secondScore) {
  this.name = name;
  this.firstScore = firstScore;
  this.secondScore = secondScore;
}
Game.prototype.sum = function() {
  return this.firstScore + this.secondScore;
}

// GamePlus.prototype.__proto__ = Game.prototype;
GamePlus.prototype = Object.create(Game.prototype);
GamePlus.prototype.constructor = GamePlus

function GamePlus(name, firstScore, secondScore, thirdScore) {
  Game.call(this, name, firstScore, secondScore);
  this.thirdScore = thirdScore;
}
GamePlus.prototype.avg = function() {
  return (this.firstScore + this.secondScore + this.thirdScore) / 3;
}

let player1 = new GamePlus('짱구', 100, 20, 50);
console.log(`player1.sum() -> ${player1.sum()}`);
console.log(`player1.avg() -> ${player1.avg()}`);

console.log(`player1.constructor -> ${player1.constructor}`);
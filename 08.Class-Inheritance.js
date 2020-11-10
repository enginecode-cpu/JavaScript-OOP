class Game {
  constructor(name, firstScore, secondScore) {
    this.name = name;
    this.firstScore = firstScore;
    this.secondScore = secondScore;
  }

  totalScore() {
    return `method totalScore() : ${this.firstScore + this.secondScore}`;
  }
}

class GamePlus extends Game {
  avg() {
    return (this.firstScore + this.secondScore) / 2;
  }
}

let player1 = new GamePlus('흰둥이', 50, 90);
console.log(`player1.totalScore() ${player1.totalScore()}`);
console.log(`player1.avg() ${player1.avg()}`);
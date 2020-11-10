class Game {
  constructor(name, firstScore, secondScore) {
    this.name = name;
    this.firstScore = firstScore;
    this.secondScore = secondScore;
  }

  totalScore() {
    return this.firstScore + this.secondScore;
  }
}

class GamePlus extends Game {
  constructor(name, firstScore, secondScore, thirdScore) {
    super(name, firstScore, secondScore);
    this.thirdScore = thirdScore;
  }
  totalScore() {
    return super.totalScore() + this.thirdScore;
  }
  avg() {
    return (super.totalScore() + this.thirdScore) / 3;
  }
}

let player1 = new GamePlus('흰둥이', 50, 90, 77);
console.log(`player1.totalScore() ${player1.totalScore()}`);
console.log(`player1.avg() ${player1.avg()}`);
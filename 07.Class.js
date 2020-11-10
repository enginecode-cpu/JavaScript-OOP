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

let player1 = new Game('짱구', 20, 50);
console.log(`player1.totalScore() : ${player1.totalScore()}`);

// player1의 sum()을 다르게 동작하게 하고 싶을 경우
player1.totalScore = function() {
  return `다르게 만든 함수 : ${this.firstScore + this.secondScore}`;
}
console.log(`player1.totalScore() : ${player1.totalScore()}`)
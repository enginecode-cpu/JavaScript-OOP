const player1 = {
  name: '짱구',
  firstScore: 20,
  secondScore: 40
}

const player2 = {
  name: '신형만',
  firstScore: 40,
  secondScore: 70
}

// call()

function totalScore() {
  return this.firstScore + this.secondScore;
}

console.log(`totalScore.call(player1) -> ${totalScore.call(player1)}`);
console.log(`totalScore.call(player2) -> ${totalScore.call(player2)}`);

function avg(prefix) {
  return prefix + (this.firstScore + this.secondScore) / 2;
}

console.log(`avg.call(player1) ${avg.call(player1, '-> ')}`);
console.log(`avg.call(player2) ${avg.call(player2, ': ')}`);


// bind()

let player1totalScore = totalScore.bind(player1);
console.log(`player1totalScore() -> ${player1totalScore()}`);
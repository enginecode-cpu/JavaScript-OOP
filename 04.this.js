const player1 = {
  name: '짱구',
  firstScore: 10,
  secondScore: 20,
  totalScore: function() {
    return this.firstScore + this.secondScore
  }  
}

console.log(`player1.totalScore ${player1.totalScore()}`)
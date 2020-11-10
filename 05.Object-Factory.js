const player1 = {
  name: '짱구',
  firstScore: 10,
  secondScore: 20,
  totalScore: function() {
    return this.firstScore + this.secondScore
  }  
}

const player2 = {
  name: '철수',
  firstScore: 10,
  secondScore: 10,
  totalScore: function() {
    return this.firstScore + this.secondScore
  }  
}

console.log(`player1.totalScore ${player1.totalScore()}`)
console.log(`player2.totalScore ${player2.totalScore()}`)


/**
 * 객체 안에 겹치는 이름이 존재한다.
 * 그리고 함수까지 겹친다.
 * 
 * 그렇다면 겹치는 변수를 또 다른 큰 덩어리로 만들 수는 없는가?
 * 그래서 나온 것이 클래스
 */

const d1 = new Date('2020-11-9');
console.log(`d1.getFullYear() ${d1.getFullYear()}`);
console.log(`d1.getMonth() ${d1.getMonth()}`);


/**
 * constructor(생성자)
 */

function Game(name, firstScore, secondScore, thirdScore) {
  this.name = name;
  this.firstScore = firstScore;
  this.secondScore = secondScore;
  this.thirdScore = thirdScore;

  this.totalScore = () => {
    return this.firstScore + this.secondScore + this.thirdScore;
  }
}


/**
 * new 키워드를 넣으면 -> 함수에서 객체로 바뀐다.
 */

const player3 = new Game('짱구', 10, 20, 30);
const player4 = new Game('철수', 20, 20, 100);

console.log(typeof Game()); // undefined

console.log(typeof player3); // object
console.log(typeof player4); // object

console.log(player3.totalScore());
console.log(player4.totalScore());
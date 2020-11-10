/**
 * 배열
 * 원소에 접근하기 위해서 인덱스를 이용
 */

const memberArray = ['크롱', '브라운', '포비']
console.log(memberArray[1])


/**
 * 객체
 * 객체는 인덱스로도 접근이 가능하고
 * key 이름을 통해서 접근이 가능하다
 */

let memberObject = {
  manager: '크롱',
  developer: '브라운',
  designer: '포비'
}

console.log(`Developer is ${memberObject.developer}`)
console.log(`Developer is ${memberObject['developer']}`)

// 데이터 추가 가능
memberObject.backend = '짱구'
console.log(`Backend Developer ${memberObject.backend}`)

// 삭제 가능
delete memberObject.manager
console.log(`After delete memberObject manager ${memberObject.manager}`)


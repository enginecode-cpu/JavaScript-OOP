/**
 * 배열의 반복문
 */

const memberArray = ['크롱', '브라운', '포비']

// 출력될 때 들여쓰기 되어 보기 편함
console.group('Array Loop') 
for (let i = 0; i < memberArray.length; i++) {
  console.log(`${i} ${memberArray[i]}`)
}
console.groupEnd('Array Loop')


/**
 * 객체의 반복문
 */

let memberObject = {
  manager: '크롱',
  developer: '브라운',
  designer: '포비'
}

console.group('Object Loop') 
for (let name in memberObject) {
  // console.log(`${name} ${memberObject.name}`) -> undefined
  console.log(`${name} ${memberObject[name]}`)
}
console.groupEnd('Object Loop')
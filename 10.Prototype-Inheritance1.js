let superObject = {
  superValue: 'super'
}
let subObject = {
  subValue: 'sub'
}

// 객체를 상속 받을 때 사용한다.
subObject.__proto__ = superObject;

console.log(`subObject.subValue -> ${subObject.subValue}`);
console.log(`subObject.superValue -> ${subObject.superValue}`);

subObject.superValue = 'sub';
console.log(`superObject.superValue -> ${superObject.superValue}`);
console.log(`subObject.superValue -> ${subObject.superValue}`);
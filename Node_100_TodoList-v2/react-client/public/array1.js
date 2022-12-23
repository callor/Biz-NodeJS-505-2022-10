/**
 * 배열의 깊은 복사
 * 실제 요소데이터를 모두 추출하여 다른 저장소에 저장하는 복사
 * 원본 배열과 다른 또다른 배열이 생성된다.
 */
const arr = [1, 2, 3, 4, 5];
const arr1 = [...arr];

console.log(arr, arr1);
arr1[2] = 100;
console.log(arr, arr1);

const arr2 = [];
for (let i; i < arr.length; i++) {
  arr2.push(arr[i]);
}

// 객체 spread 를 사용하여 깊은복사 하기
const json1 = { name: "홍길동", age: 22 };
const json2 = { ...json1 };

console.log(json1, json2);
json2.age = 50;
console.log(json1, json2);

/**
 * 배열은 선언을 하면,
 * 데이터 저장소하고 배열의 이름이 저장된 기억장소 2개가 만들어진다
 * 이러한 배열을 다른 배열에 복사(할당, 저장)을 하면
 * 실제 데이터가 복사 되는게 아니고, 데이터가 저장된 주소만 복사가 된다
 * 이때 복제된 배열의 데이터를 변경하면, 원본 배열의 데이터가 변경된다
 * 이 현상을 배열의 "얕은 복사"라고 한다.
 *
 */
// 배열 선언
const arr1 = [1, 2, 3, 4, 5];
// arr2 를 arr1 으로 복사
const arr2 = arr1;
// 두 배열을 출력하기
console.log(arr1, arr2);

arr2[2] = 100;
console.log(arr1, arr2);

/**
 * JS 객체를 만들면 실제 데이터가 저장된 기억장소와
 * 기억장소의 주소만 기억하고 있는 곳 2가지가 생성된다
 * 만약 JS 객체를 다른 변수로 복제를 하면
 * 실제 데이터가 아닌 주소만 복제 된다
 * 복제된 두 객체는 같은 데이터를 바라보고 있기 때문에
 * 한 객체의 요소 데이터를 변경하면
 * 다른 객체의 요소도 변경된다.
 */
// JSON 객체를 만들고
const obj1 = { name: "홍길동", age: 22 };
// 객체를 다른 객체로 복제
const obj2 = obj1;
console.log(obj1, obj2);

obj2.age = 100;
console.log(obj1, obj2);

const makeArra = (array) => {
  //   for (let i = 0; i < 10; i++) {
  //     array[i] = 10;
  //   }
  array = Array(100);
};

const myArray = [];
makeArra(myArray);
console.log(myArray);

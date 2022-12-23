# TodoList

- React 를 사용하여 할일 리스트 작성하기

## 기본기능

- 할일 추가하기
- 할일 완료하기
- 할일 삭제하기
- 할일 수정하기
- localStorage 를 사용하여 브라우저에 데이터 저장하기
- Nodejs 서버와 연동하여 DB 에 저장하기

## 추가 Dependency

`npm install moment`
`npm install react-uuid`

## state 끌어 올리기

- TodoInput.js 에는 ToddoContent state 가 있다
- 단순히 insert 만 추가할때는 별 문제가 없지만, TodoItem 에 있는 항목을 클릭했을때, 클릭된 항목을 TodoInput 에서 보여주고, 내용을 변경하고 저장을 하면 다시 TodoList 에 Update 를 해야 한다.
- 이러한 상황에서 TodoInput 에는 state 와 TodoItem 의 데이터를 서로 공유해야 하는 상황이 발생한다.
- TodoInput 에 선언된 todoContent state를 TodoMain 으로 `끌어올리기`를 하여 전체 Comps 들이 공유할 수 있도록 만들어 주어야 한다.

## Client/Server 방식으로 변경

- 메모리 구현방식의 todoList 를 Server 와 연동하여 Front and Back Project 로 구현
- React Project 를 Client 로, NodeJS Project 를 Server 방식으로 구현하기
- 현재 NodeJS 서버가 3000 port 에서 실행되고 있다. React 를 단순히 시작을 하면 3000 port 로 실행되거나, 충돌을 감지하고 자동으로 임의의 port 로 변경을 할 것이다. 이러한 현상을 방지하기 위하여 React 의 실행 port 를 변경할 것
- package.json 의 다음 항목을 추가하기

```
script : {
    "window" : "set PORT=5000 && react-script start",
    "mac" : "export PORT=5000 && react-script start",
    "linux" : "export PORT=5000 && react-script start",
}
```

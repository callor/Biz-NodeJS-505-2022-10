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

## React 프로젝트 자동 빌드 하기

- NodeJS 와 React 를 연동하면, React 항상 Build 가 된 상태로 유지를 해야한다
- React 소스코드를 변경하면, 변경한 내용이 build 에 자동 반영이 되지 않는다
- nodemon 을 사용하여 자동 빌드를 실행하자

## nodemon 을 사용하여 자동 빌드하기

- `nodemon ignore` 만들기 = >`nodemon.json` 파일 만들기 : nodemon은 파일이 저장되면 항상 자동으로 재 실행된다. 이때 재 실행되는 것을 방지하는 설정

```json
{
  "ignore": ["build", "nodemon.json"]
}
```

- nodemon 을 자동 빌드 옵션으로 실행하기

```bash
nodemon --exec "react-scripts build"
```

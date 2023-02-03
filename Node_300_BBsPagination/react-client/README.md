# NodeJS 와 React 의 연동

- NodeJS project root 폴더에서 react 프로젝트를 생성한다
- react 프로젝트의 root 에 nodemon.json 파일을 생성하고 다음 코드를 작성한다

```js
    {
        "ignore":["build","nodemon.json"]
    }
```

- react 를 start 할때 다음의 명령으로 시작한다
  `nodemon --exec "react-scripts build" --watch *.css --watch *.js`
- 위의 명령은 실제 react 를 start 하지 않고, nodemon 을 통해서 소스코드의 변화를 감시만 하고 있도록 하는 것이다.
- nodemon 은 react 프로젝트 폴더의 파일들을 감시하고 있다가, 파일의 변화(저장)가 감지되면 자동으로 build script 를 실행한다.

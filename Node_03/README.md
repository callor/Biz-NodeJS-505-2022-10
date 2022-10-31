# Node_02 프로젝트

- `nodejs` 와 `express` 연동한 `web application server`
- `mysql` 을 연동한 `DB 연동 Application`

## 프로젝트 구현을 위한 Dependencies 설정

1. express 설정 : `npm install -save express`
2. mysql 설정 : `npm install -save mysql2`  
   MySQL 8.0.x Server 와 연동하기 위하여 mysql2 를 사용

## 프로젝트 설정 변경

### package.json 설정 변경

- "main":"index" 설정 변경 : `"main" : "./bin/www.js"`
- commonsJS 를 module 형식으로 변경 : `"type":"module"` 항목 추가
- start script 추가 : script 항목에 다음 추가  
  `"start":"npm ./bin/www.js"`

### NodeJS, Express 모듈 분리하기

#### Module 생성하기

```
const 모듈 = ()=>{  };
export default 모듈;
```

```
const 모듈 = 다른모듈의함수()
export default 모듈

예)
import express from "express";
const app = express();
export default app;
```

#### router 모듈 분리하기

- router 모듈은 express 에서 여러가지 Request 를 처리하기 위한 모듈 이다.
- router 모듈은 app.js 에서 선언을 한다
- router 모듈을 모두 app.js 에서 선언을 하게 되면 app.js 가 너무 복잡한 코드가 되어 버린다.
- router 모듈을 분리하여 각 역할별도 처리하도록 한다

1. `routes` 폴더를 생성
2. router module 파일 작성 : `root.js`, `user.js` 작성

```
import express from "express";
const router = express.Router();
router.get("/", ()=>{  })
export default router;
```

### MySQL 연동

- mysql2 dependency 설정 확인 및 설치: `npm install -sava mysql2`
- mysql 연동을 위한 module 생성 : `modules/mysqlDB.js` 파일 생성

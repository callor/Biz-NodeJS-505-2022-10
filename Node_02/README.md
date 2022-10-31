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

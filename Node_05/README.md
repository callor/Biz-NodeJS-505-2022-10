# Node 04 Project

- NodeJS + Express + MySQL 연동 프로젝트

## express Server 를 만드는데 도움을 주는 도구들 설치

- path 정보를 만드는 도구 : `npm install -save path`
- logger(추적정보)를 쉽게 관리할수 있는 도구 : `npm install -save morgan`

## express View Templage 설정하기

- NodeJS + Express 프로젝트에서 자체 View 화면 만들기
- ejs(embeded JavaScript View) : html 과 JS 가 결합된 특별한 화면 구현 도구
- ejs templage 컴파일 도구 : `npm install -save ejs`
- ejs 파일 만들기 : `project/views` 폴더에 \*.ejs 이름으로 파일 생성
- ejs 파일은 기본구조가 html5 와 같다
- html5 에서 사용하는 모든 tag, css, js 까지 모두 그대로 사용할 수 있다.
- 기본적인 html5 문서에 JS 코드를 삽입하여 html과 데이터를 rendering 하는 형식의 코드를 만든다
- router 에서는 데이터가 준비되면 res.render() 함수를 사용하여 ejs 파일과 JSON 객체 데이터를 묶어서 rendering 한 후 client 로 response 한다

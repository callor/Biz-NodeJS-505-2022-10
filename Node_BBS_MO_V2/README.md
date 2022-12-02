# NodeJS MongoDB 프로젝트

- NodeJS Express 와 MongoDB 를 연동하여 게시판 CRUD 구현하기
- NodeJS 에서 MongoDB와 연동을 할때는 대부분의 프로젝트에서 mongoose를 사용하여 ORM 방식으로 접근한다
- mongoose 를 사용한 ORM 방식으로 mongoDB 프로젝트 구현

## Dependency

`npm install -save mongodb`
`npm install -save mongoose`

## 보안 주의사항!!

- mongoDB Atlas Cluster 를 사용하는 관계로 Atlas 접속 URL 이 노출될수 있다. Atlas URL 이 담겨있는 config/mongoDB.js 파일을 git hub 에 업로드 되지 않도록 하기 위하여 .gitignore 에 설정해 한다

## nodejs 에서 시간 관련 핸들링 하기

- 기본적으로 Date 클래스를 사용할수 있지만, 기능상 매우 미약하고 여러가지 날짜와 관련된 이슈가 있어서 별도의 3rd party 를 사용한다
- JS 와 관련하여 가장 많이 사용하고 거의 표준화 되어 있는 moment 를 사용할 것이다
- 설치 : `npm install -s moment`

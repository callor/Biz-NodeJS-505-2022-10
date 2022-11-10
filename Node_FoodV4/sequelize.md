# sequelize 사용하기

- sequelize 는 MySQL, MariaDB, SQLite, MSSQL-Server, Postgress, Oracle 등을 위한 NodeJS ORM(Object Relational Mapping) 이다
- sequelize-cli 를 설치하기

```
(window)관리자 권한으로 cmd 창에서
npm install -g sequelize-cli
```

- 프로젝트에 sequelize dependency 다운로드
  `npm install -save sequelize`
- 생성된 프로젝트에 sequelize 설정하기
  `sequelize init`

- migrations 폴더와, seeders 폴더가 비어있기 때문에 git push 할때 폴더가 업로드 되지 않는다. 이 폴더에 임의의 파일을 하나씩 생성해 두자

## ORM(Object Relational Mapping)

- SQL 을 사용하지 않고, 객체와 연결하여 RDBMS를 구현하는 도구
- 자체 지원하는 객체나 함수 등을 사용하여 CRUD 를 매우 쉽게 구현하는 도구
- 내부적으로 함수 명령을 SQL 로 변환하여 RDBMS 와 통신을 한다

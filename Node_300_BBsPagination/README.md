# NodeJS BBS, Pagination 구현하기

- NodeJS, Express, MySQL 을 사용한 Pagination 구현하기
- `express-pagination` 이라는 3rd Part LIB 를 보통 사용하여 구현하는데 여기에서는 Pagination의 기본 원리를 이해하기 위하여 LIB 없이 자체적으로 제작을 한다.

## Dependencies

- `sequelize, mysql2` 를 사용하여 구현

## pagination 구현방법

### client 에서 보고자 하는 페이지번호를 서버에 요청한다

### 서버에서는 전달받은 페이지번호를 기준으로 다음 연산을 수행한다

- 전체 데이터가 `몇개인지` 검사
- `전체데이터 개수 / 화면에 보여질 데이터개수` 연산하기
- 이 결과에 의해서 데이터가 몇 페이지 짜리인지 알수 있다
- 전달받은 `페이지번호 - 1 * 보여질개수` 를 계산하여 offset 계산
- `보여질 개수`만큼 limit 하기
- `offset` 과 `limite` 값을 기준으로 `SELECT` 하기
- `SELECT` 한 데이터를 Response

### 화면을 그리기 위한 데이터 연산

- 전달받은 페이지번호를 기준으로 화면에 보여질 `페이지번호 Nav` 데이터 구하기
- 맨끝으로 가기 페이지번호 구하기

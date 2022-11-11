# ORM 을 사용한 DBMS 핸들링

- 일반적인 CRUD 는 SQL 을 사용하지 않아도 자체 지원되는 객체, 함수를 사용하여 매우 쉽게 구현할수 있다.
- 이때는 각 ORM 도구가 요구하는 문법대로 model 객체를 만들고 model 객체를 사용하여 CRUD 를 구현한다.
- 복잡한 조건을 부여하여 조회(SELECT)를 할때는 일반적인 SQL을 사용하는 것 보다 더 어려워질 수 있다.

## Sequelize

- MySQL, MariaDB, Postgress 등의 DBMS 를 ORM 방식으로 핸들링 할수 있다
- 초기 model 을 만드는 과정이 다소 번잡스럽지만, 한번 만들어 두면 이후의 코드가 매우 간소해 진다

## mongoose

- mongoDB NoSQL 을 ORM 방식으로 사용할수 있는 3rd party LIB
- 매우 강력한 기능을 제공하고 NoSQL DBMS 를 마치 RDBMS 를 사용하는 것처럼 착각하게 만들기도 한다.

# RESTFul API

- 두 컴퓨터(또는 다수의 컴퓨터)간에 인터넷을 통해 정보를 안전하게 교환(Exchange)하기 위해 사용하는 인터페이스

## REST

- Representational State Transfer
- API 의 작동 방식에 대한 조건을 부과하는 소프트웨어 아키텍쳐

1. 균일한 인터페이스
2. 무상태(Stateless)
3. 계층화된 시스템
4. 캐시 가능성

### REST 의 Request Method

- 고전적인 HTTP 에서는 GET, POST 방식만 존재를 했다
- REST API 에서는 PUT, DELETE 등과 같은 할일을 명확히 명시하는 Request Method 가 사용된다.
- HTML 의 form 에서는 기본적으로 GET과 POST 만 사용가능하다
- REST 의 모든 Request Method 를 사용하기 위해서는 Ajax 방식으로 API와 요청을 구현해야 한다.

### GET method

- api server 에게 RESTful 방식으로 데이터를 요청할때
- 이때 요청하는 데이터에 대한 조건(값)을 추가하여 보낼 수 있다
- 서버는 데이터를 XML, JSON, HTMl 방식으로 Response 한다.

### POST method

- api server 에 데이터를 추가(insert) 해 줄것을 요청할때
- 보통 form tag 의 input tag 에 데이터를 담아서 서버로 전송한다
- 서버는 데이터를 추가하고, 결과(성공, 실패 여부)를 Response 한다

### PUT method

- api server 에 기존 데이터를 변경(Update) 해 줄것을 요청할때
- 기존의 전통적인 html 방식으로는 매우 어렵다
- Ajax(Asynchronous Javascript AND Xml, 비동기 통신) 방식으로 요청하고
- 서버는 Update 된 결과를 Response 한다.
- PUT 방식은 POST 와 마찬가지로 http 프로토콜의 Body 에 데이터를 담아서 보낸다.

### DELETE method

- api server 에게 특정 Key 값을 보내면서 해당 Key 의 데이터를 삭제하도록 요청할때
- Ajax 방식으로 요청한다.
- 서버는 Delete 후에 결과를 Response 한다.

## 통신, 컴퓨터와 컴퓨터간의 인터페이스(interface)

- 표준화된, 공통 프로토콜을 사용하여 정보를 주고 받는 통로
- 컴퓨터-컴퓨터는 네트워크를 통해서 인터페이스가 구현
- 컴퓨터 내의 APP 과 APP 은 운영체제의 메모리, 프로세서 등을 통하여 구현
- 키보드와 모니터를 통하여 컴퓨터와 사람(사용자)간의 인터페이스를 Man Machine Interface 라고도 한다.
- UI/UX : Man machine interface 를 조금 세련되게 부르는 말

## API : Application Programming Interface

- 컴퓨터와 컴퓨터간, APP과 APP 간의 약속된 데이터 교환 규약, 계약, 규칙

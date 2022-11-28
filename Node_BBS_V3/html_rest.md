# HTML RESTFul API

- 표준 AJax 의 RESTFul API 는 Xml 또는 JSON 데이터를 Response 한다
- Xml 또는 JSON 으로 받은 데이터는 클라이언트, 중간 서버에서 데이터를 parsing 하여 원하는 모양으로 가공하는 작업을 수행할 수 있다
- 이 방식은 클라이언트, 중간 서버가 데이터를 parsing 하여 View 를 만드는데 많은 비용이 소모된다.
- 그에 비해 HTMl Response 데이터는 표준화되지는 않았으나 클라언트가 만드는 코드량을 매우 작게 구현할수 있다.

## HTML RESTFul API 구현

- 서버의 router 의 응답 정보를 XML, JSON type 이 아닌 HTML 화면 구현 코드로 응답을 한다.
- 서버의 일반적인 Http 프로토콜을 활용하는 코드로 기존의 사용하던 view(rendering)를 최소한으로 만들어서 Response 한다.
- 표준 XML, JSON type 에 비해 네트워크를 통해서 전송되는 데이터량이 많아 질수 있다.
- 다른 용도로 데이터를 활용하려면 어려움이 있다.
- 클라이언트 입장에서는 복잡한 코드를 사용하여 tag 를 생성하고 데이터를 rendering 하는 절차를 생략하고, 간단히 innerHTML 속성에 text 데이터를 할당하여 화면을 구현 할 수 있다.
- 표준 RESTFul 과 HTML RESTFul 어떤것을 사용할 것인가는 프로젝트의 상황을 고려하여 선택한다.

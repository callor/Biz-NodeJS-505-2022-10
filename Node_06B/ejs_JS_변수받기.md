# ejs 의 javaScript 영역에서 Router 데이터 수신하기

- router 로 부터 받은 데이터는 순수 JSON 데이터가 아닌 여러가지 정보가 포함되어 있다
- `<%= 객체.변수 %>` 처럼 사용하면 자연스럽게 JSON parsing 이 이루어 진다
- 하지만 `Javascript 영역` 즉, `<script></script>` tag 내에서는 데이터를 바로 사용하기 어렵다
- ejs 의 일반코드와 달리 JavaScript 영역에서 데이터를 변수에 담고, 다른 JavaScript 로 데이터를 전달할때는 다음과 같은 방식의 코드를 작성해야 한다.

```
<script>
  const students = JSON.parse(`<%- JSON.stringify(student) %>`);
</script>

// st_update.js 파일에서 students 데이터를 사용할 수 있다
<script src="/js/st_update.js"></script>
```

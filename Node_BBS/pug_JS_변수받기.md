# pug view template 에서 데이터 처리

- router 로 부터 받은 데이터는 순수 JSON 데이터가 아닌 여러가지 정보가 포함되어 있다
- `p= 객체.변수` 또는 `p #{user.name} 님` 처럼 사용하면 자연스럽게 JSON parsing 이 이루어 진다
- 하지만 `Javascript 영역` 즉, `<script></script>` tag 내에서는 데이터를 바로 사용하기 어렵다
- pug 의 `Interpolation` 코드 내에서 수신된 데이터를 문자열로 변환(`JSON.stringify`) 하고, Unescaped(`!{객체.속성}`) 방식으로 데이터를 JavaScript 변수에 저장해야 한다.

- router 에서 데이터 render

```
router.get("/", async (req, res) => {
  const buyers = await Buyer.findAll();
  res.render("buyer/list", { buyers});
});
```

- pug의 script 코드에서 데이터 받아 준비하기

```
    script.
         //- router 의 JSON 배열데이터를 JavaScript 에서 사용하기
        const buyers = !{JSON.stringify(jsonBuyers)}
        console.log("Buyer",buyers,buyers[0].b_title)

        //- include list.js

    //- 다음의 list.js 에서 buyers JSON 배열데이터에 일반 JavaScript 변수와 같이 접근 가능하다
    script(src="/js/buyer/list.js")
```

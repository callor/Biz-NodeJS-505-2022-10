document.addEventListener("DOMContentLoaded", () => {
  const btnInput = document.querySelector("button.buyer.input");
  const btnList = document.querySelector("button.buyer.list");

  const formLegend = document.querySelector("form.buyer.write legend");
  const bcodeInput = document.querySelector("input[name='b_code']");

  const btnCodeCheck = document.querySelector("button.buyer.code_check");
  const btnCodeCreate = document.querySelector("button.buyer.code_create");

  btnInput?.addEventListener("click", () => {
    const buyerInputs = document.querySelectorAll("input");
    for (input of buyerInputs) {
      const tagTitle = input?.title;
      /**
       * input 항목이 많을 경우
       * 유효성 검사가 필요한 항목과
       * 그렇지 않은 항목이 같이 있다
       * 이럴때 유효성 검사가 필요한 항목에 대해서만
       * 검사를 수행하는데 어떤 조건을 부여할 것인가 고민!!!
       *
       * input tag title 속성을 제한적으로 부여하여
       * title 속성이 있는 input 들만 유효성 검사를 하도록 한다
       */
      if (tagTitle) {
        const value = input.value;
        if (!value) {
          alert(`필수 입력항목 입니다\n"${tagTitle}"`);
          input.select();
          return false;
        }
      } // end if
      document.querySelector("form.buyer.write").submit();
    }
  }); // btnInsert.event end

  btnCodeCreate?.addEventListener("click", async () => {
    // alert("거래처 코드 생성하기");
    /**
     * 비동기방식으로 서버에 req
     */
    // res 에는 서버에서 보내는 여러가지 정보와 데이터가 섞여 있는 상태이다
    const res = await fetch("/buyer/get/bcode");
    // res 데이터에서 필요한 데이터(문자열)를 추출하기
    const bcode = await res.text();

    // alert(bcode);
    bcodeInput.value = bcode;
    document.querySelector("input[name='b_title']").select();
  });

  btnCodeCheck?.addEventListener("click", () => {
    // alert("코드 중복 체크하기");
    const bcode = bcodeInput.value;
    if (!bcode) {
      alert("중복검사를 하려면 거래처 코드를 입력하세요");
      bcodeInput.select();
      return false;
    }
    /**
     * 1. fetch 함수가 실행되고 web 은 알아서 할일 하고
     *    fetch 가 즉시 "완료" 처리를 해 버리기 때문에
     * 2. fetch 는 서버로부터 응답을 기다리기
     * 3. 서버로 부터 응답이 오면 then() 함수를 실행한다
     *    이때 서버에서 전달된 response 정보를 res 변수에 담아서
     *    then() 함수에 전달한다
     * 4. then() 함수는 res 변수에서 json 데이터만 추출하여 return 한다
     * 5. 두번째 then() 함수에게 json 데이터를 전달한다
     */
    fetch(`/buyer/check/${bcode}`)
      .then((res) => res.json()) // <== .then( (res)=> {return res.json() })
      .then((json) => {
        if (json.status) {
          alert(`${json.message}\n다른 코드를 입력하세요`);
          bcodeInput.select();
        } else {
          alert("사용가능한 코드입니다");
          document.querySelector("input[name='b_title']").select();
        }
      });
  });

  if (public_bcode) {
    formLegend.textContent = "거래처 정보 수정";
    // bcodeInput.setAttribute("readonly", "readonly");
    // bcodeInput.readOnly = "readOnly"
    bcodeInput.readOnly = true;
    btnInput.style.backgroundColor = "#00AAAA";
    btnCodeCreate.disabled = "disabled"; // true
    btnCodeCheck.disabled = "disabled";
  }
});

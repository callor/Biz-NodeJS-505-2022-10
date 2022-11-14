document.addEventListener("DOMContentLoaded", () => {
  const btnInput = document.querySelector("button.buyer.input");
  const btnList = document.querySelector("button.buyer.list");

  btnInput?.addEventListener("click", () => {
    const buyerInputs = document.querySelectorAll("input");
    for (input of buyerInputs) {
      const tagTitle = input.title;
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
      }
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  /**
   * 데이터가 표시된 td 를 클릭하면
   * td 있는 데이터를 input box 에 표시하기
   *
   * td에 클릭 event 를 설정하려면
   * 데이터의 개수 x td 의 개수 만큼 event 를 추가 해야한다
   * 효율면에서 매우 불편한 코드가 될것이다
   *
   * 처리할 td 를 감싸고 있는 대상중에서
   * 1개만 있는 box 를 찾아서 그 box 에 클릭 event 를 설정하여
   * event 버블링을 활용하여 실제 코드를 처리한다
   *
   */
  const tTable = document.querySelector("table.today");
  const tForm = document.querySelector("form.today");
  const btnInput = document.querySelector("button.today.input");
  const btnReset = document.querySelector("button.today.reset");
  tTable?.addEventListener("click", (tag) => {
    const target = tag.target;
    const pTR = target.closest("TR");
    const t_seq = pTR?.dataset?.seq;
    if (target.tagName === "SPAN") {
      if (confirm(`${t_seq} 데이터를 삭제??`)) {
        document.location.replace(`/delete/${t_seq}`);
      }
    }

    if (target.tagName === "TD") {
      const tds = pTR.childNodes;

      for ([index, td] of tds.entries()) {
        // document.querySelector("input[name='t_date'] ")
        // 배열의 index 를 사용하여 어떤 값을 getter, setter 하는 경우
        // 정확히 원하는 index를 지정이 안되는 경우가 있다
        // inputs[index].value = td.textContent
        if (td?.title) {
          const input = document.querySelector(`input[name=${td.title}]`);
          input.value = td.textContent;
        }
      }
      document.querySelector("input[name='t_seq']").value = t_seq;
      // button.input tag 에 update 라는 클래스를 부착하라
      btnInput.classList.add("update");
    }
  });

  btnReset?.addEventListener("click", () => {
    btnInput.classList.remove("update");
  });
});

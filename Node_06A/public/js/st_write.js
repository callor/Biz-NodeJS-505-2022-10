document.addEventListener("DOMContentLoaded", () => {
  const btnSubmit = document.querySelector("button.submit");
  btnSubmit.addEventListener("click", () => {
    const inputs = document.querySelectorAll("form.st_input input");

    const st_num = inputs[0];
    const st_name = inputs[1];

    if (!st_num.value) {
      alert("학번을 입력하세요");
      st_num.focus();
      st_num.select();
      return false;
    }
    if (!st_name.value) {
      alert("학생 이름을 입력하세요");
      st_name.focus();
      st_name.select();
      return false;
    }
    // 유효성 검사가 완료되었으니 데이터를 서버로 보내라
    document.querySelector("form.st_input").submit();
  });
});

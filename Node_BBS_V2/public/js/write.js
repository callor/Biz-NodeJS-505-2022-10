document.addEventListener("DOMContentLoaded", () => {
  const btnInput = document.querySelector("button.bbs.input");
  const btnList = Document.querySelector("button.bbs.list");
  const formInput = document.querySelector("form.bbs.write");

  btnInput?.addEventListener("click", () => {
    // 유효성 검사 후
    formInput?.submit();
  });
  btnList?.addEventListener("click", () => {
    document.location.href = "/";
  });
});

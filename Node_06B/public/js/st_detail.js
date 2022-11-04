document.addEventListener("DOMContentLoaded", () => {
  const btnGroup = document.querySelector("div.student.btn-box");
  btnGroup?.addEventListener("click", (e) => {
    const target = e.target;
    if (target.tagName === "BUTTON") {
      // tag 속성에서 class 이름 getter
      const className = target.className;
      const st_num = target.closest("DIV")?.dataset?.st_num;
      let reqURL = "/";
      if (className === "st_delete") {
        if (!confirm(`${st_num} 학생 정보를 삭제합니다!!!`)) {
          return false;
        }
      }
      switch (className) {
        case "st_update":
          reqURL = `/student/${st_num}/update`;
          break;
        case "st_delete":
          reqURL = `/student/${st_num}/delete`;
          break;
        case "st_list":
          reqURL = "/student";
          break;
      }
      document.location.href = reqURL;
    }
  });
});

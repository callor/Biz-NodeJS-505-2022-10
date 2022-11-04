document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector("nav.main");
  nav?.addEventListener("click", (tag) => {
    /**
     * tag.target
     * nav.main tag 가 포함하고 있는 tag 요소들 중에서
     * 마우스 클릭이 된 대상(nav, ul, li 들 중에 한가지)
     */
    const target = tag.target;
    if (target.tagName === "LI") {
      const navText = target.textContent;
      /*
      if (navText === "Home") {
        document.location.href = "/";
      } else if (navText === "학생정보") {
        document.location.href = "/student";
      } else if (navText === "성적정보") {
        document.location.href = "/score";
      } else if (navText === "학과정보") {
        document.location.href = "/dept";
      } else if (navText === "로그인") {
        document.location.href = "/user/login";
      }
      */
      /*
      switch (navText) {
        case "Home":
          document.location.href = "/";
          break;
        case "학생정보":
          document.location.href = "/student";
          break;
        case "성적정보":
          document.location.href = "/score";
          break;
        case "학과정보":
          document.location.href = "/dept";
          break;
        case "로그인":
          document.location.href = "/user/login";
          break;
      }
      */
      let href = "/";
      switch (navText) {
        case "Home":
          href = "/";
          break;
        case "학생정보":
          href = "/student";
          break;
        case "성적정보":
          href = "/score";
          break;
        case "학과정보":
          href = "/dept";
          break;
        case "로그인":
          href = "/user/login";
          break;
      } // end switch
      document.location.href = href;
    }
  });
});

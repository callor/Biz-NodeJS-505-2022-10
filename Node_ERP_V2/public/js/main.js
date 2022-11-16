document.addEventListener("DOMContentLoaded", () => {
  const mainNav = document.querySelector("nav.main");

  mainNav?.addEventListener("click", (tag) => {
    const navItem = tag.target;
    if (navItem?.tagName === "LI") {
      let url = "";
      switch (navItem.textContent) {
        case "Home":
          url = "/";
          break;
        case "거래처관리":
          url = "/buyer";
          break;
        case "로그인":
          url = "/users/login";
          break;
        case "로그아웃":
          if (!confirm("로그아웃 할까요?")) {
            return false;
          }
          url = "/users/logout";
          break;
      }
      document.location.href = url;
    }
  });
});

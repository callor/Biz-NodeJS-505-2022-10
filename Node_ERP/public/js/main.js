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
      }
      document.location.href = url;
    }
  });
});

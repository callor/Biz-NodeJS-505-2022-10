document.addEventListener("DOMContentLoaded", () => {
  const bookUL = document.querySelector("ul.book");
  bookUL.addEventListener("click", (e) => {
    const target = e.target;
    const isbn = target?.dataset?.isbn;

    if (isbn && target.tagName === "SPAN") {
      document.location.href = `/book/detail/${isbn}`;
    }
  });
});

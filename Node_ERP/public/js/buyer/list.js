document.addEventListener("DOMContentLoaded", () => {
  const btnInsert = document.querySelector("button.buyer.insert");
  btnInsert?.addEventListener("click", () => {
    document.location.href = "/buyer/insert";
  });
});

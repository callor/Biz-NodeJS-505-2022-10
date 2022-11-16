document.addEventListener("DOMContentLoaded", () => {
  const btnInsert = document.querySelector("button.buyer.insert");
  const buyerList = document.querySelector("table.buyer.list");
  btnInsert?.addEventListener("click", () => {
    document.location.href = "/buyer/insert";
  });

  buyerList?.addEventListener("click", (tag) => {
    const td = tag.target;
    if (td?.tagName === "TD") {
      const tr = td.closest("TR");
      const bcode = tr.dataset.b_code;
      if (bcode) {
        // alert(bcode);
        document.location.href = `/buyer/detail/${bcode}`;
      }
    }
  });
});

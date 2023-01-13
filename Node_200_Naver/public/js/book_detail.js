document.addEventListener("DOMContentLoaded", () => {
  const details = document.querySelectorAll("section.book.detail input");
  details.forEach((input) => (input.readOnly = true));
  details[details.length - 1].readOnly = false;
});

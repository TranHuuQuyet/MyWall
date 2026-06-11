const goTop = document.getElementById("goTop");

window.addEventListener("scroll", () => {
  const toTop = window.scrollY;
  if (goTop > 400) {
    goTop.style.display = "block";
  } else {
    goTop.style.display = "none";
  }
});
goTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

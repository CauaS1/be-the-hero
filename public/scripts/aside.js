const aside = document.querySelector("aside");
const asideContent = document.querySelector(".content");

aside.addEventListener("click", () => {
  aside.classList.toggle("open-aside");
});
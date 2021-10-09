const navIcon = document.querySelector(".nav-icon");
const links = document.querySelector(".links");

navIcon.addEventListener("click", () => {
  links.classList.toggle("open");
});

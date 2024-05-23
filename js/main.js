const burger = document.getElementById('burger');
const navbarCollapse = document.getElementById('navbarNavAltMarkup');

burger.addEventListener("click", () => {
  navbarCollapse.classList.toggle("show");
});

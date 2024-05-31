const burger = document.getElementById('burger');
const navbarCollapse = document.getElementById('navbarNavAltMarkup');

burger.addEventListener("click", () => {
  navbarCollapse.classList.toggle("show");
});

document.querySelectorAll('.navbar-nav .nav-link').forEach(function (link) {
  link.addEventListener('click', function () {
      var navbarCollapse = document.querySelector('.navbar-collapse');
      if (navbarCollapse.classList.contains('show')) {
          $('.navbar-collapse').collapse('hide');
      }
  });
});



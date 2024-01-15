document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("burger").addEventListener("click", function () {
    document.querySelector("header").classList.toggle("open");
  });
});

$(".single-item").slick({
  infinite: true,
  fade: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: $('.arrow-after.projects-before'),
    nextArrow: $('.arrow-next.projects-next'),
});
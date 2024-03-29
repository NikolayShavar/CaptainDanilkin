document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("burger").addEventListener("click", function () {
    document.querySelector("header").classList.toggle("open");
  });
});

$(".single-item1").slick({
  infinite: true,
  fade: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: $('.arrow-after.projects-before'),
  nextArrow: $('.arrow-next.projects-next'),
});

$(".single-item2").slick({
  infinite: true,
  fade: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: $('.arrow-after.development-previous'),
  nextArrow: $('.arrow-next.development-next'),
});
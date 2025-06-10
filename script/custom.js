$(function () {
  // front slider
  $(".front-slider-items").slick({
    infinite: true,
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: false,
    speed: 500,
    pauseOnHover: true,
  });

  $(".focus-class-items").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
  });

  $(".like").click(function () {
    $(this).toggleClass("active");
  });
});

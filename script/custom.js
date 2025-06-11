$(function () {
  // header footer
  $(".header-include").load("/include/header.html", function () {
    $(".trigger").click(function () {
      $(".mega-navi").stop().slideToggle();
    });
    $("section").click(function () {
      $(".mega-navi").stop().slideUp();
    });
  });
  $(".footer-include").load("/include/footer.html");

  // scroll header
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $("header").addClass("active");
    } else {
      $("header").removeClass("active");
    }
  });
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

  // focus class
  $(".focus-class-items").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
  });

  // category detail buttons
  $(".btn-shortcut").click(function () {
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
  });

  // like
  $(".like").click(function () {
    $(this).toggleClass("active");
  });

  // early bird countdown
  $("#early-bird-countdown").countdown("2025/06/13 12:00:00", function (event) {
    $(this).html(
      event.strftime(
        "<b>종료까지</b> %D 일 <em>%H</em>:<em>%M</em>:<em>%S</em> 남음"
      )
    );
  });
});

$(function () {
  // header footer
  $(".header-include").load("/include/header.html", function () {
    $(".trigger").click(function () {
      $(".mega-navi").stop().slideToggle();
    });
    $("section").click(function () {
      $(".mega-navi").stop().slideUp();
    });
    $(".toggle-pw").click(function () {
      $(this).toggleClass("bi-eye");
      var inputType = $(this).hasClass("bi-eye") ? "text" : "password";
      $(this).siblings("input").attr("type", inputType);
    });
    $(".btn-login, .login-member a").click(function () {
      $(".member-login-overlay").fadeIn();
    });
    $(".btn-modal-close").click(function () {
      $(".member-login-overlay").fadeOut();
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

  // take course
  $(".cart-item .btn-clear").click(function () {
    $(this).parents(".cart-item").hide();
  });

  $(".btn-all-clear").click(function () {
    $(".cart-item").hide();
  });

  $(".cart-chk-all").click(function () {
    $(".check-status .cart-chk").prop("checked", this.checked);
  });

  // member register

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

  // class share
  $(".btn-sidebar-badge.share").click(function () {
    $(".class-share-overlay").fadeIn();
    $("body").addClass("active");
  });
  $(".class-share-overlay .btn-modal-close").click(function () {
    $(".class-share-overlay").fadeOut();
    $("body").removeClass("active");
  });
  $(".share-link").click(function () {
    $(".copied-link").show();
  });

  // class detail navigation
  $(".class-detail-navigation a").click(function () {
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
  });

  // class detail curriculum
  $(".chapter-title").click(function () {
    $(this).toggleClass("active");
    $(this).next().toggle();
  });
});

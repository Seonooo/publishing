$(function () {
  // header footer
  $(".header-include").load("/include/header.html", function () {
    $(window)
      .resize(function () {
        if ($(window).innerWidth() > 767) {
          $(".trigger").click(function () {
            $(".mega-navi").stop().slideToggle(300);
          });
          $("section").click(function () {
            $(".mega-navi").stop().slideUp(300);
          });
        } else if ($(window).innerWidth() <= 767) {
          // else if 사용해야 함 > else 사용 시 디자인 깨지는 이슈 있음
          $(".trigger").click(function () {
            $(".mega-navi").animate(
              {
                left: 0,
              },
              300
            );
          });
          $("section, .btn-mega-navi-close").click(function () {
            $(".mega-navi").animate(
              {
                left: "-300",
              },
              300
            );
          });
        }
      })
      .resize();

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

    $(".mega-navi-item b").click(function () {
      $(this).toggleClass("active");
      $(this).next().slideToggle(200);
    });
  });
  $(".footer-include").load("/include/footer.html", function () {
    $(".link-item-title").click(function () {
      $(this).toggleClass("active");
      $(this).next().stop().slideToggle(200);
    });

    $(".company-info-trigger").click(function () {
      $("address").slideToggle(300);
    });
  });

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
    slidesToScroll: 2,
    arrows: true,
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          dots: false,
          arrows: false,
        },
      },
    ],
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
    $(this).addClass("active").siblings().removeClass("active");
    var linkLocation = $(this).attr("href");
    $("html, body").animate(
      {
        scrollTop: $(linkLocation).offset().top - 183,
      },
      500
    );
    e.preventDefault();
  });

  // class detail curriculum
  $(".chapter-title").click(function () {
    $(this).toggleClass("active");
    $(this).next().toggle();
  });

  // class detail faq
  $(".faq-title").click(function () {
    $(this).next().slideToggle(200);
  });
});

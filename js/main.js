$(document).ready(function () {
  //    navbar Shrink
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 90) {
      $(".navbar").addClass("navbar-shrink");
    } else {
      $(".navbar").removeClass("navbar-shrink");
    }
  });

  const videoSrc = $("#player1").attr("src");
  $(".video-play-btn, .video-popup").on("click", function () {
    if ($(".video-popup").hasClass("open")) {
      $(".video-popup").removeClass("open");
      $("#player1").attr("src", "");
    } else {
      $(".video-popup").addClass("open");
      if ($("#player1").attr("src") == "") {
        $("#player1").attr("src", videoSrc);
      }
    }
  });
  /*Carousel features */
  $(".features-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    margin: 0,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
  /*Carousel screenshots */
  $(".screenshots-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    margin: 0,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  });
  /*Carousel testimonios */
  $(".testimonials-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    margin: 0,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
  /*team testimonios */
  $(".team-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    margin: 0,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
  /*Scrollit */
  $.scrollIt({
    topOffset: -50,
  });
  /*navbar collapse */
  $(".nav-link").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });
});

$(document).ready(function() {
  $(window).on("load", function() {
    $(".loader-section .lds-grid").fadeOut(2000, function() {
      $(this)
        .parent()
        .fadeOut(2000, function() {
          $("body").css("overflow", "auto");
          $(this).remove();
        });
    });
  });

  var owl = $("#owl1");

  owl.owlCarousel({
    loop: true,
    autoplay: true,
    items: 3,
    // center: true,
    nav: true,
    // dots: true,
    ltr: true,
    // autoplayTimeout: 4000,
    // navSpeed: 4000,
    touchDrage: false,
    mouseDrag: false,
    smartSpeed: 450,
    responsiveClass: "true",
    // autoplaySpeed: 4000,
    responsive: {
      0: {
        items: 1
      },
      481: {
        items: 1
      },
      768: {
        items: 1
      },
      992: {
        // animateOut: "fadeOut",
        // animateIn: "fadeIn",
        items: 1
      }
    }
    // itemsMobile disabled - inherit from itemsTablet option
  });

  var owl2 = $("#owl2");

  owl2.owlCarousel({
    autoplay: true,
    loop: true,
    items: 6,
    ltr: true,
    stagePadding: 40,
    dots: false,
    nav: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        stagePadding: 0
      },
      481: {
        items: 1,
        stagePadding: 0
      },
      768: {
        items: 2,
        stagePadding: 0
      },
      992: {
        items: 2,
        width: 240,
        stagePadding: 0
      }
    }
    // itemsMobile disabled - inherit from itemsTablet option
  });
});

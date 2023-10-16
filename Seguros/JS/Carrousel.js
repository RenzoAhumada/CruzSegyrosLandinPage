$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
      items: 4, // Muestra 4 elementos a la vez
      loop: true,
      margin: 20,
      responsiveClass: true,
      responsive: {
        0: {
          items: 2
        },
        768: {
          items: 2
        },
        992: {
          items: 5
        }
      },
      autoplay: true, 
      autoplayTimeout: 4000 
    });
  });
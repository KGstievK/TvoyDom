
document.addEventListener('DOMContentLoaded', function () {
  var splide = new Splide('.home_slider');
  splide.mount();
  var splide = new Splide('.services_slider', {
    perPage: 3,
    rewind: true,
    gap: 30,
    arrows: false,
    pagination: true,
  });
  splide.mount();

  var splide = new Splide('.total-sale-slider', {
    rewind: true,
    gap: 30,
    arrows: false,
    pagination: true,
    breakpoints: {
      600: {
        perPage: 2,
      },
      1000: {
        perPage: 5,
      },
    },
  });
  splide.mount();
  var splide = new Splide('.popular-sale-slider', {
    perPage: 5,
    rewind: true,
    gap: 30,
    arrows: false,
    pagination: true,
    breakpoints: {
      600: {
        perPage: 2,
      },
      1000: {
        perPage: 3,
      },
    }
  });
  splide.mount();
  var splide = new Splide('.brends_slide', {
    perPage: 6,
    rewind: true,
    gap: 30,
    arrows: false,
    pagination: true,
    breakpoints: {
      600: {
        perPage: 2,
      },
      1000: {
        perPage: 6,
      },
    }
  });
  splide.mount();
});
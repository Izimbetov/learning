$('.header-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay:true,
  arrows: true,
  speed: 500,

  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
      }
    },
  ]
});

$('.about-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay:true,
  arrows: true,
  speed: 500,

  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
      }
    },
  ]
});

$('.courses-inner-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay:true,
  arrows: true,
  speed: 500,

  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
      }
    },
  ]
});

$('.gallery-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay:true,
  arrows: true,
  speed: 500,

  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
      }
    },
  ]
});
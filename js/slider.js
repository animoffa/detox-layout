// слайдер врачей
$(document).ready(function () {

  let doctorsSwiper = new Swiper('#doctors-swiper', {
    slidesPerView: '1',
    spaceBetween: 25,
    touchRatio: 1,

    watchSlidesVisibility: true, // удаляем тень у слайдов вне поля видимости

    navigation: {
      nextEl: '.doctors-swiper__button-next',
      prevEl: '.doctors-swiper__button-prev',
    },

    breakpoints: {
      756: {
        slidesPerView: '3',
        spaceBetween: 20,
      },
    }
  });
});

// слайдер клиник
$(document).ready(function () {

  let rehabsSwiper = new Swiper('#rehabs-swiper', {
    slidesPerView: '2',
    spaceBetween: 25,
    touchRatio: 1,

    navigation: {
      nextEl: '.rehabs-swiper__button-next',
      prevEl: '.rehabs-swiper__button-prev',
    },

    breakpoints: {
      756: {
        slidesPerView: '4',
        spaceBetween: 20,
      },
    }
  });
});

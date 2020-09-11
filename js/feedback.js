$(document).ready(function () {

    let rehabsSwiper = new Swiper('#feedback-swiper', {
        slidesPerView: '2',
        spaceBetween: 25,
        touchRatio: 1,

        navigation: {
            nextEl: '.rehabs-swiper__button-next',
            prevEl: '.rehabs-swiper__button-prev',
        },

        breakpoints: {
            756: {
                slidesPerView: '3',
                spaceBetween: 20,
            },
        }
    });
});
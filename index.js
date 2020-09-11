$(document).ready(function () {

    let rehabsSwiper = new Swiper('#rehabs-swiper', {
        slidesPerView: '2',
        spaceBetween: 0,
        touchRatio: 1,

        navigation: {
            nextEl: '.rehabs-swiper__button-next',
            prevEl: '.rehabs-swiper__button-prev',
        },

        breakpoints: {
            756: {
                slidesPerView: '4',
                spaceBetween: 0,
            },
        }
    });
});

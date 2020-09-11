$(document).ready(function () {

    let rehabsSwiper = new Swiper('#clinic-swiper', {
        slidesPerView: '3',
        spaceBetween: 25,
        touchRatio: 1,
        navigation: {
            nextEl: '.rehabs-swiper__button-next',
            prevEl: '.rehabs-swiper__button-prev',
        },

        breakpoints: {
            756: {
                slidesPerView: '3',
                spaceBetween: 0,
            },
        }
    });
});

$(document).ready(function () {

    let rehabsSwiper = new Swiper('#clinic-swiper-mob', {
        slidesPerView: '3',
        spaceBetween: 0,
        touchRatio: 1,
        navigation: {
            nextEl: '.rehabs-swiper__button-next',
            prevEl: '.rehabs-swiper__button-prev',
        },

        breakpoints: {
            756: {
                slidesPerView: '3',
                spaceBetween: 0,
            },
        }
    });
});
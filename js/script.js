"use strict"

if (document.querySelector('.swiper-reviews')) {
    new Swiper('.swiper-reviews', {
        // Optional parameters
        loop: true,
        autoHeight: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
}

'use strict'
function ibg() {

    let ibg = document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
        if (ibg[i].querySelector('img')) {
            ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
        }
    }
}

ibg();


$('.header-menu__icon').click(function () {
    $(this).toggleClass('active');
    $('.header-menu').toggleClass('active');
    if ($(this).hasClass('active')) {
        $('body').data('scroll', $(window).scrollTop())
    }
    $('body').toggleClass('lock');
    if (!$(this).hasClass('active')) {
        $('body, html').scrollTop(parseInt($('body').data('scroll')))
    }
})






window.addEventListener('scroll', function () {
    scrollY > 0 ? document.querySelector('.header').classList.add('scroll') : document.querySelector('.header').classList.remove('scroll');
})


const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    autoHeight: true,
    // Navigation arrows
    navigation: {
        nextEl: '.page-next',
        prevEl: '.page-prew',
    },
});

const swiper2 = new Swiper('.text-slider-swiper', {
    // Optional parameters
    loop: true,
    // Navigation arrows
    navigation: {
        nextEl: '.text-slider-next',
        prevEl: '.text-slider-prev',
    },

});


//__________________________________________________
const s = new Swiper('.blog-sw', {
    // Optional parameters
    loop: true,
    slidesPerView: 2,
    // Navigation arrows
    navigation: {
        nextEl: '.blog-header-arrows-next',
        prevEl: '.blog-header-arrows-prev',
    },

});
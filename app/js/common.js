$(document).ready(function() {
    $('.footer-box h3').on('click', function () {
       $(this).toggleClass('on').siblings('.footer__nav-menu').slideToggle();
    });

    $('.dropdown-menu__user .btn-close').on('click', function () {
       $(this).parents().removeClass('show');
    });

    $('.navbar-collapse .btn-close').on('click', function () {
        $(this).parents().removeClass('show');
    });


    // slick active
    $(window).on('load resize', function() {
        if ($(window).width() < 992) {
            $('.profile-tabs:not(.slick-initialized)').slick({
                dots: false,
                infinite: true,
                speed: 100,
                slidesToShow: 1,
                arrows: true,
                asNavFor: '.profile-tabs__content',
                prevArrow: '<button type="button" class="slick-prev"></button>',
                nextArrow: '<button type="button" class="slick-next"></button>'
            });

            $('.profile-tabs__content:not(.slick-initialized)').slick({
                dots: false,
                infinite: true,
                speed: 100,
                slidesToShow: 1,
                arrows: false,
                asNavFor: '.profile-tabs'
            });
        } else {
            $(".profile-tabs.slick-initialized").slick("unslick");
            $(".profile-tabs__content.slick-initialized").slick("unslick");
        }
    });
// slick active
});

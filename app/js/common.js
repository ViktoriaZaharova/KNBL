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


    $('.bid-information__title').on('click', function () {
       $(this).toggleClass('on').siblings('.bid-information__text').slideToggle();
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
                nextArrow: '<button type="button" class="slick-next"></button>',
                adaptiveHeight: true
            });

            $('.profile-tabs__content:not(.slick-initialized)').slick({
                dots: false,
                infinite: true,
                speed: 100,
                slidesToShow: 1,
                arrows: false,
                asNavFor: '.profile-tabs',
                adaptiveHeight: true
            });

            $('.league-wrapper__slider:not(.slick-initialized)').slick({
                dots: false,
                infinite: true,
                speed: 100,
                slidesToShow: 2,
                centerMode: true,
                arrows: true,
                prevArrow: '<button type="button" class="slick-prev"></button>',
                nextArrow: '<button type="button" class="slick-next"></button>',
                responsive: [
                    {
                        breakpoint: 710,
                        settings: {
                            centerMode: true,
                            centerPadding: '20px',
                            slidesToShow: 1
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            centerMode: true,
                            centerPadding: '0',
                            slidesToShow: 1
                        }
                    }
                ]
            });
        } else {
            $(".profile-tabs.slick-initialized").slick("unslick");
            $(".profile-tabs__content.slick-initialized").slick("unslick");
            $(".league-wrapper__slider.slick-initialized").slick("unslick");
        }
    });
// slick active

    $('.slogan-games__slider').slick({
        slidesToShow: 4,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        dots: false,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    appendArrows: '.slogan-games__arrows',
                }
            }
        ]
    });


    $('.main-slogan-games__slider').slick({
        slidesToShow: 4,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        dots: false,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});

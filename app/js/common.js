$(document).ready(function () {
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

    // show list all
    $('.list-question li .links').on('click', function (e) {
        e.preventDefault();

        var
            $this = $(this),
            content = $(this).siblings('.text');


        if (!$this.hasClass('trigger')) {
            $this.addClass('trigger');
            $this.html('Скрыть');

            content.addClass('open');
        } else {
            $this.removeClass('trigger');
            $this.html('Читать подробнее');

            content.removeClass('open');
        }
    });
    // show list all
    $(window).on('load resize', function () {
        if ($(window).width() < 992) {
            $('.tooltip-wrapper .icon').click(function () {
                $(this).siblings('.tooltip').css('opacity', '1');
            });

            $('.tooltip-close').click(function () {
                $(this).parent().css('opacity', '0');
            });
        }
    });

    // slick active
    $(window).on('load resize', function () {
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

        if ($(window).width() < 768) {
           $('.checkbox-anim').click(function () {
               if (!$(this).data('status')) {
                   $(this).siblings('.checkbox__text').html('Trial');
                   $(this).siblings('.account-rate').html('T').removeClass('account-rate__real');
                   $(this).data('status', true);
               }
               else {
                   $(this).siblings('.checkbox__text').html('Real');
                   $(this).siblings('.account-rate').html('R').addClass('account-rate__real');
                   $(this).data('status', false);
               }
           });
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

$(function () {

    $(window).on('scroll', function () {
        const sct = $(window).scrollTop();
        if (sct > 0) {
            $('.Header').addClass('on')
        }
        else {
            $('.Header').removeClass('on')
        }
    });

    const MainSlide = new Swiper('.main_slide', {
        loop: true,
        parallax: true,
        speed: 600,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        on: {
            slideChangeTransitionStart: function () {
                $('.MainVisual .dots li')
                    .eq(this.realIndex)
                    .addClass('on')
                    .siblings()
                    .removeClass('on')
            }
        }
    });


    $('.MainVisual .arrows .left').on('click', function () {
        MainSlide.slidePrev();
    });
    $('.MainVisual .arrows .right').on('click', function () {
        MainSlide.slideNext();
    });


    $('.MainVisual .dots li').on('click', function () {
        const idx = $(this).index();
        $(this).addClass('on').siblings().removeClass('on')
        MainSlide.slideTo(idx);
    })

    // 1

    const ItmSlide = new Swiper('.itm_slide', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 900,
        // 슬라이드 넘어가는 시간
        autoplay: {
            delay: 4000,
            // 슬라이드 머무는 시간
            disableOnInteraction: false,
        },

        // 반응형 조정
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 400,
            }
        }


    });

    $('.MainItm .arrows .left').on('click', function () {
        ItmSlide.slidePrev()
    }); $('.MainItm .arrows .right').on('click', function () {
        ItmSlide.slideNext()
    });


    // 생자바에서 이렇게씀
    // document.querySelector('.MainItm .arrows .left').addEventListener('click', () => {
    //     ItmSlide.slidePrev()
    // })


    //모바일 반응형 
    $('.mobile_btn').on('click', function () {
        $(this).toggleClass('on')
        $('.Gnb').toggleClass('on')
    });

    $('.Gnb>ul>li>a').on('click', function (e) {
        if ($('.Gnb').hasClass('on')) {
            e.preventDefault();
        }

        // 클릭했을때 링크작동안하게 하는 법
        $(this).next().stop().slideDown();
        $(this).parent().siblings().find('.snb').stop().slideUp();
    })

    //독도js에서 참고 지금은 쉬운버전
    $(window).on('resize', function () {
        $('.Gnb .snb').removeAttr('style')
    })
    // 사이즈 관계없이 작동하게?


})
/* -------------------------------------------

Name: 		Ruizarch
Version:    1.0
Developer:	Nazar Miller (millerDigitalDesign)
Portfolio:  https://themeforest.net/user/millerdigitaldesign/portfolio?ref=MillerDigitalDesign

p.s. I am available for Freelance hire (UI design, web development). email: miller.themes@gmail.com

------------------------------------------- */

$(function () {

    "use strict";

    /***************************

    swup

    ***************************/
    const options = {
        containers: ['#swupMain', '#swupMenu'],
        animateHistoryBrowsing: true,
        linkSelector: 'a:not([data-no-swup])',
        animationSelector: '[class="mil-main-transition"]'
    };
    const swup = new Swup(options);

    /***************************

    register gsap plugins

    ***************************/
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    /***************************

    color variables

    ***************************/

    var accent = 'rgba(255, 152, 0, 1)';
    var dark = '#000';
    var light = '#fff';

    /***************************

    preloader
    
    ***************************/

    var timeline = gsap.timeline();

    timeline.to(".mil-preloader-animation", {
        opacity: 1,
    });

    timeline.fromTo(
        ".mil-animation-1 .mil-h3", {
            y: "30px",
            opacity: 0
        }, {
            y: "0px",
            opacity: 1,
            stagger: 0.4
        },
    );

    timeline.to(".mil-animation-1 .mil-h3", {
        opacity: 0,
        y: '-30',
    }, "+=.5");

    timeline.to(".mil-preloader", 0.8, {
        opacity: 0,
        ease: 'sine',
        onComplete: function () {
            $('.mil-preloader').addClass("mil-hidden");
        },
    }, "+=.2");
    /***************************

    anchor scroll

    ***************************/
    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();

        var target = $($.attr(this, 'href'));
        if (!target.length) return;
        var offset = 0;

        if ($(window).width() < 1200) {
            offset = 90;
        }

        $('html, body').animate({
            scrollTop: target.offset().top - offset
        }, 400);
    });
    /***************************

    append

    ***************************/
    $(document).ready(function () {
        $(".mil-arrow").clone().appendTo(".mil-arrow-place");
        $(".mil-dodecahedron").clone().appendTo(".mil-animation");
        $(".mil-lines").clone().appendTo(".mil-lines-place");
        $(".mil-current-page").text("GEORGE GIRGIS");
    });
    /***************************

    accordion

    ***************************/

    let groups = gsap.utils.toArray(".mil-accordion-group");
    let menus = gsap.utils.toArray(".mil-accordion-menu");
    let menuToggles = groups.map(createAnimation);

    menus.forEach((menu) => {
        menu.addEventListener("click", () => toggleMenu(menu));
    });

    function toggleMenu(clickedMenu) {
        menuToggles.forEach((toggleFn) => toggleFn(clickedMenu));
    }

    function createAnimation(element) {
        let menu = element.querySelector(".mil-accordion-menu");
        let box = element.querySelector(".mil-accordion-content");
        let symbol = element.querySelector(".mil-symbol");
        let minusElement = element.querySelector(".mil-minus");
        let plusElement = element.querySelector(".mil-plus");

        gsap.set(box, {
            height: "auto",
        });

        let animation = gsap
            .timeline()
            .from(box, {
                height: 0,
                duration: 0.4,
                ease: "sine"
            })
            .from(minusElement, {
                duration: 0.4,
                autoAlpha: 0,
                ease: "none",
            }, 0)
            .to(plusElement, {
                duration: 0.4,
                autoAlpha: 0,
                ease: "none",
            }, 0)
            .to(symbol, {
                background: accent,
                ease: "none",
            }, 0)
            .reverse();

        return function (clickedMenu) {
            if (clickedMenu === menu) {
                animation.reversed(!animation.reversed());
            } else {
                animation.reverse();
            }
        };
    }
    /***************************

    back to top

    ***************************/
    const btt = document.querySelector(".mil-back-to-top .mil-link");

    gsap.set(btt, {
        x: -30,
        opacity: 0,
    });

    gsap.to(btt, {
        x: 0,
        opacity: 1,
        ease: 'sine',
        scrollTrigger: {
            trigger: "body",
            start: "top -40%",
            end: "top -40%",
            toggleActions: "play none reverse none"
        }
    });
    /***************************

    cursor

    ***************************/
    const cursor = document.querySelector('.mil-ball');

    gsap.set(cursor, {
        xPercent: -50,
        yPercent: -50,
    });

    document.addEventListener('pointermove', movecursor);

    function movecursor(e) {
        gsap.to(cursor, {
            duration: 0.6,
            ease: 'sine',
            x: e.clientX,
            y: e.clientY,
        });
    }

    $('.mil-drag, .mil-more, .mil-choose').mouseover(function () {
        gsap.to($(cursor), .2, {
            width: 90,
            height: 90,
            opacity: 1,
            ease: 'sine',
        });
    });

    $('.mil-drag, .mil-more, .mil-choose').mouseleave(function () {
        gsap.to($(cursor), .2, {
            width: 20,
            height: 20,
            opacity: .1,
            ease: 'sine',
        });
    });

    $('.mil-accent-cursor').mouseover(function () {
        gsap.to($(cursor), .2, {
            background: accent,
            ease: 'sine',
        });
        $(cursor).addClass('mil-accent');
    });

    $('.mil-accent-cursor').mouseleave(function () {
        gsap.to($(cursor), .2, {
            background: dark,
            ease: 'sine',
        });
        $(cursor).removeClass('mil-accent');
    });

    $('.mil-drag').mouseover(function () {
        gsap.to($('.mil-ball .mil-icon-1'), .2, {
            scale: '1',
            ease: 'sine',
        });
    });

    $('.mil-drag').mouseleave(function () {
        gsap.to($('.mil-ball .mil-icon-1'), .2, {
            scale: '0',
            ease: 'sine',
        });
    });

    $('.mil-more').mouseover(function () {
        gsap.to($('.mil-ball .mil-more-text'), .2, {
            scale: '1',
            ease: 'sine',
        });
    });

    $('.mil-more').mouseleave(function () {
        gsap.to($('.mil-ball .mil-more-text'), .2, {
            scale: '0',
            ease: 'sine',
        });
    });

    $('.mil-choose').mouseover(function () {
        gsap.to($('.mil-ball .mil-choose-text'), .2, {
            scale: '1',
            ease: 'sine',
        });
    });

    $('.mil-choose').mouseleave(function () {
        gsap.to($('.mil-ball .mil-choose-text'), .2, {
            scale: '0',
            ease: 'sine',
        });
    });

    $('a:not(".mil-choose , .mil-more , .mil-drag , .mil-accent-cursor"), input , textarea, .mil-accordion-menu').mouseover(function () {
        gsap.to($(cursor), .2, {
            scale: 0,
            ease: 'sine',
        });
        gsap.to($('.mil-ball svg'), .2, {
            scale: 0,
        });
    });

    $('a:not(".mil-choose , .mil-more , .mil-drag , .mil-accent-cursor"), input, textarea, .mil-accordion-menu').mouseleave(function () {
        gsap.to($(cursor), .2, {
            scale: 1,
            ease: 'sine',
        });

        gsap.to($('.mil-ball svg'), .2, {
            scale: 1,
        });
    });

    $('body').mousedown(function () {
        gsap.to($(cursor), .2, {
            scale: .1,
            ease: 'sine',
        });
    });
    $('body').mouseup(function () {
        gsap.to($(cursor), .2, {
            scale: 1,
            ease: 'sine',
        });
    });
    /***************************

     menu

    ***************************/
    $('.mil-menu-btn').on("click", function () {
        $('.mil-menu-btn').toggleClass('mil-active');
        $('.mil-menu').toggleClass('mil-active');
        $('.mil-menu-frame').toggleClass('mil-active');
    });
    /***************************

    main menu

    ***************************/
    $('.mil-has-children a').on('click', function () {
        $('.mil-has-children ul').removeClass('mil-active');
        $('.mil-has-children a').removeClass('mil-active');
        $(this).toggleClass('mil-active');
        $(this).next().toggleClass('mil-active');
    });
    /***************************

    progressbar

    ***************************/
    gsap.to('.mil-progress', {
        height: '100%',
        ease: 'sine',
        scrollTrigger: {
            scrub: 0.3
        }
    });
    /***************************

    scroll animations

    ***************************/

    const appearance = document.querySelectorAll(".mil-up");

    appearance.forEach((section) => {
        gsap.fromTo(section, {
            opacity: 0,
            y: 40,
            scale: .98,
            ease: 'sine',

        }, {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: .4,
            scrollTrigger: {
                trigger: section,
                toggleActions: 'play none none none',
            }
        });
    });

    const scaleImage = document.querySelectorAll(".mil-scale");

    scaleImage.forEach((section) => {
        var value1 = $(section).data("value-1");
        var value2 = $(section).data("value-2");
        gsap.fromTo(section, {
            ease: 'sine',
            scale: value1,

        }, {
            scale: value2,
            scrollTrigger: {
                trigger: section,
                scrub: true,
                toggleActions: 'play none none reverse',
            }
        });
    });

    const parallaxImage = document.querySelectorAll(".mil-parallax");


    if ($(window).width() > 960) {
        parallaxImage.forEach((section) => {
            var value1 = $(section).data("value-1");
            var value2 = $(section).data("value-2");
            gsap.fromTo(section, {
                ease: 'sine',
                y: value1,

            }, {
                y: value2,
                scrollTrigger: {
                    trigger: section,
                    scrub: true,
                    toggleActions: 'play none none reverse',
                }
            });
        });
    }

    const rotate = document.querySelectorAll(".mil-rotate");

    rotate.forEach((section) => {
        var value = $(section).data("value");
        gsap.fromTo(section, {
            ease: 'sine',
            rotate: 0,

        }, {
            rotate: value,
            scrollTrigger: {
                trigger: section,
                scrub: true,
                toggleActions: 'play none none reverse',
            }
        });
    });
    /***************************

    fancybox

    ***************************/
    $('[data-fancybox="gallery"]').fancybox({
        buttons: [
            "slideShow",
            "zoom",
            "fullScreen",
            "close"
          ],
        loop: false,
        protect: true
    });
    $.fancybox.defaults.hash = false;
    /***************************

    reviews slider

    ***************************/

    var menu = ['<div class="mil-custom-dot mil-slide-1"></div>', '<div class="mil-custom-dot mil-slide-2"></div>', '<div class="mil-custom-dot mil-slide-3"></div>', '<div class="mil-custom-dot mil-slide-4"></div>', '<div class="mil-custom-dot mil-slide-5"></div>', '<div class="mil-custom-dot mil-slide-6"></div>', '<div class="mil-custom-dot mil-slide-7"></div>']
    var mySwiper = new Swiper('.mil-reviews-slider', {
        // If we need pagination
        pagination: {
            el: '.mil-revi-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (menu[index]) + '</span>';
            },
        },
        speed: 800,
        effect: 'fade',
        parallax: true,
        navigation: {
            nextEl: '.mil-revi-next',
            prevEl: '.mil-revi-prev',
        },
    })

    /***************************

    infinite slider

    ***************************/
    var swiper = new Swiper('.mil-infinite-show', {
        slidesPerView: 3,
        spaceBetween: 10,
        speed: 5000,
        autoplay: true,
        autoplay: {
            delay: 0,
        },
        loop: true,
        freeMode: true,
        breakpoints: {
            576: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            992: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
        },
    });

    /***************************

    portfolio slider

    ***************************/
    var swiper = new Swiper('.mil-portfolio-slider', {
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 800,
        parallax: true,
        mousewheel: {
            enable: true
        },
        navigation: {
            nextEl: '.mil-portfolio-next',
            prevEl: '.mil-portfolio-prev',
        },
        pagination: {
            el: '.swiper-portfolio-pagination',
            type: 'fraction',
        },
    });
    /***************************

    1 item slider

    ***************************/
    var swiper = new Swiper('.mil-1-slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        speed: 800,
        parallax: true,
        navigation: {
            nextEl: '.mil-portfolio-next',
            prevEl: '.mil-portfolio-prev',
        },
        pagination: {
            el: '.swiper-portfolio-pagination',
            type: 'fraction',
        },
    });
    /***************************

    2 item slider

    ***************************/
    var swiper = new Swiper('.mil-2-slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        speed: 800,
        parallax: true,
        navigation: {
            nextEl: '.mil-portfolio-next',
            prevEl: '.mil-portfolio-prev',
        },
        pagination: {
            el: '.swiper-portfolio-pagination',
            type: 'fraction',
        },
        breakpoints: {
            992: {
                slidesPerView: 2,
            },
        },
    });

    /*----------------------------------------------------------
    ------------------------------------------------------------

    REINIT

    ------------------------------------------------------------
    ----------------------------------------------------------*/
    document.addEventListener("swup:contentReplaced", function () {

        /* Bug 3 fix: kill ScrollTrigger instances whose trigger elements were removed
           from the DOM by Swup. Triggers whose elements are still live (progress bar,
           back-to-top, body) are left intact. */
        ScrollTrigger.getAll().forEach(function(t) {
            if (t.trigger && !document.contains(t.trigger)) {
                t.kill();
            }
        });

        $('html, body').animate({
            scrollTop: 0,
        }, 0);

        /* video page: clean up grid/feed UI when leaving Videos.html */
        var onVideoPage = !!document.getElementById('videoGrid');
        if (!onVideoPage) {
            var oldBack = document.getElementById('milFeedBackBtn');
            if (oldBack) oldBack.remove();
            var oldFs = document.getElementById('milFsViewer');
            if (oldFs) oldFs.remove();
        }

        /* hide/show theme toggles — only belong on Videos.html */
        var deskToggle = document.getElementById('vid-theme-toggle-desk');
        var mobToggle  = document.getElementById('vid-theme-toggle-mob');
        if (deskToggle) deskToggle.style.display = onVideoPage ? '' : 'none';
        if (mobToggle)  mobToggle.style.display  = onVideoPage ? '' : 'none';

        /* video page: re-init filter + player after Swup navigation */
        if (document.getElementById('videoGrid')) {
            window._videoActiveFilter = 'all';
            /* reset dataset.ready so initFilter re-applies state on the fresh DOM */
            var filterBar = document.querySelector('.mil-filter-bar');
            if (filterBar) delete filterBar.dataset.ready;
            var grid = document.getElementById('videoGrid');
            if (grid) grid.classList.remove('mil-feed-mode');
            window._initVideoPage();
        }

        /* home page: re-init world map after Swup navigation */
        if (document.getElementById('world-map') && typeof window._initWorldMap === 'function') {
            setTimeout(window._initWorldMap, 0);
        }

        /* Bug 11: websites.html PDF overlay — re-init after Swup replaces DOM */
        if (document.getElementById('pdf-overlay') && typeof window._initPdfOverlay === 'function') {
            window._initPdfOverlay();
        }

        gsap.to('.mil-progress', {
            height: 0,
            ease: 'sine',
            onComplete: () => {
                ScrollTrigger.refresh()
            },
        });
        /***************************

         menu

        ***************************/
        $('.mil-menu-btn').removeClass('mil-active');
        $('.mil-menu').removeClass('mil-active');
        $('.mil-menu-frame').removeClass('mil-active');
        /***************************

        append

        ***************************/
        $(document).ready(function () {
            $(".mil-arrow-place .mil-arrow, .mil-animation .mil-dodecahedron, .mil-lines-place .mil-lines").remove();
            $(".mil-arrow").clone().appendTo(".mil-arrow-place");
            $(".mil-dodecahedron").clone().appendTo(".mil-animation");
            $(".mil-lines").clone().appendTo(".mil-lines-place");
            $(".mil-current-page").text("GEORGE GIRGIS");
        });
        /***************************

        accordion

        ***************************/

        let groups = gsap.utils.toArray(".mil-accordion-group");
        let menus = gsap.utils.toArray(".mil-accordion-menu");
        let menuToggles = groups.map(createAnimation);

        menus.forEach((menu) => {
            menu.addEventListener("click", () => toggleMenu(menu));
        });

        function toggleMenu(clickedMenu) {
            menuToggles.forEach((toggleFn) => toggleFn(clickedMenu));
        }

        function createAnimation(element) {
            let menu = element.querySelector(".mil-accordion-menu");
            let box = element.querySelector(".mil-accordion-content");
            let symbol = element.querySelector(".mil-symbol");
            let minusElement = element.querySelector(".mil-minus");
            let plusElement = element.querySelector(".mil-plus");

            gsap.set(box, {
                height: "auto",
            });

            let animation = gsap
                .timeline()
                .from(box, {
                    height: 0,
                    duration: 0.4,
                    ease: "sine"
                })
                .from(minusElement, {
                    duration: 0.4,
                    autoAlpha: 0,
                    ease: "none",
                }, 0)
                .to(plusElement, {
                    duration: 0.4,
                    autoAlpha: 0,
                    ease: "none",
                }, 0)
                .to(symbol, {
                    background: accent,
                    ease: "none",
                }, 0)
                .reverse();

            return function (clickedMenu) {
                if (clickedMenu === menu) {
                    animation.reversed(!animation.reversed());
                } else {
                    animation.reverse();
                }
            };
        }

        /***************************

        cursor

        ***************************/

        $('.mil-drag, .mil-more, .mil-choose').mouseover(function () {
            gsap.to($(cursor), .2, {
                width: 90,
                height: 90,
                opacity: 1,
                ease: 'sine',
            });
        });

        $('.mil-drag, .mil-more, .mil-choose').mouseleave(function () {
            gsap.to($(cursor), .2, {
                width: 20,
                height: 20,
                opacity: .1,
                ease: 'sine',
            });
        });

        $('.mil-accent-cursor').mouseover(function () {
            gsap.to($(cursor), .2, {
                background: accent,
                ease: 'sine',
            });
            $(cursor).addClass('mil-accent');
        });

        $('.mil-accent-cursor').mouseleave(function () {
            gsap.to($(cursor), .2, {
                background: dark,
                ease: 'sine',
            });
            $(cursor).removeClass('mil-accent');
        });

        $('.mil-drag').mouseover(function () {
            gsap.to($('.mil-ball .mil-icon-1'), .2, {
                scale: '1',
                ease: 'sine',
            });
        });

        $('.mil-drag').mouseleave(function () {
            gsap.to($('.mil-ball .mil-icon-1'), .2, {
                scale: '0',
                ease: 'sine',
            });
        });

        $('.mil-more').mouseover(function () {
            gsap.to($('.mil-ball .mil-more-text'), .2, {
                scale: '1',
                ease: 'sine',
            });
        });

        $('.mil-more').mouseleave(function () {
            gsap.to($('.mil-ball .mil-more-text'), .2, {
                scale: '0',
                ease: 'sine',
            });
        });

        $('.mil-choose').mouseover(function () {
            gsap.to($('.mil-ball .mil-choose-text'), .2, {
                scale: '1',
                ease: 'sine',
            });
        });

        $('.mil-choose').mouseleave(function () {
            gsap.to($('.mil-ball .mil-choose-text'), .2, {
                scale: '0',
                ease: 'sine',
            });
        });

        $('a:not(".mil-choose , .mil-more , .mil-drag , .mil-accent-cursor"), input , textarea, .mil-accordion-menu').off('mouseover.cursor').on('mouseover.cursor', function () {
            gsap.to($(cursor), .2, {
                scale: 0,
                ease: 'sine',
            });
            gsap.to($('.mil-ball svg'), .2, {
                scale: 0,
            });
        });

        $('a:not(".mil-choose , .mil-more , .mil-drag , .mil-accent-cursor"), input, textarea, .mil-accordion-menu').off('mouseleave.cursor').on('mouseleave.cursor', function () {
            gsap.to($(cursor), .2, {
                scale: 1,
                ease: 'sine',
            });

            gsap.to($('.mil-ball svg'), .2, {
                scale: 1,
            });
        });

        $('body').off('mousedown.cursor').on('mousedown.cursor', function () {
            gsap.to($(cursor), .2, {
                scale: .1,
                ease: 'sine',
            });
        });
        $('body').off('mouseup.cursor').on('mouseup.cursor', function () {
            gsap.to($(cursor), .2, {
                scale: 1,
                ease: 'sine',
            });
        });
        /***************************

        main menu

        ***************************/
        $('.mil-has-children a').off('click.milmenu').on('click.milmenu', function () {
            $('.mil-has-children ul').removeClass('mil-active');
            $('.mil-has-children a').removeClass('mil-active');
            $(this).toggleClass('mil-active');
            $(this).next().toggleClass('mil-active');
        });
        /***************************

        scroll animations

        ***************************/

        const appearance = document.querySelectorAll(".mil-up");

        appearance.forEach((section) => {
            gsap.fromTo(section, {
                opacity: 0,
                y: 40,
                scale: .98,
                ease: 'sine',

            }, {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: .4,
                scrollTrigger: {
                    trigger: section,
                    toggleActions: 'play none none none',
                }
            });
        });

        const scaleImage = document.querySelectorAll(".mil-scale");

        scaleImage.forEach((section) => {
            var value1 = $(section).data("value-1");
            var value2 = $(section).data("value-2");
            gsap.fromTo(section, {
                ease: 'sine',
                scale: value1,

            }, {
                scale: value2,
                scrollTrigger: {
                    trigger: section,
                    scrub: true,
                    toggleActions: 'play none none reverse',
                }
            });
        });

        const parallaxImage = document.querySelectorAll(".mil-parallax");


        if ($(window).width() > 960) {
            parallaxImage.forEach((section) => {
                var value1 = $(section).data("value-1");
                var value2 = $(section).data("value-2");
                gsap.fromTo(section, {
                    ease: 'sine',
                    y: value1,

                }, {
                    y: value2,
                    scrollTrigger: {
                        trigger: section,
                        scrub: true,
                        toggleActions: 'play none none reverse',
                    }
                });
            });
        }

        const rotate = document.querySelectorAll(".mil-rotate");

        rotate.forEach((section) => {
            var value = $(section).data("value");
            gsap.fromTo(section, {
                ease: 'sine',
                rotate: 0,

            }, {
                rotate: value,
                scrollTrigger: {
                    trigger: section,
                    scrub: true,
                    toggleActions: 'play none none reverse',
                }
            });
        });
        /***************************

        fancybox

        ***************************/
        $('[data-fancybox="gallery"]').fancybox({
            buttons: [
            "slideShow",
            "zoom",
            "fullScreen",
            "close"
          ],
            loop: false,
            protect: true
        });
        $.fancybox.defaults.hash = false;
        /***************************

        reviews slider

        ***************************/

        var menu = ['<div class="mil-custom-dot mil-slide-1"></div>', '<div class="mil-custom-dot mil-slide-2"></div>', '<div class="mil-custom-dot mil-slide-3"></div>', '<div class="mil-custom-dot mil-slide-4"></div>', '<div class="mil-custom-dot mil-slide-5"></div>', '<div class="mil-custom-dot mil-slide-6"></div>', '<div class="mil-custom-dot mil-slide-7"></div>']
        var mySwiper = new Swiper('.mil-reviews-slider', {
            // If we need pagination
            pagination: {
                el: '.mil-revi-pagination',
                clickable: true,
                renderBullet: function (index, className) {
                    return '<span class="' + className + '">' + (menu[index]) + '</span>';
                },
            },
            speed: 800,
            effect: 'fade',
            parallax: true,
            navigation: {
                nextEl: '.mil-revi-next',
                prevEl: '.mil-revi-prev',
            },
        })

        /***************************

        infinite slider

        ***************************/
        var swiper = new Swiper('.mil-infinite-show', {
            slidesPerView: 3,
            spaceBetween: 10,
            speed: 5000,
            autoplay: true,
            autoplay: {
                delay: 0,
            },
            loop: true,
            freeMode: true,
            breakpoints: {
                576: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                992: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                },
            },
        });

        /***************************

        portfolio slider

        ***************************/
        var swiper = new Swiper('.mil-portfolio-slider', {
            slidesPerView: 1,
            spaceBetween: 0,
            speed: 800,
            parallax: true,
            mousewheel: {
                enable: true
            },
            navigation: {
                nextEl: '.mil-portfolio-next',
                prevEl: '.mil-portfolio-prev',
            },
            pagination: {
                el: '.swiper-portfolio-pagination',
                type: 'fraction',
            },
        });
        /***************************

        1 item slider

        ***************************/
        var swiper = new Swiper('.mil-1-slider', {
            slidesPerView: 1,
            spaceBetween: 30,
            speed: 800,
            parallax: true,
            navigation: {
                nextEl: '.mil-portfolio-next',
                prevEl: '.mil-portfolio-prev',
            },
            pagination: {
                el: '.swiper-portfolio-pagination',
                type: 'fraction',
            },
        });
        /***************************

        2 item slider

        ***************************/
        var swiper = new Swiper('.mil-2-slider', {
            slidesPerView: 1,
            spaceBetween: 30,
            speed: 800,
            parallax: true,
            navigation: {
                nextEl: '.mil-portfolio-next',
                prevEl: '.mil-portfolio-prev',
            },
            pagination: {
                el: '.swiper-portfolio-pagination',
                type: 'fraction',
            },
            breakpoints: {
                992: {
                    slidesPerView: 2,
                },
            },
        });

    });

});

/* ── Video portfolio: filter + inline player ─────────────────────────────── */
(function () {
    window._videoActiveFilter = 'all';

    function applyFilter(filter) {
        var grid = document.getElementById('videoGrid');
        if (!grid) return;
        if (filter === 'all') {
            grid.classList.remove('mil-grid-filtered');
        } else {
            grid.classList.add('mil-grid-filtered');
        }
        grid.querySelectorAll('.mil-video-card').forEach(function (card) {
            var cats = (card.getAttribute('data-category') || '').split(' ');
            var match = filter === 'all' || cats.indexOf(filter) !== -1;
            card.classList.toggle('mil-hidden', !match);
        });
        if (filter === 'social-media') {
            grid.classList.add('mil-social-media');
            grid.querySelectorAll('.vg-group').forEach(function (g) {
                g.style.display = g.querySelector('.mil-video-card:not(.mil-hidden)') ? '' : 'none';
            });
        } else {
            grid.classList.remove('mil-social-media');
            grid.querySelectorAll('.vg-group').forEach(function (g) { g.style.display = ''; });
        }
    }

    function initFilter() {
        var bar = document.querySelector('.mil-filter-bar');
        if (!bar) return;
        applyFilter(window._videoActiveFilter);
        if (bar.dataset.ready) return;
        bar.dataset.ready = '1';
        bar.addEventListener('click', function (e) {
            var btn = e.target.closest ? e.target.closest('.mil-filter-btn')
                : (e.target.classList.contains('mil-filter-btn') ? e.target : null);
            if (!btn) return;
            var filter = btn.getAttribute('data-filter');
            if (filter === window._videoActiveFilter) return;
            window._videoActiveFilter = filter;
            bar.querySelectorAll('.mil-filter-btn').forEach(function (b) { b.classList.remove('active'); });
            btn.classList.add('active');
            applyFilter(filter);
        });
    }

    function initInlinePlayer() {

        /* ── Back-to-grid button ── */
        var backBtn = document.getElementById('milFeedBackBtn');
        if (!backBtn) {
            backBtn = document.createElement('button');
            backBtn.id = 'milFeedBackBtn';
            backBtn.className = 'mil-feed-back-btn';
            backBtn.innerHTML = '<i class="fas fa-th" style="font-size:16px;"></i>';
            document.body.appendChild(backBtn);
            backBtn.addEventListener('click', function () {
                var grid = document.getElementById('videoGrid');
                if (grid) {
                    grid.classList.remove('mil-feed-mode');
                    document.querySelectorAll('.mil-video-thumb.mil-playing').forEach(function (ot) {
                        var ov = ot.querySelector('video');
                        if (ov) { ov.pause(); ov.controls = false; }
                        ot.classList.remove('mil-playing');
                    });
                }
                backBtn.classList.remove('mil-visible');
                /* Restore the closer-look button and scroll up to show filter+button */
                var clWrap = document.getElementById('milCloserLookWrap');
                if (clWrap) clWrap.style.display = '';
                setTimeout(function () {
                    var scrollTarget = clWrap || document.getElementById('portfolio');
                    if (scrollTarget) scrollTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 60);
            });
        }

        /* ── Fullscreen swipe viewer (created once) ── */
        if (!document.getElementById('milFsViewer')) {
            var fsEl = document.createElement('div');
            fsEl.id = 'milFsViewer';
            fsEl.className = 'mil-fs-viewer';
            fsEl.innerHTML =
                '<button class="mil-fs-close" aria-label="Close"><i class="fas fa-times"></i></button>' +
                '<div class="mil-fs-wrap"><video playsinline></video></div>' +
                '<div class="mil-fs-counter"></div>' +
                '<div class="mil-fs-info"></div>' +
                '<div class="mil-fs-hint" aria-hidden="true">' +
                '  <svg class="mil-fs-swipe-icon" viewBox="0 0 50 86" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                '    <path class="mil-su2" d="M10 14 L25 4 L40 14"  stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>' +
                '    <path class="mil-su1" d="M10 24 L25 14 L40 24" stroke="white" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>' +
                '    <circle class="mil-sdot-ring" cx="25" cy="43" r="12" stroke="white" stroke-width="1.2" fill="none"/>' +
                '    <circle class="mil-sdot"      cx="25" cy="43" r="7"  fill="white"/>' +
                '    <path class="mil-sd1" d="M10 62 L25 72 L40 62" stroke="white" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>' +
                '    <path class="mil-sd2" d="M10 72 L25 82 L40 72" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>' +
                '  </svg>' +
                '  <span class="mil-fs-swipe-label">SWIPE</span>' +
                '</div>';
            document.body.appendChild(fsEl);

            var fsWrap    = fsEl.querySelector('.mil-fs-wrap');
            var fsVideo   = fsEl.querySelector('video');
            var fsCounter = fsEl.querySelector('.mil-fs-counter');
            var fsCards   = [];
            var fsIdx     = 0;

            function closeFsViewer() {
                fsVideo.pause();
                fsVideo.removeAttribute('src');
                fsVideo.load();
                fsEl.classList.remove('mil-active');
                document.body.style.overflow = '';
            }

            /* tap on video toggles play/pause in fullscreen viewer */
            fsWrap.addEventListener('click', function () {
                if (fsVideo.paused) { fsVideo.play().catch(function(){}); }
                else { fsVideo.pause(); }
            });

            function loadFsSlide(idx) {
                var card = fsCards[idx];
                var src = card.querySelector('video').getAttribute('src');
                fsVideo.src = src;
                fsVideo.removeAttribute('muted');
                fsVideo.muted = false;
                fsVideo.controls = false;
                fsVideo.play().catch(function () {});
                fsCounter.textContent = (idx + 1) + ' / ' + fsCards.length;
                /* update name + tags overlay */
                var fsInfo = fsEl.querySelector('.mil-fs-info');
                if (fsInfo) {
                    var h6 = card.querySelector('.mil-video-info h6');
                    var tagEls = card.querySelectorAll('.mil-video-tags .mil-video-tag');
                    var name = h6 ? h6.textContent.trim() : '';
                    var tagsHtml = '';
                    tagEls.forEach(function(t) {
                        tagsHtml += '<span class="mil-fs-tag">#' + t.textContent.trim() + '</span>';
                    });
                    fsInfo.innerHTML =
                        '<div class="mil-fs-info-panel">' +
                        (name ? '<div class="mil-fs-name">' + name + '</div>' : '') +
                        (tagsHtml ? '<div class="mil-fs-tags">' + tagsHtml + '</div>' : '') +
                        '<div class="mil-fs-counter-inline">' + (idx + 1) + ' / ' + fsCards.length + '</div>' +
                        '</div>';
                }
            }

            function navigateFs(dir) {
                var next = fsIdx + dir;
                var phone = window.innerWidth < 576;
                var exitDur  = phone ? '0.32s' : '0.14s';
                var enterDur = phone ? '0.36s' : '0.18s';
                var delay    = phone ? 260     : 150;
                if (next < 0 || next >= fsCards.length) {
                    /* bounce back */
                    fsWrap.style.transition = 'transform ' + enterDur + ' ease, opacity ' + enterDur + ' ease';
                    fsWrap.style.transform  = '';
                    fsWrap.style.opacity    = '1';
                    return;
                }
                fsWrap.style.transition = 'transform ' + exitDur + ' ease, opacity ' + exitDur + ' ease';
                fsWrap.style.transform  = dir > 0 ? 'translateY(-50px)' : 'translateY(50px)';
                fsWrap.style.opacity    = '0';
                setTimeout(function () {
                    fsIdx = next;
                    fsVideo.pause();
                    fsWrap.style.transition = 'none';
                    fsWrap.style.transform  = dir > 0 ? 'translateY(50px)' : 'translateY(-50px)';
                    loadFsSlide(fsIdx);
                    requestAnimationFrame(function () {
                        requestAnimationFrame(function () {
                            fsWrap.style.transition = 'transform ' + enterDur + ' ease, opacity ' + enterDur + ' ease';
                            fsWrap.style.transform  = '';
                            fsWrap.style.opacity    = '1';
                        });
                    });
                }, delay);
            }

            fsEl.querySelector('.mil-fs-close').addEventListener('click', closeFsViewer);

            /* swipe gesture */
            var tStartY = 0, tStartT = 0, tSwiping = false;
            fsWrap.addEventListener('touchstart', function (e) {
                tStartY  = e.touches[0].clientY;
                tStartT  = Date.now();
                tSwiping = false;
                fsWrap.style.transition = 'none';
            }, { passive: true });
            fsWrap.addEventListener('touchmove', function (e) {
                var dy = e.touches[0].clientY - tStartY;
                if (!tSwiping && Math.abs(dy) > 8) tSwiping = true;
                if (tSwiping) {
                    e.preventDefault();
                    fsWrap.style.transform = 'translateY(' + (dy * 0.38) + 'px)';
                    fsWrap.style.opacity   = String(Math.max(0.4, 1 - Math.abs(dy) / 280));
                }
            }, { passive: false });
            fsWrap.addEventListener('touchend', function (e) {
                var dy = e.changedTouches[0].clientY - tStartY;
                var dt = Date.now() - tStartT;
                if (tSwiping && (Math.abs(dy) > 60 || (Math.abs(dy) > 22 && dt < 280))) {
                    navigateFs(dy < 0 ? 1 : -1);
                } else {
                    fsWrap.style.transition = 'transform 0.18s ease, opacity 0.18s ease';
                    fsWrap.style.transform  = '';
                    fsWrap.style.opacity    = '1';
                }
            }, { passive: true });

            /* expose opener */
            var fsHint = fsEl.querySelector('.mil-fs-hint');
            var fsHintTimer = null;
            fsEl._open = function (cards, idx) {
                fsCards = cards;
                fsIdx   = idx;
                fsWrap.style.transition = 'none';
                fsWrap.style.transform  = '';
                fsWrap.style.opacity    = '1';
                loadFsSlide(fsIdx);
                fsEl.classList.add('mil-active');
                document.body.style.overflow = 'hidden';
                /* show swipe hint once, then auto-hide */
                if (fsHint) {
                    clearTimeout(fsHintTimer);
                    fsHint.classList.remove('mil-hint-hidden');
                    fsHint.classList.add('mil-hint-visible');
                    fsHintTimer = setTimeout(function () {
                        fsHint.classList.remove('mil-hint-visible');
                        fsHint.classList.add('mil-hint-hidden');
                    }, 2200);
                }
            };
        }

        /* ── Per-thumb setup ── */
        document.querySelectorAll('.mil-video-thumb').forEach(function (thumb) {
            if (thumb.dataset.playerReady) return;
            thumb.dataset.playerReady = '1';
            thumb.style.cursor = 'pointer';
            var fsBtn = thumb.querySelector('.mil-video-fullscreen-btn');
            var video = thumb.querySelector('video');
            var pauseBtn = document.createElement('button');
            pauseBtn.className = 'mil-video-pause-btn';
            pauseBtn.setAttribute('aria-label', 'Pause');
            pauseBtn.innerHTML = '<i class="fas fa-play mil-icon-play" style="padding-left:3px"></i><i class="fas fa-pause mil-icon-pause"></i>';
            thumb.appendChild(pauseBtn);
            if (video) {
                video.addEventListener('ended', function () {
                    video.controls = false;
                    thumb.classList.remove('mil-playing');
                });
            }
            pauseBtn.addEventListener('click', function (e) {
                e.stopPropagation();
                if (thumb.classList.contains('mil-playing')) {
                    if (video) { video.pause(); video.controls = false; }
                    thumb.classList.remove('mil-playing');
                } else {
                    document.querySelectorAll('.mil-video-thumb.mil-playing').forEach(function (ot) {
                        var ov = ot.querySelector('video');
                        if (ov) { ov.pause(); ov.controls = false; }
                        ot.classList.remove('mil-playing');
                    });
                    if (video) {
                        video.removeAttribute('muted');
                        video.muted = false;
                        video.controls = true;
                        video.play().catch(function () {});
                    }
                    thumb.classList.add('mil-playing');
                }
            });
            thumb.addEventListener('click', function (e) {
                if (fsBtn && (e.target === fsBtn || fsBtn.contains(e.target))) return;
                if (e.target === pauseBtn || pauseBtn.contains(e.target)) return;
                if (!video) return;

                /* ── Mobile ── */
                if (window.innerWidth < 576) {
                    var grid   = document.getElementById('videoGrid');
                    var inFeed = grid && grid.classList.contains('mil-feed-mode');

                    /* Tap playing video in feed mode → toggle play/pause */
                    if (inFeed && thumb.classList.contains('mil-playing')) {
                        if (video.paused) { video.play().catch(function(){}); }
                        else { video.pause(); }
                        return;
                    }
                    /* First tap or tap on a different video → zoom + feed mode + play */
                    if (!inFeed) {
                        var card2 = thumb.closest('.mil-video-card');
                        if (card2) card2.classList.add('mil-card-zooming');
                        setTimeout(function () {
                            if (card2) card2.classList.remove('mil-card-zooming');
                            grid.classList.add('mil-feed-mode');
                            grid.querySelectorAll('.mil-video-card').forEach(function(c) {
                                c.classList.add('mil-card-visible');
                            });
                            backBtn.classList.add('mil-visible');
                            var clWrap = document.getElementById('milCloserLookWrap');
                            if (clWrap) clWrap.style.display = 'none';
                            document.querySelectorAll('.mil-video-thumb.mil-playing').forEach(function (ot) {
                                var ov2 = ot.querySelector('video');
                                if (ov2) { ov2.pause(); ov2.controls = false; }
                                ot.classList.remove('mil-playing');
                            });
                            video.removeAttribute('muted');
                            video.muted = false;
                            video.controls = true;
                            video.play().catch(function () {});
                            thumb.classList.add('mil-playing');
                            setTimeout(function () {
                                if (card2) card2.scrollIntoView({ behavior: 'smooth', block: 'center' });
                            }, 200);
                        }, 320);
                        return;
                    }
                    document.querySelectorAll('.mil-video-thumb.mil-playing').forEach(function (ot) {
                        var ov2 = ot.querySelector('video');
                        if (ov2) { ov2.pause(); ov2.controls = false; }
                        ot.classList.remove('mil-playing');
                    });
                    video.removeAttribute('muted');
                    video.muted = false;
                    video.controls = true;
                    video.play().catch(function () {});
                    thumb.classList.add('mil-playing');
                    return;
                }

                /* ── Desktop: inline play ── */
                if (thumb.classList.contains('mil-playing')) {
                    var fsV = document.getElementById('milFsViewer');
                    if (fsV && fsV._open) {
                        var visCrds = Array.from(document.querySelectorAll('.mil-video-card')).filter(function(c){ return c.offsetParent !== null; });
                        var crd = thumb.closest('.mil-video-card');
                        var crdIdx = visCrds.indexOf(crd);
                        fsV._open(visCrds, crdIdx >= 0 ? crdIdx : 0);
                    }
                    return;
                }
                document.querySelectorAll('.mil-video-thumb.mil-playing').forEach(function (ot) {
                    var ov2 = ot.querySelector('video');
                    if (ov2) { ov2.pause(); ov2.controls = false; }
                    ot.classList.remove('mil-playing');
                });
                video.removeAttribute('muted');
                video.muted = false;
                video.controls = true;
                video.play().catch(function() {});
                thumb.classList.add('mil-playing');
            });
            if (fsBtn) {
                fsBtn.addEventListener('click', function (e) {
                    e.stopPropagation();
                    var fsViewer = document.getElementById('milFsViewer');
                    if (fsViewer && fsViewer._open) {
                        var visibleCards = Array.from(document.querySelectorAll('.mil-video-card')).filter(function (c) {
                            return c.offsetParent !== null;
                        });
                        var card = thumb.closest('.mil-video-card');
                        var idx = visibleCards.indexOf(card);
                        fsViewer._open(visibleCards, idx >= 0 ? idx : 0);
                    }
                });
            }
        });
    }

    /* Bug 5 — toggleVidTheme must be global so onclick= in HTML can reach it after Swup */
    window.toggleVidTheme = function () {
        var wrap = document.getElementById('vid-theme-wrap');
        if (!wrap) return;
        var isDark = wrap.classList.toggle('mil-dark-bg');
        var deskIcon = document.querySelector('#vid-theme-toggle-desk i');
        if (deskIcon) deskIcon.className = isDark ? 'fas fa-moon' : 'fas fa-sun';
        var desk = document.getElementById('vid-theme-toggle-desk');
        if (desk) { desk.style.background = isDark ? '#f0f0f0' : '#111'; desk.style.color = isDark ? '#111' : '#fff'; }
        var mobIcon = document.querySelector('#vid-theme-toggle-mob i');
        if (mobIcon) mobIcon.className = isDark ? 'fas fa-moon' : 'fas fa-sun';
    };

    /* Bug 8 — card title overlays for phone grid */
    function initCardTitleOverlays() {
        document.querySelectorAll('#videoGrid .mil-video-card').forEach(function (card) {
            if (card.querySelector('.mil-card-title-bar')) return;
            var h6 = card.querySelector('.mil-video-info h6');
            if (!h6) return;
            var bar = document.createElement('div');
            bar.className = 'mil-card-title-bar';
            bar.textContent = h6.textContent.trim();
            var thumb = card.querySelector('.mil-video-thumb');
            if (thumb) thumb.appendChild(bar);
        });
    }

    /* Bug 8 — card scroll entrance animation for phone grid */
    function initCardScrollAnim() {
        if (window.innerWidth >= 576) return;
        var cards = Array.from(document.querySelectorAll('#videoGrid .mil-video-card'));
        if (!cards.length) return;
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (!entry.isIntersecting) return;
                var card = entry.target;
                var col = cards.indexOf(card) % 3;
                setTimeout(function () { card.classList.add('mil-card-visible'); }, col * 70);
                observer.unobserve(card);
            });
        }, { threshold: 0.06, rootMargin: '0px 0px -12px 0px' });
        cards.forEach(function (c) { observer.observe(c); });
    }

    /* Bug 6 — "TAKE A CLOSER LOOK" button handler */
    function initCloserLookBtn() {
        var btn = document.getElementById('milCloserLookBtn');
        if (!btn || btn.dataset.clReady) return;
        btn.dataset.clReady = '1';
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            var grid = document.getElementById('videoGrid');
            if (!grid) return;
            grid.classList.add('mil-feed-mode');
            grid.querySelectorAll('.mil-video-card').forEach(function (c) { c.classList.add('mil-card-visible'); });
            var backBtn = document.getElementById('milFeedBackBtn');
            if (backBtn) backBtn.classList.add('mil-visible');
            var wrap = document.getElementById('milCloserLookWrap');
            if (wrap) wrap.style.display = 'none';
            setTimeout(function () {
                var target = document.getElementById('milMichelinCard') || grid.querySelector('.mil-video-card');
                if (target) target.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 150);
        });
    }

    /* Mob toggle flip animation */
    function initMobToggleFlip() {
        var btn = document.getElementById('vid-theme-toggle-mob');
        if (!btn || btn.dataset.flipReady) return;
        btn.dataset.flipReady = '1';
        function onPress() { btn.classList.add('vid-flipped'); }
        function onRelease() { btn.classList.remove('vid-flipped'); }
        btn.addEventListener('touchstart', onPress, { passive: true });
        btn.addEventListener('touchend', onRelease);
        btn.addEventListener('touchcancel', onRelease);
        btn.addEventListener('mousedown', onPress);
        btn.addEventListener('mouseup', onRelease);
        btn.addEventListener('mouseleave', onRelease);
    }

    window._initVideoPage = function () {
        initFilter();
        initInlinePlayer();
        initCardTitleOverlays();
        initCardScrollAnim();
        initCloserLookBtn();
        initMobToggleFlip();
    };

    /* Run on direct page load */
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function () {
            if (document.getElementById('videoGrid')) window._initVideoPage();
        });
    } else {
        if (document.getElementById('videoGrid')) window._initVideoPage();
    }
}());

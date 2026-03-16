/*----------------------------------------------
    Index Of Script
------------------------------------------------

    @version         : 2.0.0
    @Template Name   : Sarbasakti Charitable Trust
    @Template author : initTheme
    
    :: Preloader                    :: Nice Scroll js             
    :: Data-background              :: Hover Tilt Effect        
    ::  Search box                  :: Select 2                                  
    :: Mobile Menu                  :: Slick Nav       
    :: Animation                    :: Wow Animation      
    :: Sticky And Scroll Up
    :: slider - Urgent Area-active
    :: slider - Event Area-active
    :: slider - Testimonial Area-active
    :: slider - Testimonial Area-active 02
    :: slider - Gallery Area-active
    :: slider - Popular Brand Area-active
    :: slider - Blog Area-active
    :: slider- Favorite Area-active
    :: slider- Favorite Area-active


------------------------------------------------
    End-of Script
------------------------------------------------*/

(function ($) {
    "use strict";
    if (typeof $ !== "function") {
        return;
    }

    /*----------------------------------------------
        Preloader
    ----------------------------------------------*/
    $(window).on('load', function () {
        $('#preloader-active').delay(450).fadeOut('slow');
        $('body').delay(450).css({
            'overflow': 'visible'
        });
        var counter = 0;
        var c = 0;
        var i = setInterval(function () {
            $(".loading-page .counter .number").html(c + "%");
            $(".loading-page .counter .line").css("width", c + "%");

            counter++; c++;
            if (counter == 101) {
                clearInterval(i);
            }
        }, 10);
    });

    /*-----------------------------------
      Sticky And Scroll Up
    -----------------------------------*/
    $(window).on("scroll", function () {
        var scroll = $(window).scrollTop();
        if (scroll < 400) {
            $(".header-sticky").removeClass("sticky-bar");
            $("#back-top").fadeOut(500);
        } else {
            $(".header-sticky").addClass("sticky-bar");
            $("#back-top").fadeIn(500);
        }
    });

    /*-----------------------------------
      Data-background
    -----------------------------------*/
    $("[data-background]").each(function () {
        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")");
    });

    /*-----------------------------------
      slider-active
    -----------------------------------*/
    function mainSlider() {
        var BasicSlider = $(".slider-active");
        BasicSlider.on("init", function (e, slick) {
            var $firstAnimatingElements = $(".single-slider:first-child").find("[data-animation]");
            doAnimations($firstAnimatingElements);
        });
        BasicSlider.on("beforeChange", function (e, slick, currentSlide, nextSlide) {
            var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find("[data-animation]");
            doAnimations($animatingElements);
        });
        BasicSlider.slick({
            autoplay: true,
            autoplaySpeed: 4000,
            dots: false,
            fade: true,
            arrows: false,
            // rtl: true, // Enable RTL support
            prevArrow: '<button type="button" class="slick-prev"><i class="ti-angle-left"></i></button>',
            nextArrow: '<button type="button" class="slick-next"><i class="ti-angle-right"></i></button>',
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                    },
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                    },
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                    },
                },
            ],
        });

        function doAnimations(elements) {
            var animationEndEvents = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
            elements.each(function () {
                var $this = $(this);
                var $animationDelay = $this.data("delay");
                var $animationType = "animated " + $this.data("animation");
                $this.css({
                    "animation-delay": $animationDelay,
                    "-webkit-animation-delay": $animationDelay,
                });
                $this.addClass($animationType).one(animationEndEvents, function () {
                    $this.removeClass($animationType);
                });
            });
        }
    }
    if ($.fn.slick) {
        mainSlider();
    }

    /*----------------------------------------------
      slider - urgent area-active
    ----------------------------------------------*/
    if ($.fn.slick) {
        $(".urgent-area-slide").slick({
            dots: true,
            infinite: true,
            autoplaySpeed: 400,
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            // rtl: true, // Enable RTL support
        });
    }

    /*----------------------------------------------
       slider - Event Area-active
     ----------------------------------------------*/

    if ($.fn.slick) {
        $(".center-slider-active").slick({
            centerMode: true,
            infinite: true,
            centerPadding: "0px",
            speed: 500,
            variableWidth: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
            // rtl: true, // Enable RTL support
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: "0px",
                        Infinity: true,
                        slidesToShow: 1,
                    },
                },
            ],
        });
    }

    /*----------------------------------------------
      slider- testimonial area-active
    ----------------------------------------------*/
    // $('.testimonial-slider').length > 0 &&
    if ($.fn.slick) {
        $(".testimonial-slider").slick({
            dots: true,
            infinite: true,
            autoplaySpeed: 400,
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            // rtl: true, // Enable RTL support
            prevArrow: '<button type="button" class="slick-prev slick-arrow"><i class="ri-arrow-left-line"></i></button>',
            nextArrow: '<button type="button" class="slick-next slick-arrow"><i class="ri-arrow-right-line"></i></button>',
            customPaging: function (slider, i) {
                // Custom content for each dot
                return `<div class="slick-custom-dot">
                      <div class="testimonial-img-horizontal">
                          <img class="w-100" src="assets/images/gallery/testimonial-${i + 1}.png" alt="image">
                      </div>
                  </div>`;
            },
        });
    }

    /*----------------------------------------------
      slider - Testimonial Area-active 02
    ----------------------------------------------*/
    if ($.fn.slick) {
        $(".testimonial-slider-two").slick({
            dots: false,
            infinite: true,
            arrows: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: false,
            // rtl: true, // Enable RTL support
            prevArrow: '<button type="button" class="slick-prev slick-arrow"><i class="ri-arrow-left-s-line"></i></button>',
            nextArrow: '<button type="button" class="slick-next slick-arrow"><i class="ri-arrow-right-s-line"></i></button>',
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        autoplay: true,
                        autoplaySpeed: 1000,
                        arrows: false,
                    },
                },
            ],
        });
    }

    /*----------------------------------------------
      slider - Testimonial Area-active 03
    ----------------------------------------------*/
    if ($.fn.slick) {
        $(".testimonial-slider-three-active").slick({
            dots: true,
            infinite: true,
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            // rtl: true, // Enable RTL support
            prevArrow: '<button type="button" class="slick-prev slick-arrow"><i class="ri-arrow-left-s-line"></i></button>',
            nextArrow: '<button type="button" class="slick-next slick-arrow"><i class="ri-arrow-right-s-line"></i></button>',
        });
    }

    /*----------------------------------------------
      slider - Gallery Area-active
    ----------------------------------------------*/
    if ($.fn.slick) {
        $(".gallery-slider").slick({
            slidesToShow: 6,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            infinite: true,
            arrows: false,
            // rtl: true, // Enable RTL support
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4,
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                    },
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 2,
                    },
                },
            ],
        });
    }

    /*----------------------------------------------
      slider - Popular Brand Area-active
    ----------------------------------------------*/
    if ($.fn.slick) {
        $(".brand-img-slider").slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            infinite: true,
            arrows: false,
            // rtl: true, // Enable RTL support
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 1,
                    },
                },
            ],
        });
    }

    /*----------------------------------------------
      slider - Blog Area-active
    ----------------------------------------------*/
    if ($.fn.slick) {
        $(".related-blog-slider").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 2000,
            infinite: true,
            arrows: true,
            // rtl: true, // Enable RTL support
            prevArrow: '<button type="button" class="slick-arrow-prev"><p class="arrow-text">Previews</p><div class="slick-prev"><i class="ri-arrow-left-line"></i></div></button>',
            nextArrow: '<button type="button" class="slick-arrow-next"><p class="arrow-text">Next Previews</p><div class="slick-next"><i class="ri-arrow-right-line"></i></div></button>',
        });
    }

    /*----------------------------------------------
      slider- Favorite Area-active
    ----------------------------------------------*/
    if ($.fn.slick) {
        $(".favourite-slider").slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 2000,
            infinite: true,
            // rtl: true, // Enable RTL support
            arrows: false,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 1,
                    },
                },
            ],
        });
    }

    /*----------------------------------------------
      Select 2
    ----------------------------------------------*/
    if ($.fn.select2) {
        $(".select2").select2({
            placeholder: "Choose one",
            width: "100%",
        });
    }


    /*----------------------------------------------
      Custom click expand icon
    ----------------------------------------------*/
    document.addEventListener("DOMContentLoaded", function () {
        const hoverIcons = document.querySelectorAll(".hover-icon");
        hoverIcons.forEach((hoverIcon) => {
            hoverIcon.addEventListener("click", function () {
                const socialIcons = this.nextElementSibling;
                socialIcons.classList.toggle("active");
            });
        });
    });


    /*-----------------------------------
      Slick Nav [ Mobile Menu ]
    -----------------------------------*/
    var slickNavInitialized = false;
    $(function () {
        if (!slickNavInitialized) {
            var menu = $("#navigation");
            if (menu.length && $.fn.slicknav) {
                menu.slicknav({
                    prependTo: ".mobile_menu",
                    closedSymbol: "+",
                    openedSymbol: "-",
                });
                slickNavInitialized = true;
            }
        }
    });


    /*-----------------------------------
      Search box
    -----------------------------------*/
    var $hamburgerIcon = $(".hamburger-icon");
    var $searchIcon = $(".search-bar");
    var $searchContainer = $(".search-container");
    var $overlay = $(".overlay");
    var $closeSearchBtn = $("#closeSearch");

    $hamburgerIcon.click(function () {
        $searchContainer.hide();
        $overlay.hide();
    });

    $searchIcon.click(function () {
        $searchContainer.toggle();
        $overlay.toggle();
    });

    $closeSearchBtn.click(function () {
        $searchContainer.hide();
        $overlay.hide();
    });

    $(document).click(function (event) {
        if (!$(event.target).closest($searchIcon).length && !$(event.target).closest($searchContainer).length) {
            $searchContainer.hide();
            $overlay.hide();
        }
    });

    /*-----------------------------------
      nav tab
    -----------------------------------*/

    $(".tab-section-one").show();

    $(".tab-btn a").on("click", function () {
        $(".tab-btn a").removeClass("active");

        $(this).addClass("active");

        $(".tab-section").hide();
        var tabId = $(this).data("tab-id");
        $("#" + tabId).show();
    });

    /*-----------------------------------
      WOW active
    -----------------------------------*/
    if (typeof WOW !== "undefined") {
        new WOW().init();
    }


    /*-----------------------------------
      Hover Tilt Effect
    -----------------------------------*/
    if ($.fn.tilt) {
        $(".tilt-effect").tilt({
            maxTilt: 6,
            easing: "cubic-bezier(.03,.98,.52,.99)",
            speed: 500,
            transition: true,
        });
    }

    /*-----------------------------------
      Password Show Hide
    -----------------------------------*/
    $(function () {
        $(".toggle-password").click(function () {
            var passwordInput = $($(this).siblings(".password-input"));
            var icon = $(this);
            if (passwordInput.attr("type") == "password") {
                passwordInput.attr("type", "text");
                icon.removeClass("ri-eye-line").addClass("ri-eye-off-line");
            } else {
                passwordInput.attr("type", "password");
                icon.removeClass("ri-eye-off-line").addClass("ri-eye-line");
            }
        });
    })

    /*-----------------------------------
      Back To Top
    -----------------------------------*/
    (function () {
        var progressParent = document.querySelector(".progressParent");
        if (!progressParent) {
            return;
        }

        var progressPath = progressParent.querySelector("path");
        var pathLength =
            progressPath && typeof progressPath.getTotalLength === "function"
                ? progressPath.getTotalLength()
                : null;

        if (pathLength) {
            progressPath.style.transition = progressPath.style.WebkitTransition = "none";
            progressPath.style.strokeDasharray = pathLength + " " + pathLength;
            progressPath.style.strokeDashoffset = pathLength;
            progressPath.getBoundingClientRect();
            progressPath.style.transition = progressPath.style.WebkitTransition = "stroke-dashoffset 10ms linear";

            var updateProgress = function () {
                var scroll = $(window).scrollTop();
                var height = $(document).height() - $(window).height();
                var progress = pathLength - (scroll * pathLength) / height;
                progressPath.style.strokeDashoffset = progress;
            };

            updateProgress();
            $(window).scroll(updateProgress);
        }

        var offset = 50;
        var duration = 550;
        // Always show back-to-top even on short pages with no scroll.
        $(".progressParent").addClass("rn-backto-top-active");
        $(window).on("scroll", function () {
            if ($(this).scrollTop() >= 0) {
                $(".progressParent").addClass("rn-backto-top-active");
            } else {
                $(".progressParent").removeClass("rn-backto-top-active");
            }
        });

        $(".progressParent").on("click", function (event) {
            event.preventDefault();
            $("html, body").animate({ scrollTop: 0 }, duration);
            return false;
        });
    })();

    /*-----------------------------------
      About Video: Play on view
    -----------------------------------*/
    document.addEventListener("DOMContentLoaded", function () {
        var section = document.getElementById("about-video");
        var video = document.getElementById("aboutVideo");
        if (!section || !video) {
            return;
        }

        if (!("IntersectionObserver" in window)) {
            section.classList.add("is-visible");
            return;
        }

        section.classList.add("has-observer");
        var observer = new IntersectionObserver(
            function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        section.classList.add("is-visible");
                        video.muted = true;
                        var playPromise = video.play();
                        if (playPromise && typeof playPromise.catch === "function") {
                            playPromise.catch(function () {});
                        }
                    } else {
                        video.pause();
                    }
                });
            },
            { threshold: 0.35 }
        );

        observer.observe(section);
    });

    /* Impact Carousel: JS rotation + manual dots */
    document.addEventListener("DOMContentLoaded", function () {
        var track = document.getElementById("impactCarousel");
        var dots = document.querySelectorAll(".impact-dot");
        var texts = document.querySelectorAll(".impact-text");
        if (!track) {
            return;
        }

        var slides = Array.prototype.slice.call(track.querySelectorAll(".impact-slide"));
        if (slides.length < 2) {
            return;
        }

        var centerIndex = 1;
        var intervalId = null;

        function setActiveDot(index) {
            if (!dots.length) {
                return;
            }
            dots.forEach(function (dot) {
                dot.classList.remove("is-active");
            });
            if (dots[index]) {
                dots[index].classList.add("is-active");
            }
        }

        function setActiveText(index) {
            if (!texts.length) {
                return;
            }
            texts.forEach(function (text) {
                text.classList.remove("is-active");
            });
            if (texts[index]) {
                texts[index].classList.add("is-active");
            }
        }

        function render() {
            var len = slides.length;
            slides.forEach(function (slide, index) {
                slide.classList.remove("is-left", "is-center", "is-right");
                if (index === centerIndex) {
                    slide.classList.add("is-center");
                } else if (index === (centerIndex - 1 + len) % len) {
                    slide.classList.add("is-left");
                } else if (index === (centerIndex + 1) % len) {
                    slide.classList.add("is-right");
                }
            });
            setActiveDot(centerIndex % dots.length);
            setActiveText(centerIndex % texts.length);
        }

        function rotate() {
            centerIndex = (centerIndex + 1) % slides.length;
            render();
        }

        function start() {
            if (intervalId) {
                return;
            }
            intervalId = setInterval(rotate, 2500);
        }

        function stop() {
            if (intervalId) {
                clearInterval(intervalId);
                intervalId = null;
            }
        }

        if (dots.length) {
            dots.forEach(function (dot) {
                dot.addEventListener("click", function () {
                    var index = Number(dot.getAttribute("data-index") || "0");
                    centerIndex = index;
                    render();
                    stop();
                    start();
                });
            });
        }

        render();
        setActiveText(centerIndex % texts.length);
        start();
    });




    /*-----------------------------------
        selectPricing , Tag
    -----------------------------------*/
    $(".selectPricing li, .selectTag li").click(function () {
        $(this).toggleClass('active').siblings().removeClass('active');
    });

    /*------------------------------
        payment gateway selection
    -------------------------------*/
    $(".payment-gateway-list li").on('click', function () {
        $(".payment-gateway-list li").removeClass("selected");
        $(this).addClass("selected");
    })


    // Count pricing
    $(function () {
        let price_right_parent = $('.priceListing');
        let left_default_amount = $('.left_default_amount').val();
        price_right_parent.find('.total_donation_amount').text('$' + left_default_amount);

        $(document).on('click', '.selectPricing li', function () {
            let el = '$' + $(this).data('amount');
            price_right_parent.find('.total_donation_amount').text(el);
            $('.left_default_amount').val($(this).data('amount'))
        });

        $(document).on('keyup', '.left_default_amount ', function () {
            let el = $(this).val();
            price_right_parent.find('.total_donation_amount').text('$' + el);
        });

        $(document).on('click', '.payment-gateway-list .single-gateway-item', function () {
            $('#slected_gateway_from_helper').val($(this).data('gateway'))

            let gateway = $(this).data('gateway');

            if (gateway == 'manual_payment') {
                $('.manual_payment_transaction_field').removeClass('d-none');
            } else {
                $('.manual_payment_transaction_field').addClass('d-none');
            }
        });
    });

    /*----------------------------------------------
      Dashboard User sidebar Menu Responsive
    ----------------------------------------------*/
    $(document).on('click', '.close-sidebar, .sidebar-body-overlay', function () {
        $('.panel-sidebar-close, .sidebar-users-dashboard, .sidebar-body-overlay').removeClass('active');
    });
    $(document).on('click', '.sidebar-icon', function () {
        $('.panel-sidebar-close, .sidebar-users-dashboard, .sidebar-body-overlay').addClass('active');
    });

})(window.jQuery || window.$);

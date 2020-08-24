$(document).ready(function(){
    //E-mail Ajax Send
    $(".forms").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {
            alert("Done!");
            setTimeout(function() {
                // Done Functions
                th.trigger("reset");
            }, 1000);
            
        });
        return false;
    });

    $(".forms-exchange").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() { 
            setTimeout(function() {
                // Done Functions
                th.trigger("reset");
            }, 1000);

            var link = document.createElement('a');
            link.setAttribute('href','https://yutland.com/countries/countries.rar');
            link.setAttribute('download','countries.rar');
            link.click();

        });
        return false;
    });
});

$('.bank_active').click(function(){
    $('.filters_map .filters__elem').removeClass('active');
    $('.filters__bank').addClass('active');
    $('.countries__item').addClass('item-hidden');
    $('.countries__item_bank').removeClass('item-hidden');
});

$('.trade_active').click(function(){
    $('.filters_map .filters__elem').removeClass('active');
    $('.filters__trade').addClass('active');
    $('.countries__item').addClass('item-hidden');
    $('.countries__item_trade').removeClass('item-hidden');
});

$('.deo_active').click(function(){
    $('.blog-top .filters__elem').removeClass('active');
    $('.filters__deo').addClass('active');
    $('.blog.js-item2').addClass('item-hidden');
    $('.blog_deo').removeClass('item-hidden');
    $('.blog-list').slick('reinit');
});

var $win = $(window),
    $body = $('body')
    $orderBtn = $('.js-btn-text'); 

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        $body.addClass('ios');
    } else {
        $body.addClass('web');
    };


    $('.callback, .partnership-section .video_waw a, .pop-up').magnificPopup({
        removalDelay: 350,
        mainClass: 'mfp-fade'
    });


    var animArrow, sheet11, sheet12, sheet21, sheet22, sheet31, sheet32;
    $('#fullpage').fullpage({
        //Navigation
        slidesNavigation: false,
        menu: '#menu',
        //Scrolling
        css3: true,
        scrollingSpeed: 500,
        fitToSectionDelay: 300,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopHorizontal: false,
        continuousHorizontal: true,

        //Design
        controlArrows: false,
        responsiveWidth: 1000,
        responsiveHeight: 670,
        responsiveSlides: true,
        scrollOverflow: true,
        //parallax: true,
        //parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},
        resetSliders: true,
        fadingEffect: true,
        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',
        lazyLoading: true,

        //events
        onLeave: function(origin, destination, direction){
            var $el = $('.section.active');
            if (!$body.is('.ios')) {
                $el.find('.js-word').textillate('out');
            }
            if ($('#car1').length && !$body.is('.ios')) {
                car1Animation.pause();
            }
            if ($('#car2').length && !$body.is('.ios')) {
                car2Animation.pause();
            }
            if ($el.find('#arrowHour').length) {
                arrowHour.pause();
            }
            if ($el.find('#arrowMinutes').length) {
                arrowMinutes.pause();
            }
            if ($el.find('.sheet-1').length && !$body.is('.ios')) {
                sheet1.pause();
                if (sheet11 != undefined) {
                 sheet11.pause();
                }
                if (sheet12 != undefined) {
                    sheet12.pause();
                }
            }
            if ($el.find('.sheet-2').length && !$body.is('.ios')) {
                sheet2.pause();
                if (sheet21 != undefined) {
                 sheet21.pause();
                }
                if (sheet22 != undefined) {
                    sheet22.pause();
                }
            }
            if ($el.find('.sheet-3').length && !$body.is('.ios')) {
                sheet3.pause();
                if (sheet31 != undefined) {
                 sheet31.pause();
                }
                if (sheet32 != undefined) {
                    sheet32.pause();
                }
            }
            if ($el.find('#jsPath').length) {
                jsPath.pause();
                   jsArr.pause();

            }
            if ( $el.find('.js-list-wrap').length) {
                var $listWrap = $el.find('.js-list-wrap') ;
                clearInterval(animArrow);
                $listWrap.find('.js-list-anim').removeClass('active');
                $listWrap.find('.js-list-anim').eq(0).addClass('active');
                $listWrap.find('.js-arrow').css({'top': $el.position().top, 'height':  $listWrap.find('.js-list-anim').eq(0).outerHeight()})
            }
        },
        afterLoad: function(origin, destination, direction){
          var $el = $('.section.active'),
                textBtn = $el.attr('data-btn-text'),
                $formActive = $el.attr('data-form') ;

            // btn show form on section active
            // $orderBtn.html(textBtn);
            // $('.js-form').hide();
            // $('#'+$formActive+'').show();
            // if ($el.attr('data-anchor') =="contacts") {
            //     $('#order').hide()
            // } else {
            //     $('#order').fadeIn(150)
            // }


            // start anim text
            if (!$body.is('.ios')) {
                $el.find('.js-word').textillate('in');
            }


            // animations
            if ($el.find('#car1').length && !$body.is('.ios')) {
                car1Animation.play();
            }
            if ($el.find('#car2').length && !$body.is('.ios')) {
                car2Animation.play();
            }
            if ($el.find('#arrowHour').length) {
                arrowHour.play();
            }
            if ($el.find('#arrowMinutes').length) {
                arrowMinutes.play();
            }
            if ($el.find('.sheet-1').length && !$body.is('.ios')) {
                sheet1.restart();
            }
            if ($el.find('.sheet-2').length && !$body.is('.ios')) {
                sheet2.restart();
            }
            if ($el.find('.sheet-3').length && !$body.is('.ios')) {
                sheet3.restart();
            }
            if ($el.find('#jsPath').length) {
               jsPath.restart();
               jsArr.restart();

            }

            if ( $el.find('.js-list-wrap').length) {
                    var $listWrap = $el.find('.js-list-wrap'),
                        $index = 1;
                    animArrow = setInterval(function(){
                        var $el = $listWrap.find('.js-list-anim').eq($index);
                        $listWrap.find('.js-list-anim').removeClass('active');
                        $el.addClass('active');
                        $listWrap.find('.js-arrow').css({'top': $el.position().top, 'height':  $el.outerHeight()})
                        $index++;
                        if ($index > $listWrap.find('.js-list-anim').length - 1) {
                            $index = 0;
                        }
                    },2500);
            }
            heightArrow();
        },
        afterRender: function(){
            heightArrow();
        },
        afterResize: function(width, height){},
        afterResponsive: function(isResponsive){},
        afterSlideLoad: function(section, origin, destination, direction){},
        onSlideLeave: function(section, origin, destination, direction){}
    });

        
        function heightForm() {
            $('.js-long-form').each(function() {
               var $el = $(this);;
                $el.css({'height':  window.innerHeight - $('.js-form-btn').outerHeight()});
            })
        }
        
        heightForm();

        $win.resize(function() {
            heightArrow();
            heightForm();
        })

        // animations
        function heightArrow() {
            $('.js-list-wrap').each(function() {
               var $listWrap = $(this),
                    $el = $listWrap.find('.js-list-anim.active');
                $listWrap.find('.js-arrow').css({'top': $el.position().top, 'height':  $el.outerHeight()});
            })
        }
        if ($('#car1').length && !$body.is('.ios')) {
            var car1Animation = anime({
                    targets: "#car1",
                    translateX: ['-30vw','55vw'],
                    duration: 6000,
                    loop: true,
                    easing: "linear"
                });
            car1Animation.pause(); 
        }
        if ($('#car2').length && !$body.is('.ios') ) {
            var car2Animation = anime({
                    targets: "#car2",
                    translateX: ['-40vw','40vw'],
                    duration: 7000,
                    loop: true,
                    easing: "linear"
                }); 
            car2Animation.pause();
        }  
        if ($('#arrowHour').length) {
            var arrowHour = anime({
                    targets: "#arrowHour",
                    rotate: ['0deg','360deg'],
                    duration: 180000,
                    loop: true,
                    easing: "linear"
                });
            arrowHour.pause(); 
        }
        if ($('#arrowMinutes').length) {
            var arrowMinutes = anime({
                    targets: "#arrowMinutes",
                    rotate: ['0deg','360deg'],
                    duration: 15000,
                    loop: true,
                    easing: "linear"
                });
            arrowMinutes.pause(); 
        }
        if ($('.sheet-1').length && !$body.is('.ios') ) {
            var sheet1 = anime({

                    targets: ".sheet-1",
                    translateY: ['-10%','0%'],
                    duration: 400,
                    easing: "linear",
                    complete: function(anim) {
                        sheet11 = anime({
                            targets: ".sheet-1",

                            translateX: ['0%','11%'],
                            translateY: ['0%','-5%'],
                            rotate: ['0deg','-26deg'],

                            duration: 400,
                            easing: "linear",
                            complete: function(anim) {
                                sheet12 = anime({
                                    targets: ".sheet-1",

                                    translateX: ['11%','9%'],
                                    translateY: ['-5%','-3%'],
                                    rotate: ['-26deg','-15deg'],

                                    duration: 5000,
                                    loop: true,
                                    easing: "linear",
                                    direction: 'alternate'
                                });
                            }
                        });
                    }
                });
            sheet1.pause();
        }  
        if ($('.sheet-2').length && !$body.is('.ios') ) {
            var sheet2 = anime({
                    targets: ".sheet-2",
                    translateY: ['-10%','0%'],
                    duration: 400,
                    easing: "linear",
                    complete: function(anim) {
                        sheet21 =anime({
                            targets: ".sheet-2",

                            translateX: ['0%','20%'],
                            translateY: ['0%','-2%'],
                            rotate: ['0deg','-13deg'],

                            duration: 400,
                            easing: "linear",
                            complete: function(anim) {
                                sheet22 = anime({
                                    targets: ".sheet-2",

                                    translateX: ['20%','2%'],
                                    translateY: ['-2%','-5%'],
                                    rotate: ['-13deg','8deg'],

                                    duration: 7000,
                                    loop: true,
                                    easing: "linear",
                                    direction: 'alternate'
                                });
                            }                                    
                        });
                    }
                }); 
            sheet2.pause();
        }  
        if ($('.sheet-3').length && !$body.is('.ios') ) {
            var sheet3 = anime({
                    targets: ".sheet-3",
                    translateY: ['-10%','0%'],
                    duration: 400,
                    easing: "linear",
                    complete: function(anim) {
                        sheet31 =anime({
                            targets: ".sheet-3",

                            translateX: ['0%','-5%'],
                            translateY: ['0%','-3%'],
                            rotate: ['0deg','21deg'],

                            duration: 400,
                            easing: "linear",
                            complete: function(anim) {
                                sheet32 =anime({
                                    targets: ".sheet-3",

                                    translateX: ['-5%','-4%'],
                                    translateY: ['-3%','-2%'],
                                    rotate: ['21deg','12deg'],

                                    duration: 8000,
                                    loop: true,
                                    easing: "linear",
                                    direction: 'alternate'
                                });
                            }
                        });
                    }
                }); 
            sheet3.pause();
        }  
        if ($('#jsPath').length  ) {

            var jsPath = anime({
              targets: "#jsPath",
              strokeDashoffset: [anime.setDashoffset, 0],
              easing: "easeOutQuad",
              duration: 5700,
              //direction: "both",
              loop: true
            });
            var jsArr = anime({
              targets: "#arrowLine",
              strokeDashoffset: [70, 70,0],
              easing: "easeOutQuad",
              duration: 1400,
              delay: 4300,
              //direction: "both",
              loop: true
            });

           jsPath.pause();
           jsArr.pause();
        }  

    // toggle menu
    $('.js-nav-menu').on('click',function(){
        $(this).toggleClass('is-active');
        $('#nav').toggleClass('open'); 
        if ($('#nav').is('.open') ) {
            //fullpage_api.setAutoScrolling(false);
           if ($('#questionnaire').is(':hidden')){
                $orderBtn.html($('#nav').attr('data-btn-text'));
            }
        } else {
           // fullpage_api.setAutoScrolling(true);
           if ($('#questionnaire').is(':hidden')){
                $orderBtn.html($('.section.active').attr('data-btn-text'));
           }
        }
        $body.toggleClass('open-header');
        return false;
    });

    // open form
    $('.js-form-btn').on('click',function(){
        $(this).closest('.js-form-wrap').toggleClass('open');
    });

    $('.js-open-form').on('click',function(){
        if ( $('.js-form-wrap').length) {
            $('.js-form-wrap').addClass('open');
        }
    });
    // open form


    // change sertificate
    $('.js-sertificate').on('click',function(){
        var $href = $(this).attr('data-href');
        $('#sertificateMain').attr('src', $href);
    });
    // change sertificate



    /* filters*/
    if ($('.js-item').length) {
        $('.js-item').addClass('item-hidden');
        $('.js-filter').each(function(){
            var $el = $(this);
                if ($el.is('.active')) {
                   var $elem = $(this).attr('data-val');
                   $('[data-title*='+$elem+']').removeClass('item-hidden'); 
                }
        });
    }
     

    $('.js-filter').on('click',function(){
        var $el = $(this),
            $elem = $el.attr('data-val');  
        if ($('.js-item').length && !$el.is('.active')) {
            $('.js-filter').removeClass('active');
            $el.addClass('active');   
            $('.js-item').addClass('item-hidden');
            $('[data-title*='+$elem+']').removeClass('item-hidden');
            var $count = Math.ceil($('.js-item:visible').length/4);
            if ($count > 3) {
                $count = 3;
            }
            $('.js-list').removeClass('list-1 list-2 list-3').addClass('list-'+ $count +'')
        }
        $(".js-gallery").slick('reinit');
        return false;
    });


    if ($('.js-item2').length) {
        $('.js-item2').addClass('item-hidden');
        $('.js-filter2').each(function(){
            var $el = $(this);
                if ($el.is('.active')) {
                   var $elem = $(this).attr('data-val');
                   $('[data-title*='+$elem+']').removeClass('item-hidden'); 
                }
        });
    }
     

    $('.js-filter2').on('click',function(){
        var $el = $(this),
            $elem = $el.attr('data-val');  
        if ($('.js-item2').length && !$el.is('.active')) {
            $('.js-filter2').removeClass('active');
            $el.addClass('active');   
            $('.js-item2').addClass('item-hidden');
            $('[data-title*='+$elem+']').removeClass('item-hidden');
            var $count = Math.ceil($('.js-item2:visible').length/4);
            if ($count > 3) {
                $count = 3;
            }
            $('.js-list').removeClass('list-1 list-2 list-3').addClass('list-'+ $count +'')
        }
        $(".js-gallery").slick('reinit');
        return false;
    });
    /* eof filters*/


    /* placeholder*/
    $(".form-control").each(function(){
        if ($(this).val() == "")        {
            $(this).closest('.box-field__input').removeClass("filled");
        }
        else {
            $(this).closest('.box-field__input').addClass("filled");
        }
    });
    $(".form-control").focus(function(){
        $(this).closest('.box-field__input').addClass("filled");
    });
    $(".form-control").blur(function(){
        if ($(this).val() == "")        {
            $(this).closest('.box-field__input').removeClass("filled");
        }
    });
    /* placeholder*/

    if ($('.js-gallery').length) {
        $('.js-gallery').slick({
            dots: false,
            infinite: true,
            speed: 500,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 5000,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<button class="slick-prev slick-arrow"><i class="icon-arrow-prev"></i></button>',
            nextArrow: '<button class="slick-next slick-arrow"><i class="icon-arrow-next"></button>',
            responsive: [{
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        });
            
    };

    if ($('.js-word').length && !$body.is('.ios')) {
        $('.js-word').textillate({
            type: 'word',
            autoStart: false,
            in: {
                effect: 'fadeInUpShort',
                delay: 15
            },
            out: {
                effect: 'fadeInDownShort',
                delay: 15
            }
        });
    }

    $('.js-menu-nav').on('click',function(){
        setTimeout(function() {
            $('.js-nav-menu').trigger('click');
        },200);
    });

    /* custom  scroll */
    if($('.js-scroll').length) {
        $(".js-scroll").mCustomScrollbar({
            axis:"y",
            margin: 0,
            theme:"dark-thin",
            autoExpandScrollbar:true,
            advanced:{autoExpandHorizontalScroll:true},
            mouseWheel:{ preventDefault: true }
        });
    };

    $('textarea').each(function () {
    }).on('input', function () {
      $(this).css('height','')
      this.style.height = (this.scrollHeight) + 2 + 'px';
    });

    $win.on('load', function() {
        $body.removeClass('loaded');


});


if ($('.fancybox').length) {
    $('.fancybox').fancybox({
        openEffect: 'fade',
        closeEffect: 'fade',
        padding: 0,
        margin: -20,
        fitToView: true,
        // beforeShow: function () {
        //     $('body').css({
        //         'overflow-y': 'hidden'
        //     });
        //     $('html').css({
        //         'overflow-y': 'hidden'
        //     });
        // },
        // afterClose: function () {
        //     $('body').css({
        //         'overflow-y': 'visible'
        //     });
        //     $('html').css({
        //         'overflow-y': 'visible'
        //     });
        // }
    });
};

$('.gifs').slick({
    dots: false,
    infinite: true,
    speed: 300,
    arrows: true,
    // autoplay: true,
    // autoplaySpeed: 10000,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: '<button class="slick-prev slick-arrow"><i class="icon-arrow-prev"></i></button>',
    nextArrow: '<button class="slick-next slick-arrow"><i class="icon-arrow-next"></button>',
    responsive: [{
        breakpoint: 700,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }]
});

$('.panel-heading').click(function () {
        $(this).toggleClass('in').next().slideToggle();
        $('.panel-heading').not(this).removeClass('in').next().slideUp();
  });



function redirectPage() {
    window.location = linkLocation;
}

$("a.transition").click(function(event){
    event.preventDefault();
    linkLocation = this.href;
    $("body").fadeOut(500, redirectPage);
  });



$('.filters__elem_popup').click(function(){
    $('.map_popup').fadeIn(500).delay(2000).fadeOut(500);
});

var vid = document.getElementById("video_waw_poup");

$('.partnership-section .video_waw a').click(function(){
    vid.play();
    $.fn.fullpage.setMouseWheelScrolling(false);
    $('body').addClass('overfl-hidden');
});

$('#video_pause').click(function(){
    vid.pause();
    $.fn.fullpage.setMouseWheelScrolling(true);
    $('body').removeClass('overfl-hidden');
});

$(document).click(function(event) {
    if (!$(event.target).closest("#video_waw_poup, #video_waw2").length) {
        vid.pause();
        $.fn.fullpage.setMouseWheelScrolling(true);
        $('body').removeClass('overfl-hidden');
    }
});

// var videoTouch1 =  document.getElementById('gif_video1');
// var videoTouch2 =  document.getElementById('gif_video2');
// var videoTouch3 =  document.getElementById('gif_video3');
// var videoTouch4 =  document.getElementById('gif_video4');
// var videoTouch5 =  document.getElementById('gif_video5');
// var videoTouch6 =  document.getElementById('gif_video6');
// var videoTouch7 =  document.getElementById('gif_video7');

// videoTouch1.addEventListener('touchstart', function(e){
//     this.play();
// });

// // videoTouch1.addEventListener('touchend', function(e){
// //     this.pause();
// // });

// videoTouch2.addEventListener('touchstart', function(e){
//     this.play();
// });

// // videoTouch2.addEventListener('touchend', function(e){
// //     this.pause();
// // });

// videoTouch3.addEventListener('touchstart', function(e){
//     this.play();
// });

// // videoTouch3.addEventListener('touchend', function(e){
// //     this.pause();
// // });

// videoTouch4.addEventListener('touchstart', function(e){
//     this.play();
// });

// // videoTouch4.addEventListener('touchend', function(e){
// //     this.pause();
// // });

// videoTouch5.addEventListener('touchstart', function(e){
//     this.play();
// });

// // videoTouch5.addEventListener('touchend', function(e){
// //     this.pause();
// // });

// videoTouch6.addEventListener('touchstart', function(e){
//     this.play();
// });

// // videoTouch6.addEventListener('touchend', function(e){
// //     this.pause();
// // });

// videoTouch7.addEventListener('touchstart', function(e){
//     this.play();
// });

// videoTouch7.addEventListener('touchend', function(e){
//     this.pause();
// });

// $('.gifs-desktop .gif__item video').mousemove(function() {
//     this.play();
// });

// $('.gifs-desktop .gif__item video').mouseleave(function() {
//     this.pause();
// });
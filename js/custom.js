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

var videoTouch1 =  document.getElementById('gif_video1');
var videoTouch2 =  document.getElementById('gif_video2');
var videoTouch3 =  document.getElementById('gif_video3');
var videoTouch4 =  document.getElementById('gif_video4');
var videoTouch5 =  document.getElementById('gif_video5');
var videoTouch6 =  document.getElementById('gif_video6');
var videoTouch7 =  document.getElementById('gif_video7');

videoTouch1.addEventListener('touchstart', function(e){
    this.play();
});

// videoTouch1.addEventListener('touchend', function(e){
//     this.pause();
// });

videoTouch2.addEventListener('touchstart', function(e){
    this.play();
});

// videoTouch2.addEventListener('touchend', function(e){
//     this.pause();
// });

videoTouch3.addEventListener('touchstart', function(e){
    this.play();
});

// videoTouch3.addEventListener('touchend', function(e){
//     this.pause();
// });

videoTouch4.addEventListener('touchstart', function(e){
    this.play();
});

// videoTouch4.addEventListener('touchend', function(e){
//     this.pause();
// });

videoTouch5.addEventListener('touchstart', function(e){
    this.play();
});

// videoTouch5.addEventListener('touchend', function(e){
//     this.pause();
// });

videoTouch6.addEventListener('touchstart', function(e){
    this.play();
});

// videoTouch6.addEventListener('touchend', function(e){
//     this.pause();
// });

videoTouch7.addEventListener('touchstart', function(e){
    this.play();
});

// videoTouch7.addEventListener('touchend', function(e){
//     this.pause();
// });
$(document).ready(function() {

    $('.loader').delay(2000).fadeOut('slow');

    $(".forms").submit(function() {
        var a = $(this);
        $.ajax({ type: "POST", url: "mail.php", data: a.serialize() }).done(function() {
            alert("Done!");
            setTimeout(function() { a.trigger("reset") }, 1E3)
        });
        return !1
    });
    $(".forms-exchange").submit(function() {
        var a = $(this);
        $.ajax({ type: "POST", url: "mail.php", data: a.serialize() }).done(function() {
            setTimeout(function() { a.trigger("reset") }, 1E3);
            var b = document.createElement("a");
            b.setAttribute("href", "https://yutland.com/countries/countries.rar");
            b.setAttribute("download",
                "countries.rar");
            b.click()
        });
        return !1
    });
});
$(".bank_active").click(function() {
    $(".filters_map .filters__elem").removeClass("active");
    $(".filters__bank").addClass("active");
    $(".countries__item").addClass("item-hidden");
    $(".countries__item_bank").removeClass("item-hidden")
});
$(".trade_active").click(function() {
    $(".filters_map .filters__elem").removeClass("active");
    $(".filters__trade").addClass("active");
    $(".countries__item").addClass("item-hidden");
    $(".countries__item_trade").removeClass("item-hidden")
});
$(".deo_active").click(function() {
    $(".blog-top .filters__elem").removeClass("active");
    $(".filters__deo").addClass("active");
    $(".blog.js-item2").addClass("item-hidden");
    $(".blog_deo").removeClass("item-hidden");
    $(".blog-list").slick("reinit")
});
$(".callback, .partnership-section .video_waw a, .pop-up").magnificPopup({ removalDelay: 350, mainClass: "mfp-fade" });
var $win = $(window),
    $body = $("body");
$("#fullpage").fullpage({ slidesNavigation: !1, menu: "#menu", css3: !0, scrollingSpeed: 500, fitToSectionDelay: 300, scrollBar: !1, easing: "easeInOutCubic", easingcss3: "ease", loopHorizontal: !1, continuousHorizontal: !0, controlArrows: !1, responsiveWidth: 1E3, responsiveHeight: 670, responsiveSlides: !0, scrollOverflow: !0, resetSliders: !0, fadingEffect: !0, sectionSelector: ".section", slideSelector: ".slide", lazyLoading: !0 });

function heightArrow() {
    $(".js-list-wrap").each(function() {
        var a = $(this),
            b = a.find(".js-list-anim.active");
        a.find(".js-arrow").css({ top: b.position().top, height: b.outerHeight() })
    })
}
$(".js-nav-menu").on("click", function() {
    $(this).toggleClass("is-active");
    $("#nav").toggleClass("open");
    $("#nav").is(".open") ? $("#questionnaire").is(":hidden") && $orderBtn.html($("#nav").attr("data-btn-text")) : $("#questionnaire").is(":hidden") && $orderBtn.html($(".section.active").attr("data-btn-text"));
    $body.toggleClass("open-header");
    return !1
});
$(".js-form-btn").on("click", function() { $(this).closest(".js-form-wrap").toggleClass("open") });
$(".js-open-form").on("click", function() { $(".js-form-wrap").length && $(".js-form-wrap").addClass("open") });
$(".js-item").length && ($(".js-item").addClass("item-hidden"), $(".js-filter").each(function() {
    if ($(this).is(".active")) {
        var a = $(this).attr("data-val");
        $("[data-title*=" + a + "]").removeClass("item-hidden")
    }
}));
$(".js-filter").on("click", function() {
    var a = $(this),
        b = a.attr("data-val");
    $(".js-item").length && !a.is(".active") && ($(".js-filter").removeClass("active"), a.addClass("active"), $(".js-item").addClass("item-hidden"), $("[data-title*=" + b + "]").removeClass("item-hidden"), a = Math.ceil($(".js-item:visible").length / 4), 3 < a && (a = 3), $(".js-list").removeClass("list-1 list-2 list-3").addClass("list-" + a));
    $(".js-gallery").slick("reinit");
    return !1
});
$(".js-item2").length && ($(".js-item2").addClass("item-hidden"), $(".js-filter2").each(function() {
    if ($(this).is(".active")) {
        var a = $(this).attr("data-val");
        $("[data-title*=" + a + "]").removeClass("item-hidden")
    }
}));
$(".js-filter2").on("click", function() {
    var a = $(this),
        b = a.attr("data-val");
    $(".js-item2").length && !a.is(".active") && ($(".js-filter2").removeClass("active"), a.addClass("active"), $(".js-item2").addClass("item-hidden"), $("[data-title*=" + b + "]").removeClass("item-hidden"), a = Math.ceil($(".js-item2:visible").length / 4), 3 < a && (a = 3), $(".js-list").removeClass("list-1 list-2 list-3").addClass("list-" + a));
    $(".js-gallery").slick("reinit");
    return !1
});
$(".js-gallery").length && $(".js-gallery").slick({ dots: !1, infinite: !0, speed: 500, arrows: !0, autoplay: !0, autoplaySpeed: 5E3, slidesToShow: 1, slidesToScroll: 1, lazyLoad: 'ondemand', prevArrow: '<button class="slick-prev slick-arrow"><i class="icon-arrow-prev"></i></button>', nextArrow: '<button class="slick-next slick-arrow"><i class="icon-arrow-next"></button>', responsive: [{ breakpoint: 700, settings: { slidesToShow: 1, slidesToScroll: 1 } }] });
$(".js-menu-nav").on("click", function() { setTimeout(function() { $(".js-nav-menu").trigger("click") }, 200) });
$(".gifs").slick({ dots: !1, infinite: !0, speed: 300, arrows: !0, slidesToShow: 3, slidesToScroll: 3, prevArrow: '<button class="slick-prev slick-arrow"><i class="icon-arrow-prev"></i></button>', nextArrow: '<button class="slick-next slick-arrow"><i class="icon-arrow-next"></button>', responsive: [{ breakpoint: 700, settings: { slidesToShow: 1, slidesToScroll: 1 } }] });
$(".panel-heading").click(function() {
    $(this).toggleClass("in").next().slideToggle();
    $(".panel-heading").not(this).removeClass("in").next().slideUp()
});

function redirectPage() { window.location = linkLocation } $("a.transition").click(function(a) {
    a.preventDefault();
    linkLocation = this.href;
    $("body").fadeOut(500, redirectPage)
});
$(".filters__elem_popup").click(function() { $(".map_popup").fadeIn(500).delay(2E3).fadeOut(500) });
var vid = document.getElementById("video_waw_poup");
$(".partnership-section .video_waw a").click(function() {
    vid.play();
    $.fn.fullpage.setMouseWheelScrolling(!1);
    $("body").addClass("overfl-hidden")
});
$("#video_pause").click(function() {
    vid.pause();
    $.fn.fullpage.setMouseWheelScrolling(!0);
    $("body").removeClass("overfl-hidden")
});
$(document).click(function(a) { $(a.target).closest("#video_waw_poup, #video_waw2").length || (vid.pause(), $.fn.fullpage.setMouseWheelScrolling(!0), $("body").removeClass("overfl-hidden")) });
$(".gifs-desktop .gif__item video").mousemove(function() { this.play() });
$(".gifs-desktop .gif__item video").mouseleave(function() { this.pause() });
$("ul.tabs__caption").on("click", "li:not(.active)", function() { $(this).addClass("active").siblings().removeClass("active").closest("div.tabs").find("div.tabs__content").removeClass("active").eq($(this).index()).addClass("active") });

var videoTouch1 = document.getElementById('gif_video1');
var videoTouch2 = document.getElementById('gif_video2');
var videoTouch3 = document.getElementById('gif_video3');
var videoTouch4 = document.getElementById('gif_video4');
var videoTouch5 = document.getElementById('gif_video5');
var videoTouch6 = document.getElementById('gif_video6');
var videoTouch7 = document.getElementById('gif_video7');

videoTouch1.addEventListener('touchstart', function(e) {
    this.play();
});

videoTouch2.addEventListener('touchstart', function(e) {
    this.play();
});

videoTouch3.addEventListener('touchstart', function(e) {
    this.play();
});

videoTouch4.addEventListener('touchstart', function(e) {
    this.play();
});

videoTouch5.addEventListener('touchstart', function(e) {
    this.play();
});

videoTouch6.addEventListener('touchstart', function(e) {
    this.play();
});

videoTouch7.addEventListener('touchstart', function(e) {
    this.play();
});;
const body = $('body')
const hamburger = $('.header__hamburger')
const sidebar = $('.header__sidebar')
const sidebarPlug = $('.header__sidebar-plug')
const toggleSidebar = $(
	'.header__hamburger, .header__sidebar-plug, .header__sidebar-close'
)

const header = $('.header')
const headerHeight = $('.header').height()
const headerWidth = $('.header').width()
const headerDropdown = $('.header__dropdown')
const headerDropdownPlug = $('.header__dropdown-plug')
const headerDropdownBtn = $('.header__dropdown-btn')

const reviewsSlider = $('.reviews__slider')
const reviewsSliderMobile = $('.reviews__slider-mobile')

const postsSlider = $('.posts__slider')

document.addEventListener('DOMContentLoaded', function () {
	// AOS
	AOS.init({
		duration: 800,
		once: true,
	})
	// eof

	// Magnific-popup
	$('.mfp').magnificPopup({
		removalDelay: 300,
		mainClass: 'mfp-fade',
		fixedContentPos: false,
		callbacks: {
			open: function () {
				body.css('overflow-y', 'hidden')
			},
			close: function () {
				body.css('overflow-y', 'auto')
			},
		},
	})
	// eof
})

// AOS refresh
$(window).on('load', function () {
	AOS.refresh()
	body.css('padding-top', headerHeight)
})

$(window).on('scroll', function () {
	AOS.refresh()
})
// eof

if ($('*').is('input[type="tel"]')) {
	$('input[type=tel]').inputmask({
		mask: '+99 (999) 999 99 99',
		showMaskOnHover: false,
	})
}

// Hamburger
toggleSidebar.on('click', function () {
	hamburger.toggleClass('active')
	sidebar.toggleClass('visible')
	sidebarPlug.fadeToggle()
	body.toggleClass('scroll_disabled')
})
// eof

// Dropdown header
headerDropdownBtn.on('mouseover', function () {
	headerDropdownBtn.addClass('active')
	headerDropdown.fadeIn(500).addClass('active')
	headerDropdownPlug.fadeIn()
	body.addClass('scroll_disabled')
})

header.on('mouseleave', function () {
	headerDropdownBtn.removeClass('active')
	headerDropdown.fadeOut(500).removeClass('active')
	headerDropdownPlug.fadeOut()
	body.removeClass('scroll_disabled')
})
// eof

// Marquee
if ($('*').is('.marquee')) {
	$('.marquee').slick({
		infinite: true,
		arrows: false,
		cssEase: 'linear',
		speed: 8000,
		autoplay: true,
		autoplaySpeed: 0,
		variableWidth: true,
	})
}
// eof

// Rec slider
if ($('*').is('.recommends__slider')) {
	$('.recommends__images').slick({
		infinite: true,
		arrows: false,
		speed: 1000,
		asNavFor: '.recommends__slider',
		touchMove: false,
	})

	$('.recommends__slider').slick({
		infinite: true,
		arrows: false,
		speed: 1000,
		dots: true,
		asNavFor: '.recommends__images',
		touchMove: false,
		autoplay: true,
		autoplaySpeed: 5000,
	})
}
// eof

// Input animation
$('input').each(function () {
	$(this).on('focus', function () {
		$(this).parent('.input-wrapper').addClass('active focus')
	})

	$(this).on('focusout', function () {
		$(this).parent('.input-wrapper').removeClass('focus')
	})

	$(this).on('blur', function () {
		if ($(this).val().length == 0) {
			$(this).parent('.input-wrapper').removeClass('active')
		}
	})

	if ($(this).val() != '') $(this).parent('.input-wrapper').addClass('active')
})
// eof

// Button scroll to top
$('.footer__scroll-top').on('click', function (event) {
	event.preventDefault()
	$('body, html').animate({ scrollTop: 0 }, 1000)
})
// eof

// Reviews slider
if ($('*').is('.reviews__slider')) {
	reviewsSlider.slick({
		speed: 1000,
		touchMove: false,
		arrows: false,
	})

	$('.reviews__nav .reviews__slider-prev').on('click', function () {
		reviewsSlider.slick('slickPrev')
	})

	$('.reviews__nav .reviews__slider-next').on('click', function () {
		reviewsSlider.slick('slickNext')
	})

	reviewsSlider.on('afterChange', function (event, slick) {
		$('.reviews__counter-current').html(slick.slickCurrentSlide() + 1)
		$('.reviews__counter-all').html(slick.slideCount)
	})

	reviewsSliderMobile.slick({
		speed: 500,
		touchMove: false,
		arrows: false,
		adaptiveHeight: true,
	})

	$('.reviews__nav-mobile .reviews__slider-prev').on('click', function () {
		reviewsSliderMobile.slick('slickPrev')
	})

	$('.reviews__nav-mobile .reviews__slider-next').on('click', function () {
		reviewsSliderMobile.slick('slickNext')
	})

	reviewsSliderMobile.on('afterChange', function (event, slick) {
		$('.reviews__counter-current').html(slick.slickCurrentSlide() + 1)
		$('.reviews__counter-all').html(slick.slideCount)
	})

	$('.review').on('click', function () {
		$(this).addClass('active')
		$('.review')
			.not(this)
			.removeClass('active')
			.removeClass('more-text')
			.find('.review__text-more')
			.removeClass('active')
	})

	$('.review__text-more').on('click', function () {
		$(this).toggleClass('active').closest('.review').toggleClass('more-text')
	})
}
// eof

// Fixed header
let didScroll
let lastScrollTop = 0
let delta = 5

$(window).on('scroll', function (event) {
	didScroll = true
})

setInterval(function () {
	if (didScroll) {
		hasScrolled()
		didScroll = false
	}
}, 250)

function hasScrolled() {
	let st = $(this).scrollTop()

	if (Math.abs(lastScrollTop - st) <= delta) return

	if (st > lastScrollTop && st > 0) {
		// Scroll Down
		header.removeClass('nav-down').addClass('nav-up').addClass('fixed')
	} else {
		// Scroll Up
		if (st + $(window).height() < $(document).height()) {
			header.removeClass('nav-up').addClass('nav-down')
		}
	}

	if ($(window).scrollTop() <= 5) {
		header.removeClass('fixed')
	}

	lastScrollTop = st
}
// eof

// Remove data-aos
if ($(window).width() < 992) {
	$('.p-course .main__container, .posts__nav').removeAttr('data-aos')
	$('.about__box, .post').removeAttr('data-aos-delay')
}
// eof

// Tabs
$('ul.portfolio__tabs-captions').on('click', 'li:not(.active)', function () {
	$(this)
		.addClass('active')
		.siblings()
		.removeClass('active')
		.closest('.portfolio__tabs')
		.find('.portfolio__tabs-content')
		.removeClass('active')
		.eq($(this).index())
		.addClass('active')

	$('.portfolio__slider').slick('setPosition')
})
// eof

// Portfolio slider
if ($('*').is('.portfolio__slider')) {
	$('.portfolio__slider').slick({
		slidesToShow: 3,
		arrows: false,
		speed: 500,
		touchMove: false,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1,
					dots: true,
				},
			},
		],
	})
}
// eof

// Posts slider
if ($('*').is('.posts__slider')) {
	postsSlider.slick({
		slidesToShow: 3,
		arrows: false,
		speed: 1000,
		touchMove: false,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1,
					adaptiveHeight: true,
					speed: 500,
				},
			},
		],
	})

	$('.posts__nav .posts__slider-prev').on('click', function () {
		postsSlider.slick('slickPrev')
	})

	$('.posts__nav .posts__slider-next').on('click', function () {
		postsSlider.slick('slickNext')
	})

	postsSlider.on('afterChange', function (event, slick) {
		$('.posts__counter-current').html(slick.slickCurrentSlide() + 1)
		$('.posts__counter-all').html(slick.slideCount)
	})
}
// eof

// CEO slider
if ($('*').is('.ceo__slider')) {
	$('.ceo__slider').slick({
		arrows: false,
		speed: 0,
		touchMove: false,
		autoplay: true,
		autoplaySpeed: 10000,
		dots: true,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					adaptiveHeight: true,
				},
			},
		],
	})

	$('.ceo__slider').on('afterChange', function (event, slick) {
		$('.ceo__slider')
			.find('.slick-dots li.slick-active')
			.prevAll()
			.addClass('before')
		$('.ceo__slider')
			.find('.slick-dots li.slick-active')
			.nextAll()
			.removeClass('before')
	})
}
// eof

// Catalog marquee
if ($('*').is('.catalog__slider')) {
	$('.catalog__slider').slick({
		infinite: true,
		arrows: false,
		cssEase: 'linear',
		speed: 10000,
		autoplay: true,
		autoplaySpeed: 0,
		variableWidth: true,
	})
}
// eof

// Catalog marquee
if ($('*').is('.gallery__slider')) {
	$('.gallery__slider').slick({
		infinite: true,
		arrows: false,
		cssEase: 'linear',
		speed: 15000,
		autoplay: true,
		autoplaySpeed: 0,
		variableWidth: true,
	})
}
// eof

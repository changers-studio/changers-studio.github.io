document.addEventListener('DOMContentLoaded', function () {
	// AOS
	AOS.init({
		duration: 1000,
		once: true,
	})
	// eof

	// Parallax
	const scroll = new LocomotiveScroll({
		el: document.querySelector('[data-scroll-container]'),
		smooth: true,
	})
	// eof
})

$(window).on('load', function () {
	AOS.refresh()
})

$(window).on('scroll', function () {
	AOS.refresh()
})

// Работа гамбургера
const body = $('body')
const hamburger = $('.header__hamburger')
const sidebar = $('.header__sidebar')
const sidebarPlug = $('.header__sidebar-plug')
const toggleSidebar = $(
	'.header__hamburger, .header__sidebar-plug, .header__sidebar-close'
)

toggleSidebar.on('click', function () {
	hamburger.toggleClass('active')
	sidebar.toggleClass('visible')
	sidebarPlug.fadeToggle()
	body.toggleClass('scroll_disabled')
})
// eof

// Выпадающий блок в шапке
const headerDropdown = $('.header__dropdown')
const headerDropdownPlug = $('.header__dropdown-plug')
const headerDropdownBtn = $('.header__dropdown-btn')

headerDropdownBtn.on('mouseover', function () {
	headerDropdownBtn.addClass('active')
	headerDropdown.fadeIn(500).addClass('active')
	headerDropdownPlug.fadeIn()
})

$('.header, .header__dropdown').on('mouseleave', function () {
	headerDropdownBtn.removeClass('active')
	headerDropdown.fadeOut(500).removeClass('active')
	headerDropdownPlug.fadeOut()
})
// eof

// Бегущая строка
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

// Бегущая строка
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

// Передвижение заголовка в поле ввода
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

// Кнопка скролла в начало
$('.footer__scroll-top').on('click', function (event) {
	event.preventDefault()
	$('body, html').animate({ scrollTop: 0 }, 1000)
})
// eof

// Слайдер отзывов
if ($('*').is('.reviews__slider')) {
	const reviewsSlider = $('.reviews__slider')
	const reviewsSliderMobile = $('.reviews__slider-mobile')

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

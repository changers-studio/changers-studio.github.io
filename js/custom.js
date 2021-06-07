jQuery(function () {
	AOS.init({
		duration: 1000,
		once: true,
	})

	$(document).on('load', function () {
		AOS.refreshHard()
	})

	$(window).on('scroll', function () {
		AOS.refresh()
	})

	$('.magnific-popup').magnificPopup()
})

$('.header__hamburger').on('click', function () {
	$(this).toggleClass('is-active')
	$('.header__dropdown').toggleClass('_visible')
})

$('.header__menu a').on('click', function () {
	$('.header__hamburger').removeClass('is-active')
	$('.header__dropdown').removeClass('_visible')
})

$('body').on('click', '.link-move', function (event) {
	event.preventDefault()
	var id = $(this).attr('href'),
		top = $(id).offset().top
	$('body,html').animate({ scrollTop: top - 50 }, 1500)
})

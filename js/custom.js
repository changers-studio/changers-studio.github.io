jQuery(function () {
	AOS.init({
		duration: 1000,
		once: true,
	})

	document.addEventListener('load', AOS.refresh())

	window.addEventListener('scroll', AOS.refresh())
})

// Hamburger menu
let body = $('body')
let hamburger = $('.header__hamburger')
let sidebar = $('.header__menu')
let plug = $('.header__plug')
let toggleSidebar = $('.header__hamburger, .header__plug, .header__menu-close')

toggleSidebar.on('click', function () {
	hamburger.toggleClass('_active')
	sidebar.toggleClass('_visible')
	plug.toggleClass('_visible')
	body.toggleClass('scroll_disable')
})

// Sliders
if ($('*').is('.industries__slider')) {
	$('.industries__slider').slick({
		infinite: false,
		arrows: false,
		touchMove: false,
		variableWidth: true,
		speed: 500,
		autoplay: true,
		autoplaySpeed: 5000,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					variableWidth: false,
				},
			},
		],
	})
}

if ($('*').is('.slider__container')) {
	$('.slider__container').slick({
		infinite: false,
		touchMove: false,
		speed: 500,
		slidesToShow: 3,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	})
}

if ($('*').is('.team-slider')) {
	$('.team-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		infinite: true,
		touchMove: false,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					centerMode: true,
					variableWidth: true,
					arrows: false,
					slidesToShow: 3,
					autoplay: true,
					autoplaySpeed: 3000,
				},
			},
		],
	})
}

if ($('*').is('.ranks__slider')) {
	$('.ranks__slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: false,
		infinite: true,
		touchMove: false,
		responsive: [
			{
				breakpoint: 1430,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1,
					variableWidth: true,
					centerMode: true,
				},
			},
		],
	})
}

$('body').on('click', '.link_move', function (event) {
	event.preventDefault()
	var id = $(this).attr('href'),
		top = $(id).offset().top
	$('body,html').animate({ scrollTop: top }, 1500)
})

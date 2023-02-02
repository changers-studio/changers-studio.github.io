// AOS
AOS.init({
	once: true,
	duration: 800,
})

$(window).on('scroll', function () {
	AOS.refresh()
})
//

// Portfolio show more
$('.portfolio__btn').on('click', function () {
	$(this).fadeOut()
	$('.portfolio__container-col._hidden-mobile').slideToggle()
})

$('.portfolio__btn-circle').on('click', function () {
	$(this).fadeOut()
	$('.portfolio__item._hidden').slideDown()
})
//

// Liquid slider
if ($('*').is('.liquid-slider')) {
	$('.liquid-slider').slick({
		infinite: true,
		slidesToShow: 10,
		arrows: false,
		centerMode: true,
		cssEase: 'linear',
		initialSlide: 10,
		speed: 1500,
		autoplay: true,
		autoplaySpeed: 0,
		variableWidth: true,
		swipe: false,
		touchMove: false,
		pauseOnHover: false,
		pauseOnFocus: false,
	})
}
//

if ($('*').is('.unique__dropdown-slider')) {
	$('.unique__dropdown-slider').slick({
		infinite: false,
		initialSlide: 1,
		centerMode: true,
		speed: 800,
		variableWidth: true,
		touchMove: false,
		dots: true,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					arrows: false
				}
			},
		]
	})
}
//

// Tabs
$('.tabs__captions').on('click', 'li:not(.active)', function () {
	$(this)
		.addClass('active')
		.siblings()
		.removeClass('active')
		.closest('div.tabs')
		.find('.tabs__content')
		.removeClass('active')
		.eq($(this).index())
		.addClass('active')

	$('.unique__dropdown-slider').slick('setPosition')
})
//

// Dropdown
$('.unique__btn-toggle').on('click', function () {
	$(this).toggleClass('active')
	$('.unique__dropdown').slideToggle()
	$('.unique__dropdown-slider').slick('setPosition')
})
//

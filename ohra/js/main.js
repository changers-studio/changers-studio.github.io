// Add classes to footer dropdown heading
const mobileDropdown = () => {
	if ($(this).width() <= 1000) {
		$('.footer__heading').addClass('dropdown-heading')
	} else {
		$('.footer__heading').removeClass('dropdown-heading')
	}
}
$(window).bind('resize', mobileDropdown()).trigger('resize')
//

// Hamburger
$('.header__hamburger').on('click', function () {
	$('.header-desktop').toggleClass('active')
	$('body').toggleClass('scroll-disabled')
	$('.catalog__filter, .catalog__filter-dropdown').removeClass('active')
})
//

// Dropdown
$('.dropdown-heading').on('click', function () {
	$(this).toggleClass('active').next().slideToggle()
	$('.dropdown-heading').not(this).removeClass('active').next().slideUp()
})

$(document).on('click', (e) => {
	const dropdownHead = $('.dropdown-heading')
	const dropdownBody = $('.dropdown-heading').next()

	if (
		!dropdownHead.is(e.target) &&
		dropdownHead.has(e.target).length === 0 &&
		!dropdownBody.is(e.target) &&
		dropdownBody.has(e.target).length === 0
	) {
		dropdownBody.slideUp().prev().removeClass('active')
	}
})
//

// Tabs
$('ul.tabs__captions').on('click', 'li:not(.active)', function () {
	$(this)
		.addClass('active')
		.siblings()
		.removeClass('active')
		.closest('div.tabs')
		.find('div.tabs__content')
		.removeClass('active')
		.eq($(this).index())
		.addClass('active')
})
//

// Categpries slider
$('.categories__slider').slick({
	infinite: true,
	touchMove: false,
	slidesToShow: 6,
	responsive: [
		{
			breakpoint: 1430,
			settings: {
				slidesToShow: 4,
			},
		},
		{
			breakpoint: 1000,
			settings: {
				slidesToShow: 1,
				variableWidth: true,
				arrows: false,
			},
		},
	],
})
//

// Add to favorites
$('.fav-toggle').on('click', function () {
	$(this).toggleClass('active')
})
//

// Product preview slider
if ($('*').is('.product__slider')) {
	const productSlider = $('.product__slider')

	productSlider.slick({
		infinite: true,
		touchMove: false,
		arrows: false,
		autoplay: false,
		autoplaySpeed: 1000,
		dots: true,
		responsive: [
			{
				breakpoint: 1000,
				settings: {
					dots: false,
				},
			},
		],
	})

	productSlider.mouseover(function () {
		$(this).slick('play')
	})

	productSlider.mouseout(function () {
		$(this).slick('pause')
	})
}
//

// Add to basket
$('.product__btn-basket').on('click', function () {
	$(this).toggleClass('active')
})
//

// Catalog filter
$('.catalog__filter-heading').on('click', function () {
	$(this).toggleClass('active').next().toggleClass('active')
	$('.catalog__filter-heading')
		.not(this)
		.removeClass('active')
		.next()
		.removeClass('active')
})

if ($(window).width() > 1000) {
	$(document).on('click', (e) => {
		const filterHead = $('.catalog__filter-heading')
		const filterBody = $('.catalog__filter-heading').next()

		if (
			!filterHead.is(e.target) &&
			filterHead.has(e.target).length === 0 &&
			!filterBody.is(e.target) &&
			filterBody.has(e.target).length === 0
		) {
			filterBody.removeClass('active').prev().removeClass('active')
		}
	})
}

$('.catalog__mobile-filter').on('click', function () {
	$('.catalog__filter').addClass('active')
})

$('.catalog__filter-close').on('click', function () {
	$('.catalog__filter, .catalog__filter-dropdown').removeClass('active')
})

$('.catalog__mobile-sort').on('click', function () {
	$('.catalog__filter, .filter-sort__dropdown').addClass('active')
})
//

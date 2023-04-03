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
})
//

// Dropdown
$('.dropdown-heading').on('click', function () {
	$(this).toggleClass('active').next().slideToggle()
	$('.dropdown-heading').not(this).removeClass('active').next().slideUp()
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

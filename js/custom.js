jQuery(function () {
	$('.reviews__slider').slick({
		infinite: true,
		slidesToShow: 3,
		SlidesToScroll: 1,
		speed: 800,
		touchMove: false,
		responsive: [
			{
				breakpoint: 1240,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1,
				},
			},
			{
				breakpoint: 480,
				settings: {
					centerMode: true,
					variableWidth: true,
					arrows: false,
				},
			},
		],
	})
})

var body = $('body')
var sidebar = $('.header__sidebar')
var plug = $('.header__sidebar-plug')
var toggleSidebar = $(
	'.header__hamburger, .header__sidebar-plug, .header__sidebar-close'
)

toggleSidebar.on('click', function () {
	sidebar.toggleClass('_visible')
	plug.toggleClass('_visible')
	body.toggleClass('scroll_disable')
})

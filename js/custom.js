jQuery(function () {
	// code
})

$('.dropdown__heading').on('click', function () {
	$(this).toggleClass('_active').next().slideToggle()
	$('.dropdown__heading').not(this).removeClass('_active').next().slideUp()
})

let body = $('body')
let hamburger = $('.header .hamburger')
let sidebar = $('.header .sidebar')
let plug = $('.header .sidebar__plug')
let toggleSidebar = $(
	'.header .hamburger, .header .sidebar__plug, .header .sidebar__close'
)

toggleSidebar.on('click', function () {
	hamburger.toggleClass('_active')
	sidebar.toggleClass('_visible')
	plug.toggleClass('_visible')
	body.toggleClass('scroll_disable')
})

if ($('.partners__slider').length > 0) {
	$('.partners__slider').slick({
		infinite: true,
		slidesToShow: 4,
		SlidesToScroll: 1,
		speed: 1000,
		touchMove: false,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
				},
			},
		],
	})
}

$('ul.tabs__caption').on('click', 'li:not(._active)', function () {
	$(this)
		.addClass('_active')
		.siblings()
		.removeClass('_active')
		.closest('div.tabs')
		.find('div.tabs__content')
		.removeClass('_active')
		.eq($(this).index())
		.addClass('_active')
})

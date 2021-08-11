jQuery(function () {
	$('.magnific-popup').magnificPopup()
})

// Menu
$('.sidebarActivator').on('click', function () {
	$('.sidebar').fadeToggle('slow')
})

// END

$('ul.tabs__caption').on('click', 'li:not(.active)', function () {
	$(this)
		.addClass('active')
		.siblings()
		.removeClass('active')
		.closest('div.tabs')
		.find('div.tabs__content')
		.fadeOut(300)
		.eq($(this).index())
		.delay(300)
		.fadeIn(300)
})

$('.sidebar__about-heading').on('click', function () {
	$('.sidebar__about-content, .sidebar__services-content').toggleClass('active')
})

$('.sidebar__services-heading').on('click', function () {
	$('.sidebar__services-content, .sidebar__about-content').toggleClass('active')
})

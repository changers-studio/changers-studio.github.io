jQuery(function () {
	$('.magnific-popup').magnificPopup({
		removalDelay: 350,
		mainClass: 'mfp-fade',
	})
})

$('.sidebarActivator').on('click', function () {
	$('.sidebar').fadeToggle('slow')
	$('body').toggleClass('scroll_disable')
})

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
	$('.sidebar__about-content').addClass('active')
	$('.sidebar__services-content').removeClass('active')
})

$('.sidebar__services-heading').on('click', function () {
	$('.sidebar__services-content').addClass('active')
	$('.sidebar__about-content').removeClass('active')
})

$('.lang__heading').on('click', function () {
	$(this).toggleClass('_active').next().slideToggle()
})

$('form').on('submit', function () {
	var th = $(this)
	$.ajax({
		type: 'POST',
		url: 'mail.php',
		data: th.serialize(),
	}).done(function () {
		th.trigger('reset')
	})
	return false
})

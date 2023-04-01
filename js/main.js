// Input mask
if ($('*').is('.input-phone')) {
	$('.input-phone').inputmask({
		mask: '(999) 99 99 999',
		showMaskOnHover: false,
		placeholder: '',
	})
}
//

// Hamburger
if ($(window).width() <= 992) {
	$('.toggleSidebar').on('click', function () {
		$('.header, .header__hamburger, .header__menu').toggleClass('active')
	})
}
//

// Move links
$('body').on('click', '.trigger-move', function (event) {
	event.preventDefault()

	var id = $(this).attr('href'),
		top = $(id).offset().top,
		headerHeight = $('.header').innerHeight()

	$('body,html').animate({ scrollTop: top - headerHeight }, 1000)
})
//

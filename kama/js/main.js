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

// Move links
$('body').on('click', '.header__menu-item', function (event) {
	event.preventDefault()
	var id = $(this).attr('href'),
		top = $(id).offset().top
	$('body,html').animate({ scrollTop: top }, 1500)
})
//

// Video
const videoOptions = {
	muted: true,
	volume: 0,
	autoplay: true,
	loop: true,
}

const player = videojs('video-js', videoOptions)

$(window).on('load', function () {
	if ($('.main__video').is(':in-viewport')) {
		player.play()
	} else {
		player.pause()
	}
})
//

// Hamburger
$('.toggleMenu').on('click', function () {
	$('.header__menu').toggleClass('active')
	$('body').toggleClass('scroll_disabled')
})
//

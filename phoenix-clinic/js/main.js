document.addEventListener('DOMContentLoaded', function () {})

// AOS
AOS.init({
	duration: 1000,
	once: true,
})

$(window).on('load scroll', function () {
	AOS.refresh()
})
//

// Remove aos delay on mobile
if ($(window).width() <= 960) {
	$('[data-aos-delay]').removeAttr('data-aos-delay')
}
//

// Mfp
// $('.mfp').magnificPopup({
// 	removalDelay: 300,
// 	mainClass: 'mfp-fade',
// 	fixedContentPos: false,
// 	callbacks: {
// 		open: function () {
// 			body.css('overflow-y', 'hidden')
// 		},
// 		close: function () {
// 			body.css('overflow-y', 'auto')
// 		},
// 	},
// })
//

// Phone musk
// if ($('*').is('input[type="tel"]')) {
// 	$('input[type=tel]').inputmask({
// 		mask: '+99 (999) 999 99 99',
// 		showMaskOnHover: false,
// 	})
// }
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

// Hamburger
$('.toggleSidebar').on('click', function () {
	$('.header__hamburger').fadeToggle()
	$('body').toggleClass('scroll-disabled')
})
//

// Header change bg
$(window).on('scroll load', function () {
	if ($(window).scrollTop() > $('.main').height()) {
		$('.header').addClass('active')
	} else {
		$('.header').removeClass('active')
	}
})
//

// Footer scroll to top
$('.footer__scroll-top').on('click', function () {
	$('html, body').animate({ scrollTop: 0 }, 2000)
})
//

// Remove nav buttons when footer
$(window).on('scroll load', function () {
	if ($(window).scrollTop() > $('.footer').offset().top - $('.footer').height()) {
		$('.main__btns').fadeOut()
	} else {
		$('.main__btns').fadeIn()
	}
})
//

// Reviews
$('.reviews__slider').slick({
	infinite: false,
	slidesToShow: 2,
	speed: 800,
	autoplay: true,
	autoplaySpeed: 3000,
	prevArrow: $('.reviews__slider-prev'),
	nextArrow: $('.reviews__slider-next'),
	responsive: [
		{
			breakpoint: 960,
			settings: {
				slidesToShow: 1,
			},
		},
	],
})
//

// Team about
$('.team-item__image').on('click', function () {
	$(this).closest('.team-item').find('.team-item__btn').toggleClass('active')
	$(this).closest('.team-item').siblings().find('.team-item__btn').removeClass('active')

	$(this).parent().find('.team-item__about').fadeToggle()
	$(this).closest('.team-item').siblings().find('.team-item__about').fadeOut()
})

$(document).on('click', (e) => {
	const aboutBox = $('.team-item__image')

	if (!aboutBox.is(e.target) && aboutBox.has(e.target).length === 0) {
		$('.team-item__btn').removeClass('active')
		$('.team-item__about').fadeOut()
	}
})
//

// Video
$('.video__btn-play').on('click', function () {
	$('.video').trigger('play')
	$(this).fadeOut()
	$('.video__btn-pause').fadeIn()
})

$('.video__btn-pause').on('click', function () {
	$('.video').trigger('pause')
	$(this).fadeOut()
	$('.video__btn-play').fadeIn()
})
//

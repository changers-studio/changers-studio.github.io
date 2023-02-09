// Preloader
//

// AOS
AOS.init({
	once: true,
	duration: 800,
})

$(window).on('scroll', function () {
	AOS.refresh()
})
//

// Hamburger
if ($(window).width() <= 992) {
	$('.toggleSidebar').on('click', function () {
		$('.header__nav').toggleClass('active')
		$('body').toggleClass('scroll_disabled')
	})
}
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
					arrows: false,
				},
			},
		],
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

// Video
if ($('*').is('video')) {
	const videoOptions = {
		muted: true,
		volume: 0,
		autoplay: true,
		loop: true,
	}

	if ($('*').is('#video1')) {
		const player1 = videojs('video1', videoOptions)

		document.addEventListener('DOMContentLoaded', () => {
			player1.play()
		})
	}

	if ($('*').is('#video2')) {
		const player2 = videojs('video2', videoOptions)

		document.addEventListener('DOMContentLoaded', () => {
			player2.play()
		})
	}

	if ($('*').is('#video3')) {
		const player3 = videojs('video3', videoOptions)

		document.addEventListener('DOMContentLoaded', () => {
			player3.play()
		})
	}

	if ($('*').is('#video4')) {
		const player4 = videojs('video4', videoOptions)

		document.addEventListener('DOMContentLoaded', () => {
			player4.play()
		})
	}

	if ($('*').is('#video5')) {
		const player5 = videojs('video5', videoOptions)

		document.addEventListener('DOMContentLoaded', () => {
			player5.play()
		})
	}

	if ($('*').is('#video6')) {
		const player6 = videojs('video6', videoOptions)

		document.addEventListener('DOMContentLoaded', () => {
			player6.play()
		})
	}

	if ($('*').is('#video7')) {
		const player7 = videojs('video7', videoOptions)

		document.addEventListener('DOMContentLoaded', () => {
			player7.play()
		})
	}

	if ($('*').is('#portfolio1')) {
		const portfolio1 = videojs('portfolio1', videoOptions)

		document.addEventListener('DOMContentLoaded', () => {
			portfolio1.play()
		})
	}

	if ($('*').is('#portfolio2')) {
		const portfolio2 = videojs('portfolio2', videoOptions)

		document.addEventListener('DOMContentLoaded', () => {
			portfolio2.play()
		})
	}

	if ($('*').is('#mainVideo')) {
		const mainVideo = videojs('mainVideo', videoOptions)

		document.addEventListener('DOMContentLoaded', () => {
			mainVideo.play()
		})
	}
}
//

// Input mask
if ($('*').is('.input-phone')) {
	$('.input-phone').inputmask({
		mask: '(999) 99 99 999',
		showMaskOnHover: false,
		placeholder: '',
	})
}
//

// Magnific-popup
if ($('*').is('.mfp')) {
	$('.mfp').magnificPopup({
		removalDelay: 300,
		mainClass: 'mfp-fade',
		fixedContentPos: false,
		callbacks: {
			open: function () {
				$('body').css('overflow-y', 'hidden')
			},
			close: function () {
				$('body').css('overflow-y', 'auto')
			},
		},
	})
}

$('.popup__close').on('click', function () {
	$.magnificPopup.close()
})
//

// Form submit
$('.popup__form').submit(function () {
	var th = $(this)
	$.ajax({
		type: 'POST',
		url: 'mail.php',
		data: th.serialize(),
	}).done(function () {
		th.find('.popup__form-success').fadeIn()

		setTimeout(() => {
			th.find('.popup__form-success').fadeOut()
			$.magnificPopup.close()
		}, 3000)

		th.trigger('reset')
		th.find('input').blur()
	})

	return false
})
//

// Move links
$('body').on('click', '.trigger-move', function (event) {
	event.preventDefault()
	var id = $(this).attr('href'),
		top = $(id).offset().top
	$('body,html').animate({ scrollTop: top - 100 }, 1500)
})
//

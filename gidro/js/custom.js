$(function () {
	$('.magnific-popup').magnificPopup({
		fixedContentPos: false,
		callbacks: {
			open: function () {
				$('body').addClass('scroll_disabled')
			},
			close: function () {
				$('body').removeClass('scroll_disabled')
			},
		},
	})
	let header = $('.header')
	let hederHeight = header.height() // вычисляем высоту шапки

	$(window).scroll(function () {
		if ($(this).scrollTop() > 1) {
			header.addClass('header_fixed')
			$('body').css({
				paddingTop: hederHeight + 'px', // делаем отступ у body, равный высоте шапки
			})
		} else {
			header.removeClass('header_fixed')
			$('body').css({
				paddingTop: 0, // удаляю отступ у body, равный высоте шапки
			})
		}
	})

	function ibg() {
		let ibg = document.querySelectorAll('.ibg')
		for (var i = 0; i < ibg.length; i++) {
			if (ibg[i].querySelector('img')) {
				ibg[i].style.backgroundImage =
					'url(' + ibg[i].querySelector('img').getAttribute('src') + ')'
			}
		}
	}
	ibg()

	if ($(window).width() < 992) {
		$('.hamburger-menu__dropdown-heading').on('click', function () {
			$(this).toggleClass('active').next().slideToggle()
			$('.hamburger-menu__dropdown-heading')
				.not(this)
				.removeClass('active')
				.next()
				.slideUp()
		})
	}

	const swiper = new Swiper('.slaider__body', {
		loop: true,
		//slidesPerView: 3,
		spaceBetween: 30,

		navigation: {
			nextEl: '.reght-buttons__button-next',
			prevEl: '.reght-buttons__button-prev',
		},
		pagination: {
			el: '.swiper-pagination',
			type: 'fraction',
		},

		breakpoints: {
			320: {
				slidesPerView: 1,
			},
			992: {
				slidesPerView: 3,
			},
		},
	})

	$('.right-header__minu-icon, .hamburger-menu__close').on('click', function () {
		$('.hamburger-menu').fadeToggle()
		$('body').toggleClass('scroll_disabled')
	})
})

$('.labgvidg-header__text').on('click', function () {
	$(this).toggleClass('active').next().slideToggle()
})

$('.top-header__colour-heading').on('click', function () {
	$('.top-header__colour-dropdown').slideToggle()
})

$('body').on('click', '.link_move', function (event) {
	event.preventDefault()
	var id = $(this).attr('href'),
		top = $(id).offset().top
	$('body,html').animate({ scrollTop: top }, 1500)
})

///
///
///

// Карта стран

// Kz
$('.kz-link').on('mouseover', function () {
	$('.projects__info.kz').show()
	$('.projects__map a.kz').addClass('active')
})

$('.kz-link').on('mouseleave', function () {
	$('.projects__info.kz').hide()
	$('.projects__map a.kz').removeClass('active')
})

// Tj
$('.tj-link').on('mouseover', function () {
	$('.projects__info.tj').show()
	$('.projects__map a.tj').addClass('active')
})

$('.tj-link').on('mouseleave', function () {
	$('.projects__info.tj').hide()
	$('.projects__map a.tj').removeClass('active')
})

// Uz
$('.uz-link').on('mouseover', function () {
	$('.projects__info.uz').show()
	$('.projects__map a.uz').addClass('active')
})

$('.uz-link').on('mouseleave', function () {
	$('.projects__info.uz').hide()
	$('.projects__map a.uz').removeClass('active')
})

// Tk
$('.tk-link').on('mouseover', function () {
	$('.projects__info.tk').show()
	$('.projects__map a.tk').addClass('active')
})

$('.tk-link').on('mouseleave', function () {
	$('.projects__info.tk').hide()
	$('.projects__map a.tk').removeClass('active')
})

// Af
$('.af-link').on('mouseover', function () {
	$('.projects__info.af').show()
	$('.projects__map a.af').addClass('active')
})

$('.af-link').on('mouseleave', function () {
	$('.projects__info.af').hide()
	$('.projects__map a.af').removeClass('active')
})

// Krgz
$('.krgz-link').on('mouseover', function () {
	$('.projects__info.krgz').show()
	$('.projects__map a.krgz').addClass('active')
})

$('.krgz-link').on('mouseleave', function () {
	$('.projects__info.krgz').hide()
	$('.projects__map a.krgz').removeClass('active')
})

// Viet
$('.viet-link').on('mouseover', function () {
	$('.projects__info.viet').show()
	$('.projects__map a.viet').addClass('active')
})

$('.viet-link').on('mouseleave', function () {
	$('.projects__info.viet').hide()
	$('.projects__map a.viet').removeClass('active')
})
// eof

$('.custom-scroll').mCustomScrollbar()

if ($(window).width() < 992) {
	$('.custom-scroll').mCustomScrollbar('destroy')
	$('.custom-scroll').css('overflow-y', 'auto')
}

$('.popup__list-item').hover(function () {
	$(this).closest('.popup').find('.popup__map-info').hide().eq($(this).index()).show()
})

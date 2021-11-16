$(function () {
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

	$('a.kz, .projects__info.kz').on('mouseover', function (event) {
		$('.projects__info.kz').show()
		$('a.kz').hover()
	})

	$('a.kz, .projects__info.kz').on('mouseleave', function (event) {
		$('.projects__info.kz').hide()
	})
})

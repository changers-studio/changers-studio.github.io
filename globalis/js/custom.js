$(function () {
	// Маска номера телефона
	if ($('*').is('input[type="tel"]')) {
		$('input[type=tel]').inputmask({
			mask: '+38 (099) 999 99 99',
			placeholder: '+38 (0__) ___-__-__',
		})
	}
	// eof

	// Форма обратной связи
	$('form').on('submit', function () {
		var th = $(this)
		$.ajax({
			type: 'POST',
			url: 'mail.php',
			data: th.serialize(),
		}).done(function () {
			$(th).closest('.form-success').hide().fadeIn()

			setTimeout(function () {
				$(th).closest('.form-success').fadeOut()
				th.trigger('reset')
			}, 3000)
		})
		return false
	})
	// eof

	// Magnific-popup init
	$('.magnific-popup').magnificPopup({
		removalDelay: 350,
		mainClass: 'mfp-fade',
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
	// eof
})

// Слайдер сервисов на главной странице
var servicesSlider = new Swiper('.services__slider', {
	spaceBetween: 30,
	slidesPerView: 'auto',
	speed: 1500,
	observer: true,
	observeParents: true,
	autoplay: {
		delay: 5000,
	},
	pagination: {
		el: '.swiper-pagination',
		type: 'progressbar',
	},
})
// eof

// Слайдер сервисов на главной странице
var blogSlider = new Swiper('.blog__slider', {
	speed: 1500,
	breakpointsBase: 'container',
	breakpoints: {
		992: {
			spaceBetween: 30,
			slidesPerView: 'auto',
		},
		0: {
			slidesPerView: 1,
			spaceBetween: 20,
		},
	},
	autoplay: {
		delay: 8000,
	},
	pagination: {
		el: '.swiper-pagination',
		type: 'progressbar',
	},
})
// eof

// Слайдер документов на странице лицензии
var docsSlider = new Swiper('.licenses-docs__slider', {
	speed: 1500,
	breakpointsBase: 'container',
	slidesPerView: 'auto',
	breakpoints: {
		992: {
			spaceBetween: 30,
		},
		0: {
			spaceBetween: 20,
		},
	},
	autoplay: {
		delay: 8000,
	},
	pagination: {
		el: '.swiper-pagination',
		type: 'progressbar',
	},
})
// eof

// Табы
$('ul.tabs__caption').on('click', 'li:not(.active)', function () {
	$(this)
		.addClass('active')
		.siblings()
		.removeClass('active')
		.closest('.tabs')
		.find('.tabs__content')
		.hide()
		.eq($(this).index())
		.fadeIn(1000)
})
// eof

// Табы гамбургер меню
$('.hamburger-menu__caption-item-1').on('click', function () {
	$(this).addClass('active').siblings().removeClass('active')
	$('.hamburger-menu__content').hide()
	$('.hamburger-menu__content-1').slideDown(500)
})

$('.hamburger-menu__caption-item-2').on('click', function () {
	$(this).addClass('active').siblings().removeClass('active')
	$('.hamburger-menu__content').hide()
	$('.hamburger-menu__content-2').slideDown(500)
})

$('.hamburger-menu__caption-item-3').on('click', function () {
	$(this).addClass('active').siblings().removeClass('active')
	$('.hamburger-menu__content').hide()
	$('.hamburger-menu__content-3').slideDown(500)
})
// eof

// Открытие гамбургер меню
$('.header__hamburger, .hamburger-menu__close').on('click', function () {
	$('.hamburger-menu').fadeToggle()
	$('body').toggleClass('scroll_disabled')
})
// eof

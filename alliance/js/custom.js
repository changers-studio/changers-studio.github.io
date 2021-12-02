$(function () {
	// Форма обратной связи
	$('form').on('submit', function () {
		var th = $(this)
		$.ajax({
			type: 'POST',
			url: 'mail.php',
			data: th.serialize(),
		}).done(function () {
			$(th).find('.success-form').css('display', 'flex').hide().fadeIn()

			setTimeout(function () {
				$(th).find('.success-form').fadeOut()
				th.trigger('reset')
			}, 3000)
		})
		return false
	})
	// eof

	// Маска для телефона
	if ($('*').is('input[type="tel"]')) {
		$('input[type=tel]').inputmask({
			mask: '+38 (099) 999 99 99',
			placeholder: '+38 (0__) ___-__-__',
		})
	}
	// eof

	// Magnific popup
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

	// AOS
	AOS.init({
		once: true,
		duration: 1000,
		offset: 0,
	})

	$(window).on('resize load', function () {
		AOS.refreshHard()
	})

	$(window).on('scroll load', function () {
		AOS.refresh()
	})
	// eof

	// Слайдер на главном экране
	if ($('*').is('.main__slider')) {
		$('.main__slider').slick({
			infinite: true,
			touchMove: false,
			speed: 500,
			fade: true,
			autoplay: true,
			autoplaySpeed: 8000,
			prevArrow: $('.main__slider-prev'),
			nextArrow: $('.main__slider-next'),
		})
	}
	// eof

	// Слайдер новостей на главном экране
	if ($('*').is('.blog__slider')) {
		let blogSlider = $('.blog__slider')

		blogSlider
			.on('init', function (event, slick) {
				$('.blog__counter-current').html(slick.slickCurrentSlide() + 1)
				$('.blog__counter-all').html(slick.slideCount)
			})
			.slick({
				infinite: true,
				touchMove: false,
				variableWidth: true,
				speed: 1000,
				autoplay: true,
				autoplaySpeed: 8000,
				prevArrow: $('.blog__slider-prev'),
				nextArrow: $('.blog__slider-next'),
			})

		blogSlider.on('afterChange', function (event, slick) {
			$('.blog__counter-current').html(slick.slickCurrentSlide() + 1)
			$('.blog__counter-all').html(slick.slideCount)
		})
	}
	// eof
})

// Табы
$('ul.tabs__caption').on('click', 'li:not(.active)', function () {
	$(this)
		.addClass('active')
		.siblings()
		.removeClass('active')
		.closest('div.tabs')
		.find('div.tabs__content')
		.hide()
		.eq($(this).index())
		.fadeIn(1000)
})

// eof

// Табы гамбургер меню
$('.hamburger-menu__caption-item-1').on('click', function () {
	$(this).addClass('active').siblings().removeClass('active')
	$('.hamburger-menu__content').hide()
	$('.hamburger-menu__content-1').fadeIn()
})

$('.hamburger-menu__caption-item-2').on('click', function () {
	$(this).addClass('active').siblings().removeClass('active')
	$('.hamburger-menu__content').hide()
	$('.hamburger-menu__content-2').fadeIn()
})

$('.hamburger-menu__caption-item-3').on('click', function () {
	$(this).addClass('active').siblings().removeClass('active')
	$('.hamburger-menu__content').hide()
	$('.hamburger-menu__content-3').fadeIn()
})
// eof

// Открытие гамбургер меню
$('.header__hamburger, .hamburger-menu__close').on('click', function () {
	$('.hamburger-menu').fadeToggle()
	$('body').toggleClass('scroll_disabled')
})
// eof

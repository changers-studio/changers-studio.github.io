// AOS
AOS.init({
	once: true,
	duration: 800,
})

$(window).on('scroll', function () {
	AOS.refresh()
})
//

// Hamburger menu
if ($(window).width() <= 922) {
	$('.toggleSidebar').on('click', function () {
		$('.header__hamburger').toggleClass('active')
		$('.header__hamburger-menu').toggleClass('visible')
		$('body').toggleClass('scroll_disabled')
	})
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

// Slider
if ($('*').is('.portfolio__slider')) {
	$('.portfolio__slider').slick({
		infinite: false,
		speed: 800,
		variableWidth: true,
		arrows: false,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					centerMode: true,
				},
			},
		],
	})
}
//

// Fancybox
$('[data-fancybox]').fancybox({
	infobar: false,
	buttons: ['close'],
})
//

// Magnific-popup
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
// end

// Range input
if ($('*').is('.range')) {
	let $range = $('.range__slider'),
		$input = $('.range__data-input'),
		instance,
		min = 50,
		max = 1000,
		from = 0

	$range.ionRangeSlider({
		skin: 'round',
		type: 'single',
		min: min,
		max: max,
		from: 50,
		to: 1000,
		onStart: updateInputs,
		onChange: updateInputs,
	})

	instance = $range.data('ionRangeSlider')

	function updateInputs(data) {
		from = data.from

		$input.prop('value', from)
	}

	$input.on('input', function () {
		var val = $(this).prop('value')

		// validate
		if (val < min) {
			val = min
		} else if (val > to) {
			val = to
		}

		instance.update({
			from: val,
		})
	})
}
//

// Form elements
$('.popup__boolean-btn, .popup__gift-item').on('click', function () {
	$(this).addClass('active').siblings().removeClass('active')
})
//

// Move links
$('body').on('click', '.trigger-move', function (event) {
	event.preventDefault()
	var id = $(this).attr('href'),
		top = $(id).offset().top
	$('body,html').animate({ scrollTop: top }, 1500)
})
//

// Form submit
// $('.feedback__form').submit(function () {
// 	var th = $(this)
// 	$.ajax({
// 		type: 'POST',
// 		url: 'mail.php',
// 		data: th.serialize(),
// 	}).done(function () {
// 		th.find('.feedback__form-success').fadeIn()

// 		setTimeout(() => {
// 			th.find('.feedback__form-success').fadeOut()
// 		}, 3000)

// 		th.trigger('reset')
// 		th.find('input').blur()
// 	})

// 	return false
// })

// $(
// 	'.feedback__form, .footer__form, .popup-notice .popup__form, .popup-enroll .popup__form, .product__disabled-form'
// ).submit(function () {
// 	var th = $(this)
// 	$.ajax({
// 		type: 'POST',
// 		url: 'mail.php',
// 		data: th.serialize(),
// 	}).done(function () {
// 		let a = document.createElement('a')

// 		document.body.appendChild(a)

// 		a.classList.add('mfp')
// 		a.href = '.popup-success-default'

// 		$('.mfp').magnificPopup({
// 			removalDelay: 300,
// 			mainClass: 'mfp-fade',
// 			fixedContentPos: false,
// 			callbacks: {
// 				open: function () {
// 					body.css('overflow-y', 'hidden')
// 				},
// 				close: function () {
// 					body.css('overflow-y', 'auto')
// 				},
// 			},
// 		})

// 		a.click()
// 		a.remove()

// 		th.trigger('reset')
// 		th.find('input').blur()
// 	})

// 	return false
// })
// ----------

// AOS
if ($('*').is('[data-aos]')) {
	$(window).on('load', function () {
		AOS.init({
			duration: 800,
			once: true,
		})
		AOS.refresh()
	})

	$(window).on('scroll', function () {
		AOS.refresh()
	})
}
//

// Hamburger menu
$('.toggleSidebar').on('click', function () {
	$('.header__hamburger').toggleClass('active')
	$('.header__hamburger-plug').fadeToggle()
	$('body').toggleClass('scroll-disabled')
})
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
		dropdownBody.hide().prev().removeClass('active')
	}
})
//

// Tabs
$('ul.manual__captions').on('click', 'li:not(.active)', function () {
	$(this)
		.addClass('active')
		.siblings()
		.removeClass('active')
		.closest('.manual__container')
		.find('.manual__tab')
		.removeClass('active')
		.eq($(this).index())
		.addClass('active')
})

$('ul.faq__captions').on('click', 'li:not(.active)', function () {
	$(this)
		.addClass('active')
		.siblings()
		.removeClass('active')
		.closest('.faq__container')
		.find('.faq__tab')
		.removeClass('active')
		.eq($(this).index())
		.addClass('active')
})
//

// Manual slider
if ($('*').is('.manual__slider')) {
	$('.manual__slider').slick({
		infinite: true,
		arrows: false,
		speed: 500,
		adaptiveHeight: true,
		dots: true,
	})
}
//

// Calculation
if ($('*').is('.range-input')) {
	var $range = $('.range-input')
	var $inputFrom = $('.calc__deposit-num')
	var min = 50
	var to = 50000
	var instance

	$range.ionRangeSlider({
		skin: 'round',
		min: min,
		max: to,
		from: 3000,
		postfix: ' $',
		onStart: updateInputs,
		onChange: updateInputs,
		onFinish: updateVal,
	})
	instance = $range.data('ionRangeSlider')

	function updateInputs(data) {
		$inputFrom.val(data.from)
	}

	function updateVal() {
		var val = $inputFrom.val()

		instance.update({
			from: val,
		})

		$inputFrom.val(val)

		if (50 <= val && val <= 50000) {
			$('.calc__result-daily').html(Math.floor(val * 0.17))
			$('.calc__result-total').html(Math.floor(val * 1.19))
			$('.calc__error').removeClass('active')
		} else {
			$('.calc__error').addClass('active')
			$('.calc__result-daily').html('-')
			$('.calc__result-total').html('-')
		}
	}

	$inputFrom.on('input', function () {
		updateVal()
	})
}
//

// Select2
if ($('*').is('.select')) {
	$('.select').select2({
		minimumResultsForSearch: -1,
		width: '100%',
		selectionCssClass: 'select__heading',
		dropdownCssClass: 'select__dropdown',
	})
}

if ($('*').is('.select-countries')) {
	$('.select-countries').select2({
		placeholder: 'Choose your country',
		width: '100%',
		selectionCssClass: 'select__heading',
		dropdownCssClass: 'select__dropdown',
	})
}
//

// Remove aos delay on mobile
if ($(window).width() <= 1024) {
	$('.stats__item, .main__video').removeAttr('data-aos-delay')
	$('.header').removeAttr('data-aos')
}
//

// Scroll to top
$('.footer__toTop').on('click', function () {
	$('html, body').animate({ scrollTop: 0 }, 1500)
})
//

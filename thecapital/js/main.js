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
if ($('*').is('.payments')) {
	$('.payments__slider').slick({
		infinite: true,
		arrows: false,
		cssEase: 'linear',
		speed: 8000,
		autoplay: true,
		autoplaySpeed: 0,
		variableWidth: true,
		draggable: false,
		pauseOnFocus: false,
	})
}
//

// Calculation
if ($('*').is('.calc')) {
	const $inputFrom = $('.calc__deposit-num')

	function updateVal() {
		var val = $inputFrom.val()

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

// Manual
if ($('*').is('.manual') && $(window).width() > 1024) {
	let manualItems = document.querySelectorAll('.manual__item')
	let NUM = 0

	setInterval(() => {
		if (NUM < 3) {
			NUM++
		} else {
			NUM = 0
		}

		manualItems.forEach((item) => {
			item.classList.remove('active')
		})

		manualItems[NUM].classList.add('active')
	}, 3000)
}
//

// Remove aos delay on mobile
if ($(window).width() <= 1024) {
	$('.stats__item, .main__video, .advantages__item').removeAttr('data-aos-delay')
	$('.header').removeAttr('data-aos')
}
//

// Scroll to top
$('.footer__toTop').on('click', function () {
	$('html, body').animate({ scrollTop: 0 }, 1500)
})
//

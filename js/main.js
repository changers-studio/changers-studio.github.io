const body = $('body')
const hamburger = $('.header__hamburger')
const sidebar = $('.header__sidebar')
const sidebarPlug = $('.header__sidebar-plug')
const toggleSidebar = $(
	'.header__hamburger, .header__sidebar-plug, .header__sidebar-close'
)

const header = $('.header')
const headerHeight = $('.header').height()
const headerWidth = $('.header').width()
const headerDropdown = $('.header__dropdown')
const headerDropdownPlug = $('.header__dropdown-plug')
const headerDropdownBtn = $('.header__dropdown-btn')

const reviewsSlider = $('.reviews__slider')
const reviewsSliderMobile = $('.reviews__slider-mobile')

const teamSlider = $('.team__slider')
const teamSliderMobile = $('.team__slider-mobile')

const projectsSlider = $('.projects__slider')
const projectsSliderMobile = $('.projects__slider-mobile')

const postsSlider = $('.posts__slider')

$(window).on('unload ', function () {
	$('.page-transition').removeClass('active')
})

document.addEventListener('DOMContentLoaded', function () {
	// Preloader
	let time
	if (body.hasClass('ishome')) {
		$('body').addClass('scroll_disabled')
		time = 1500
	} else {
		time = 0
	}

	let PercentageID = $('#percentage'),
		start = 0,
		end = 100,
		durataion = time
	animateValue(PercentageID, start, end, durataion)

	function animateValue(id, start, end, duration) {
		var range = end - start,
			current = start,
			increment = end > start ? 1 : -1,
			stepTime = Math.abs(Math.floor(duration / range)),
			obj = $(id)

		var timer = setInterval(function () {
			current += increment
			$(obj).text(current + '%')

			if (current == end) {
				clearInterval(timer)
			}
		}, stepTime)
	}

	setTimeout(() => {
		$('body').addClass('page-loaded').removeClass('scroll_disabled')
	}, time)
	// end

	// Page transition
	$('.transition-link').on('click', function (e) {
		var target = $(this).attr('target')
		var fancybox = $(this).data('fancybox')
		var url = this.getAttribute('href')
		if (
			target != '_blank' &&
			typeof fancybox == 'undefined' &&
			url.indexOf('#') < 0
		) {
			e.preventDefault()
			var url = this.getAttribute('href')
			if (url.indexOf('#') != -1) {
				var hash = url.substring(url.indexOf('#'))

				if ($('body ' + hash).length != 0) {
					$('.page-transition').removeClass('active')
				}
			} else {
				$('.page-transition').toggleClass('active')
				setTimeout(function () {
					window.location = url
				}, 1300)
				window.addEventListener('unload', function () {
					$('.page-transition').removeClass('active')
				})
			}
		}
	})
	// end

	// Select2
	if ($('*').is('.select2')) {
		$('.select2').select2({
			width: '100%',
			selectionCssClass: 'select__heading',
			dropdownCssClass: 'select__dropdown',
			placeholder: 'Select a country',
		})
	}
	// end

	// Magnific-popup
	$('.mfp').magnificPopup({
		removalDelay: 300,
		mainClass: 'mfp-fade',
		fixedContentPos: false,
		callbacks: {
			open: function () {
				body.css('overflow-y', 'hidden')
			},
			close: function () {
				body.css('overflow-y', 'auto')
			},
		},
	})
	// end

	// AOS
	AOS.init({
		duration: 800,
		once: true,
	})
	// end
})

// AOS refresh
$(window).on('load', function () {
	AOS.refresh()
})

$(window).on('scroll', function () {
	AOS.refresh()
})
// end

// Telephone mask
if ($('*').is('input[type="tel"]')) {
	$('input[type=tel]').inputmask({
		mask: '+99 (999) 999 99 99',
		showMaskOnHover: false,
	})
}
// end

// Payment masks
if ($('*').is('.popup__form-cardNumber')) {
}

$('.popup__form-cardNumber').inputmask({
	mask: '9999 9999 9999 9999',
	showMaskOnHover: false,
	placeholder: '',
})

$('.popup__form-cardMounth').inputmask({
	mask: '99',
	showMaskOnHover: false,
	placeholder: '',
})

$('.popup__form-cardYear').inputmask({
	mask: '9999',
	showMaskOnHover: false,
	placeholder: '',
})

$('.popup__form-cardCVV').inputmask({
	mask: '999',
	showMaskOnHover: false,
	placeholder: '',
})
// end

// Form submit
$(
	'.feedback__form, .footer__form, .popup-notice .popup__form, .popup-enroll .popup__form, .product__disabled-form'
).submit(function () {
	var th = $(this)
	$.ajax({
		type: 'POST',
		url: 'mail.php',
		data: th.serialize(),
	}).done(function () {
		let a = document.createElement('a')

		document.body.appendChild(a)

		a.classList.add('mfp')
		a.href = '.popup-success-default'

		$('.mfp').magnificPopup({
			removalDelay: 300,
			mainClass: 'mfp-fade',
			fixedContentPos: false,
			callbacks: {
				open: function () {
					body.css('overflow-y', 'hidden')
				},
				close: function () {
					body.css('overflow-y', 'auto')
				},
			},
		})

		a.click()
		a.remove()

		th.trigger('reset')
		th.find('input').blur()
	})

	return false
})

$('.popup-callback .popup__form').submit(function () {
	var th = $(this)
	$.ajax({
		type: 'POST',
		url: 'mail.php',
		data: th.serialize(),
	}).done(function () {
		let a = document.createElement('a')

		document.body.appendChild(a)

		a.classList.add('mfp')
		a.href = '.popup-success-callback'

		$('.mfp').magnificPopup({
			removalDelay: 300,
			mainClass: 'mfp-fade',
			fixedContentPos: false,
			callbacks: {
				open: function () {
					body.css('overflow-y', 'hidden')
				},
				close: function () {
					body.css('overflow-y', 'auto')
				},
			},
		})

		a.click()
		a.remove()

		th.trigger('reset')
		th.find('input').blur()
	})

	return false
})

$('.popup-promocode-problem').submit(function () {
	var th = $(this)
	$.ajax({
		type: 'POST',
		url: 'mail.php',
		data: th.serialize(),
	}).done(function () {
		let a = document.createElement('a')

		document.body.appendChild(a)

		a.classList.add('mfp')
		a.href = '.popup-success-promocode-problem'

		$('.mfp').magnificPopup({
			removalDelay: 300,
			mainClass: 'mfp-fade',
			fixedContentPos: false,
			callbacks: {
				open: function () {
					body.css('overflow-y', 'hidden')
				},
				close: function () {
					body.css('overflow-y', 'auto')
				},
			},
		})

		a.click()
		a.remove()

		th.trigger('reset')
		th.find('input, textarea').blur()
	})

	return false
})
// end

// Fixed header
let didScroll
let lastScrollTop = 0
let delta = 5

$(window).on('scroll', function (event) {
	didScroll = true
})

if ($(window).width() >= 922) {
	setInterval(function () {
		if (didScroll) {
			hasScrolled()
			didScroll = false
		}
	}, 250)

	function hasScrolled() {
		let st = $(this).scrollTop()

		if (Math.abs(lastScrollTop - st) <= delta) return

		if (st > lastScrollTop && st > 0) {
			// Scroll Down
			header.removeClass('nav-down').addClass('nav-up').addClass('fixed')
		} else {
			// Scroll Up
			if (st + $(window).height() < $(document).height()) {
				header.removeClass('nav-up').addClass('nav-down')
			}
		}

		if ($(window).scrollTop() <= 5) {
			header.removeClass('fixed')
		}

		lastScrollTop = st
	}
} else {
	$(window).on('scroll', function () {
		if ($(this).scrollTop() > 5) {
			header.addClass('fixed')
		} else if ($(this).scrollTop() < 5) {
			header.removeClass('fixed')
		}
	})
}
// end

// Hamburger
toggleSidebar.on('click', function () {
	hamburger.toggleClass('active')
	sidebar.toggleClass('visible')
	sidebarPlug.fadeToggle()
	body.toggleClass('scroll_disabled')
})
// end

// Dropdown header
headerDropdownBtn.on('mouseover', function () {
	headerDropdownBtn.addClass('active')
	headerDropdown.fadeIn(500).addClass('active')
	headerDropdownPlug.fadeIn()
	// body.addClass('scroll_disabled')
})

header.on('mouseleave', function () {
	headerDropdownBtn.removeClass('active')
	headerDropdown.fadeOut(500).removeClass('active')
	headerDropdownPlug.fadeOut()
	// body.removeClass('scroll_disabled')
})
// end

// Marquee
if ($('*').is('.marquee')) {
	$('.marquee').slick({
		infinite: true,
		arrows: false,
		cssEase: 'linear',
		speed: 8000,
		autoplay: true,
		autoplaySpeed: 0,
		variableWidth: true,
	})
}
// end

// Rec slider
if ($('*').is('.recommends__slider')) {
	$('.recommends__images').slick({
		infinite: true,
		arrows: false,
		speed: 1000,
		asNavFor: '.recommends__slider',
		touchMove: false,
		fade: true,
	})

	$('.recommends__slider').slick({
		infinite: true,
		arrows: false,
		speed: 1000,
		dots: true,
		asNavFor: '.recommends__images',
		touchMove: false,
		autoplay: true,
		autoplaySpeed: 5000,
		fade: true,
	})
}
// end

// Input animation
$('input, textarea').each(function () {
	$(this).on('focus', function () {
		$(this).parent('.input-wrapper').addClass('active focus')
	})

	$(this).on('focusout', function () {
		$(this).parent('.input-wrapper').removeClass('focus')
	})

	$(this).on('blur', function () {
		if ($(this).val().length == 0) {
			$(this).parent('.input-wrapper').removeClass('active')
		}
	})

	if ($(this).val() != '') $(this).parent('.input-wrapper').addClass('active')
})

$('.custom-input__inner-body').each(function () {
	$(this).on('focus', function () {
		$(this).parent('.custom-input__inner').addClass('focus')
	})

	$(this).on('focusout', function () {
		$(this).parent('.custom-input__inner').removeClass('focus')
	})
})
// end

// Reviews slider
if ($('*').is('.reviews__slider')) {
	reviewsSlider.slick({
		speed: 1000,
		touchMove: false,
		arrows: false,
	})

	$('.reviews__nav .reviews__slider-prev').on('click', function () {
		reviewsSlider.slick('slickPrev')
	})

	$('.reviews__nav .reviews__slider-next').on('click', function () {
		reviewsSlider.slick('slickNext')
	})

	reviewsSlider.on('afterChange', function (event, slick) {
		$('.reviews__nav .reviews__counter-current').html(
			slick.slickCurrentSlide() + 1
		)
		$('.reviews__nav .reviews__counter-all').html(slick.slideCount)
	})

	reviewsSliderMobile.slick({
		speed: 500,
		touchMove: false,
		arrows: false,
		adaptiveHeight: true,
	})

	$('.reviews__nav-mobile .reviews__slider-prev').on('click', function () {
		reviewsSliderMobile.slick('slickPrev')
	})

	$('.reviews__nav-mobile .reviews__slider-next').on('click', function () {
		reviewsSliderMobile.slick('slickNext')
	})

	reviewsSliderMobile.on('afterChange', function (event, slick) {
		$('.reviews__nav-mobile .reviews__counter-current').html(
			slick.slickCurrentSlide() + 1
		)
		$('.reviews__nav-mobile .reviews__counter-all').html(slick.slideCount)
	})

	$('.review').on('click', function () {
		$(this).addClass('active')
		$('.review')
			.not(this)
			.removeClass('active')
			.removeClass('more-text')
			.find('.review__text-more')
			.removeClass('active')
	})

	$('.review__text-more').on('click', function () {
		$(this).toggleClass('active').closest('.review').toggleClass('more-text')
	})
}
// end

// Team slider
if ($('*').is('.team__slider')) {
	teamSlider.slick({
		speed: 700,
		touchMove: false,
		infinite: false,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 4000,
	})

	$('.team__nav .team__slider-prev').on('click', function () {
		teamSlider.slick('slickPrev')
	})

	$('.team__nav .team__slider-next').on('click', function () {
		teamSlider.slick('slickNext')
	})

	teamSlider.on('afterChange', function (event, slick) {
		$('.team__nav .team__counter-current').html(slick.slickCurrentSlide() + 1)
		$('.team__nav .team__counter-all').html(slick.slideCount)
	})

	teamSliderMobile.slick({
		speed: 500,
		touchMove: false,
		arrows: false,
		adaptiveHeight: true,
		autoplay: true,
		autoplaySpeed: 4000,
	})

	$('.team__nav-mobile .team__slider-prev').on('click', function () {
		teamSliderMobile.slick('slickPrev')
	})

	$('.team__nav-mobile .team__slider-next').on('click', function () {
		teamSliderMobile.slick('slickNext')
	})

	teamSliderMobile.on('afterChange', function (event, slick) {
		$('.team__nav-mobile .team__counter-current').html(
			slick.slickCurrentSlide() + 1
		)
		$('.team__nav-mobile .team__counter-all').html(slick.slideCount)
	})
}
// end

// Remove data-aos
if ($(window).width() <= 992) {
	$(
		'.p-course .main__container, .posts__nav, .ishome .main__image div img'
	).removeAttr('data-aos')
	$('.about__box, .post, .main__btns').removeAttr('data-aos-delay')
}
// end

// Tabs
$('ul.portfolio__tabs-captions').on('click', 'li:not(.active)', function () {
	$(this)
		.addClass('active')
		.siblings()
		.removeClass('active')
		.closest('.portfolio__tabs')
		.find('.portfolio__tabs-content')
		.removeClass('active')
		.eq($(this).index())
		.addClass('active')

	$('.portfolio__slider').slick('setPosition')
})
// end

// Portfolio slider
if ($('*').is('.portfolio__slider')) {
	$('.portfolio__slider').slick({
		slidesToShow: 3,
		arrows: false,
		speed: 500,
		touchMove: false,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1,
					dots: true,
				},
			},
		],
	})
}

if ($('*').is('.portfolio__main-slider')) {
	$('.portfolio__main-slider').slick({
		speed: 1000,
		touchMove: false,
		infinite: false,
		prevArrow: $('.portfolio__main-slider-prev'),
		nextArrow: $('.portfolio__main-slider-next'),
	})
}
// end

// Posts slider
if ($('*').is('.posts__slider')) {
	postsSlider.slick({
		slidesToShow: 3,
		arrows: false,
		speed: 1000,
		touchMove: false,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1,
					adaptiveHeight: true,
					speed: 500,
				},
			},
		],
	})

	$('.posts__nav .posts__slider-prev').on('click', function () {
		postsSlider.slick('slickPrev')
	})

	$('.posts__nav .posts__slider-next').on('click', function () {
		postsSlider.slick('slickNext')
	})

	postsSlider.on('afterChange', function (event, slick) {
		$('.posts__counter-current').html(slick.slickCurrentSlide() + 1)
		$('.posts__counter-all').html(slick.slideCount)
	})
}
// end

// CEO slider
if ($('*').is('.ceo__slider')) {
	$('.ceo__slider').slick({
		arrows: false,
		speed: 0,
		touchMove: false,
		dots: true,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					adaptiveHeight: true,
				},
			},
		],
	})

	$('.ceo__slider').on('afterChange', function (event, slick) {
		$('.ceo__slider')
			.find('.slick-dots li.slick-active')
			.prevAll()
			.addClass('before')
		$('.ceo__slider')
			.find('.slick-dots li.slick-active')
			.nextAll()
			.removeClass('before')
	})
}
// end

// Catalog marquee
if ($('*').is('.catalog__slider')) {
	$('.catalog__slider').slick({
		infinite: true,
		arrows: false,
		cssEase: 'linear',
		speed: 10000,
		autoplay: true,
		autoplaySpeed: 0,
		variableWidth: true,
	})
}
// end

// Gallery marquee
if ($('*').is('.gallery__slider')) {
	$('.gallery__slider').slick({
		infinite: true,
		arrows: false,
		cssEase: 'linear',
		speed: 15000,
		autoplay: true,
		autoplaySpeed: 0,
		variableWidth: true,
	})
}
// end

// Payment choose
$('.popup__payment-btn').on('click', function () {
	$(this).addClass('active').siblings().removeClass('active')

	let scrollTo = document.createElement('a')
	scrollTo.href = '#fields'
	scrollTo.click()
	scrollTo.remove()
})
// end

// Projects slider
if ($('*').is('.projects__slider')) {
	projectsSlider.slick({
		speed: 1000,
		touchMove: false,
		arrows: false,
		variableWidth: true,
	})

	$('.projects__nav .projects__slider-prev').on('click', function () {
		projectsSlider.slick('slickPrev')
	})

	$('.projects__nav .projects__slider-next').on('click', function () {
		projectsSlider.slick('slickNext')
	})

	projectsSlider.on('afterChange', function (event, slick) {
		$('.projects__nav .projects__counter-current').html(
			slick.slickCurrentSlide() + 1
		)
		$('.projects__nav .projects__counter-all').html(slick.slideCount)
	})

	projectsSliderMobile.slick({
		speed: 500,
		touchMove: false,
		arrows: false,
		adaptiveHeight: true,
	})

	$('.projects__nav-mobile .projects__slider-prev').on('click', function () {
		projectsSliderMobile.slick('slickPrev')
	})

	$('.projects__nav-mobile .projects__slider-next').on('click', function () {
		projectsSliderMobile.slick('slickNext')
	})

	projectsSliderMobile.on('afterChange', function (event, slick) {
		$('.projects__nav-mobile .projects__counter-current').html(
			slick.slickCurrentSlide() + 1
		)
		$('.projects__nav-mobile .projects__counter-all').html(slick.slideCount)
	})
}
// end

// GSAP
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

ScrollSmoother.create({
	smooth: 2,
	effects: true,
	wrapper: '#smooth-wrapper',
	content: '#smooth-content',
})
// end

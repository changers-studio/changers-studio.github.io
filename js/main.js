// Body padding-top
const body = $('body')
const headerHeights = $('.header').height()
$(window).on('load', function () {
	$('.isnohome').css('padding-top', headerHeights)
})
// ----------

// Header
const header = $('.header')
const headerBtnWrapper = $('.header__btn-wrapper')
const headerMenu = $('.header__menu')
const headerPosition = () => {
	if ($(this).scrollTop() > 1) {
		header.removeClass('_transparent').addClass('_squeeze')
	} else if ($(this).scrollTop() < 1) {
		header.addClass('_transparent').removeClass('_squeeze')
	}
}

header.on('mouseover click', function () {
	header.removeClass('_transparent')
})

header.on('mouseleave', function () {
	headerPosition()

	langsDropdown.hide()
	cart.hide()
	favorites.hide()
	menu.hide()
	searchResult.hide()

	search.removeClass('active')

	$('.header__trigger, .header__menu-category').removeClass('active')
})

$(window).on('scroll', function () {
	headerPosition()
})
// ----------

// Header modals
const langs = $('.header__langs')
const langsDropdown = $('.header__langs-dropdown')
const cart = $('.header__cart')
const favorites = $('.header__favorites')
const menu = $('.header__menu-dropdown')

$('.header__trigger').on('click', function () {
	menu.hide()
	searchResult.hide()
	search.removeClass('active')

	$(this).toggleClass('active').next().toggle()

	$('.header__trigger').not(this).removeClass('active').next().hide()
})

$('.header__menu-category').on('click', function () {
	$(this).addClass('active').siblings().removeClass('active')
	langsDropdown.hide()
	cart.hide()
	favorites.hide()

	menu.show()

	backBtnVisible()
})

// ----------

// Header search
const search = $('.header__search')
const searchBtn = $('.header__search-btn')
const searchResult = $('.header__search-result')

$('.header__search-btn').on('click', function () {
	langsDropdown.hide()
	cart.hide()
	favorites.hide()
	menu.hide()

	$('.header__search').addClass('active')
	$('.header__search-input').focus()
})

$('.header__search-input').on('click', function () {
	searchResult.show()
})
// ----------

// Header hamburger
function backBtnVisible() {
	if ($(window).width() <= 922) {
		$('.header__hamburger-back').show()
	}
}

$('.header__hamburger').on('click', function () {
	$('.header__hamburger-menu').addClass('active')
	body.addClass('overflow-y_hidden')
})

$('.header__hamburger-close').on('click', function () {
	$('.header__hamburger-menu').removeClass('active')
	$('.header__hamburger-back').hide()
	body.removeClass('overflow-y_hidden')

	langs.hide()
	cart.hide()
	favorites.hide()
	menu.hide()
	search.hide()
	searchResult.hide()
})

$('.header__hamburger-back').on('click', function () {
	$(this).hide()

	langs.hide()
	cart.hide()
	favorites.hide()
	menu.hide()
	search.hide()
	searchResult.hide()
})

$('.header__hamburger-lang').on('click', function () {
	langs.show()
	langsDropdown.show()
	menu.hide()

	backBtnVisible()
})

$('.header__hamburger-search').on('click', function () {
	search.show()
	menu.hide()

	backBtnVisible()
})

$('.header-dropdown__close').on('click', function () {
	$(this).closest('.header-dropdown').hide()
	$('.header__trigger').removeClass('active')
})
// ----------

// Sliders
const mainSlider = new Swiper('.main__slider', {
	loop: true,
	spaceBetween: 30,
	speed: 1000,
	allowTouchMove: false,
	effect: 'fade',
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	autoplay: {
		delay: 5000,
	},
	fadeEffect: {
		crossFade: true,
	},
})

const scrollbarSlider = new Swiper('.scrollbar-slider', {
	speed: 500,
	slidesPerView: 'auto',
	spaceBetween: 25,
	mousewheel: true,
	freeMode: true,
	scrollbar: {
		el: '.swiper-scrollbar',
		draggable: true,
	},
	breakpoints: {
		992: {
			spaceBetween: 25,
			allowTouchMove: false,
		},
		0: {
			spaceBetween: 12,
		},
	},
})

$('.scrollbar-slider').on('mouseover', function () {
	$('body').addClass('overflow-y_hidden')
})

$('.scrollbar-slider').on('mouseleave', function () {
	$('body').removeClass('overflow-y_hidden')
})

const previewSlider = new Swiper('.product__slider', {
	speed: 500,
	effect: 'fade',
	freeMode: true,
	autoplay: {
		delay: 1000,
	},
	fadeEffect: {
		crossFade: true,
	},
	scrollbar: {
		el: '.product__slider-scrollbar',
		draggable: true,
	},
	breakpoints: {
		992: {
			allowTouchMove: false,
		},
		0: {
			allowTouchMove: true,
		},
	},
})

const productSlider = $('.product__slider')

productSlider.each(function () {
	this.swiper.autoplay.stop()
})

productSlider.on('mouseover', function () {
	this.swiper.autoplay.start()
})

productSlider.on('mouseleave', function () {
	this.swiper.autoplay.stop()
})

const overviewSlider = new Swiper('.overview__slider', {
	loop: true,
	spaceBetween: 30,
	speed: 500,
	allowTouchMove: false,
	autoplay: {
		delay: 5000,
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
})
// ----------

// Add to favorites/cart
$('.product__btn').on('click', function () {
	$(this).toggleClass('active')
})
// ----------

// Catalog sort/filter
const catalogBtn = $('.catalog__btn')
const sort = $('.catalog__sort-dropdown')
const filter = $('.catalog__filter-dropdown')

$('.catalog__btn-heading').on('click', function () {
	$(this).toggleClass('active').next().toggle()
	$('.catalog__btn-heading').not(this).removeClass('active').next().hide()
})

$('.catalog__sort-btn').on('click', function () {
	$(this).addClass('active').siblings().removeClass('active')
	$(this).parent().hide().prev().removeClass('active')
})

$('.catalog__filter-close').on('click', function () {
	$('.catalog__btn-heading').removeClass('active')
	$('.catalog__btn-dropdown').hide()
})
// ----------

// Catalog text dropdown
$('.catalog__toggle-activator').on('click', function () {
	$(this).parent().addClass('active')

	$('.catalog__text').addClass('active')

	if ($(window).width() <= 992) {
		let catalogTextHeight = $('.catalog__text-inner').height()
		$('.catalog__text').css('height', catalogTextHeight)
	} else {
		setTimeout(() => {
			let catalogTextHeight = $('.catalog__text-inner').height()
			$('.catalog__text').css('height', catalogTextHeight)
		}, 300)
	}
	setTimeout(() => {
		const catalogTextHeight = $('.catalog__text-inner').height()
		$('.catalog__text').css('height', catalogTextHeight)
	}, 300)
})

$('.catalog__toggle-deactivator').on('click', function () {
	$(this).parent().removeClass('active')

	$('.catalog__text').css('height', '24px')

	setTimeout(() => {
		$('.catalog__text').removeClass('active')
	}, 300)
})
// ----------

// Select2
if ($('*').is('.select')) {
	$('.select').select2({
		templateResult: selectIcons,
		templateSelection: selectIcons,
		minimumResultsForSearch: -1,
		width: '100%',
		selectionCssClass: 'select__heading',
		dropdownCssClass: 'select__dropdown',
	})
}

if ($('*').is('.select-country')) {
	$('.select-country').select2({
		templateResult: selectIcons,
		templateSelection: selectIcons,
		minimumResultsForSearch: -1,
		width: '100%',
		selectionCssClass: 'select__heading select__heading-country',
		dropdownCssClass: 'select__dropdown select__dropdown-country',
	})
}

function selectIcons(opt) {
	if (!opt.id) {
		return opt.text.toUpperCase()
	}

	let optimage = $(opt.element).attr('data-image')
	if (!optimage) {
		return opt.text.toUpperCase()
	} else {
		let $opt = $(
			'<span><img src="' +
				optimage +
				'" width="24px" /> ' +
				opt.text.toUpperCase() +
				'</span>'
		)
		return $opt
	}
}
// ----------

// Form elements
$('input, textarea').each(function () {
	$(this).on('focus', function () {
		$(this).parent('.input-wrapper').addClass('active')
	})

	$(this).on('blur', function () {
		if ($(this).val().length == 0) {
			$(this).parent('.input-wrapper').removeClass('active')
		}
	})

	if ($(this).val() != '') $(this).parent('.input-wrapper').addClass('active')
})

$('input.company-name').on('change', function () {
	if ($(this).val() !== '') {
		$(this).closest('form').find('.vat-code').addClass('visible')
	} else {
		$(this).closest('form').find('.vat-code').removeClass('visible')
	}
})

$('.data__form-activator').on('click', function () {
	$(this)
		.hide()
		.closest('form')
		.addClass('active')
		.find('input, select, textarea')
		.removeAttr('disabled')

	$(this).closest('form').find('.data__form-btn').addClass('visible')
})

$('.data__form-btn').on('click', function () {
	$(this)
		.closest('form')
		.removeClass('active')
		.find('input, select, textarea')
		.attr('disabled', 'disabled')

	$(this).closest('form').find('.data__form-activator').show()
	$(this).closest('form').find('.data__form-btn').removeClass('visible')
})
// ----------

// Dropdown
$('.dropdown-toggle').on('click', function () {
	$(this).toggleClass('active').next().slideToggle()
	$('.dropdown-toggle').not(this).removeClass('active').next().slideUp()
})

$('.payment__item-heading').on('click', function () {
	$(this).next().show()
	$('.payment__item-heading').not(this).next().hide()
})
// ----------

// Product page
if ($('*').is('[data-fancybox="product"]')) {
	$('[data-fancybox="product"]').fancybox({
		buttons: ['close'],
		loop: false,
		infobar: false,
		protect: true,
		arrows: false,
		thumbs: {
			autoStart: true,
			axis: 'x',
		},
	})
}

$('.overview__slider-full').on('click', function () {
	$('.overview__slider-item').first().trigger('click')
})

if ($('*').is('.overview__slider-view')) {
	$('.overview__slider-view').on('click', function () {
		$.fancybox.open($('#overview360'), {
			touch: false,
		})
	})

	// Lozad
	const observer = lozad()
	observer.observe()
	// ----------
}
// ----------

// FAQ tabs
$('.tabs__captions-item').on('click', function () {
	$(this)
		.addClass('active')
		.siblings()
		.removeClass('active')
		.closest('div.tabs')
		.find('div.tabs__content')
		.removeClass('active')
		.eq($(this).index())
		.addClass('active')
		.find('.faq__dropdown .dropdown:first-child .dropdown__heading')
		.addClass('active')
		.next()
		.slideDown()
})
// ----------

// Video
$(window).on('load', function () {
	function playPauseVideo() {
		let videos = document.querySelectorAll('video')
		videos.forEach((video) => {
			video.muted = true
			let playPromise = video.play()
			if (playPromise !== undefined) {
				playPromise.then((_) => {
					let observer = new IntersectionObserver(
						(entries) => {
							entries.forEach((entry) => {
								if (entry.intersectionRatio !== 1 && !video.paused) {
									video.pause()
								} else if (video.paused) {
									video.play()
								}
							})
						},
						{ threshold: 0.2 }
					)
					observer.observe(video)
				})
			}
		})
	}

	playPauseVideo()
})
// ----------

// Page nav
function isScrolledIntoView(elem) {
	var docViewTop = $(window).scrollTop() + 50
	var docViewBottom = docViewTop + $(window).height()

	var elemTop = $(elem).offset().top
	var elemBottom = elemTop + $(elem).height()

	return elemBottom <= docViewBottom && elemTop >= docViewTop
}

function menuActive() {
	$('.p-product section').each(function () {
		if (isScrolledIntoView(this) === true) {
			$('.page-nav__item')
				.eq($(this).index() - 1)
				.addClass('active')
				.siblings()
				.removeClass('active')
		}
	})
}

$('.page-nav__item').on('click', function () {
	$(this)
		.addClass('active')
		.siblings()
		.removeClass('active')
		.addClass('remove-line')
})

$(window).on('load', function () {
	menuActive()
})

$(window).on('scroll', function () {
	menuActive()
})

$('body').on('click', '.page-nav__item', function (event) {
	event.preventDefault()
	var id = $(this).attr('href'),
		top = $(id).offset().top
	$('body,html').animate({ scrollTop: top - headerHeights }, 0)
})
// ----------

// Dropdown order
$('.order__toggle').on('click', function () {
	$(this)
		.closest('.order')
		.toggleClass('active')
		.find('.order__dropdown')
		.slideToggle()
})
// ----------

// Delivery radio
$('.checkout__delivery').on('click', function () {
	$(this).addClass('active')

	$('.checkout__delivery').not(this).removeClass('active')
})
// ----------

// Body padding-bottom on mobile
if ($(window).width() <= 992 && $('*').is('.checkout__btns')) {
	const btnsHeight = $('.checkout__btns').innerHeight()
	$('.body-inner').css('padding-bottom', btnsHeight)
	console.log('done')
}
// ----------

// Billing address
$('.billing-address__btn').on('change', function () {
	$('.billing-address__form').toggle()
})
// ----------

// Input mask
if (
	$('*').is('.input-phone') ||
	$('*').is('.input-day') ||
	$('*').is('.input-month') ||
	$('*').is('.input-year')
) {
	$('.input-phone').inputmask({
		mask: '(999) 99 99 999',
		showMaskOnHover: false,
		placeholder: '',
	})

	$('.input-day').inputmask({
		mask: '99',
		showMaskOnHover: false,
		placeholder: '',
	})

	$('.input-month').inputmask({
		mask: '99',
		showMaskOnHover: false,
		placeholder: '',
	})
	$('.input-year').inputmask({
		mask: '9999',
		showMaskOnHover: false,
		placeholder: '',
	})
}
// ----------

// Form validation
$('form').each(function () {
	$(this).validate({
		debug: true,
		errorClass: 'input-error',
		messages: {
			'First name': {
				required: 'First name required!',
			},
			'Last name': {
				required: 'Last name required!',
			},
			'Verification code': {
				required: 'Verification code incorrect!',
			},
		},
		highlight: function (element, errorClass, validClass) {
			$(element).parents('.input-wrapper').addClass('invalid')
		},
		unhighlight: function (element, errorClass, validClass) {
			$(element).parents('.input-wrapper').removeClass('invalid')
		},
	})
})
// ----------

// Close modal
function closeModal(space, elem) {
	$('.body-inner').on('mouseup', function (event) {
		if (
			!space.is(event.target) &&
			space.has(event.target).length === 0 &&
			!elem.is(event.target) &&
			elem.has(event.target).length === 0
		) {
			elem.hide().prev().removeClass('active')

			$('.header__menu-category').removeClass('active')
		}

		headerPosition()
	})
}

if ($(window).width() >= 992) {
	closeModal(headerBtnWrapper, langsDropdown)
	closeModal(headerBtnWrapper, cart)
	closeModal(headerBtnWrapper, favorites)
	closeModal(catalogBtn, sort)
	closeModal(catalogBtn, filter)
	closeModal(headerMenu, menu)
}
// ----------

// Cookie
$('.cookie-modal__btn').on('click', function () {
	$('.cookie-modal').hide()
})
// ----------

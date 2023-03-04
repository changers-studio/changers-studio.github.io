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
	header.removeClass('active')

	langsDropdown.hide()
	cart.hide()
	favorites.hide()
	menu.hide()
	searchResult.hide()

	search.removeClass('active')

	$('.header__trigger, .header__menu-category').removeClass('active')
	$('.header__menu-btn.active').removeClass('active').next().slideUp()
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
	header.addClass('active')
	menu.hide()
	searchResult.hide()
	search.removeClass('active')

	$('.body-inner').addClass('active')

	$(this).toggleClass('active').next().toggle()

	$('.header__trigger').not(this).removeClass('active').next().hide()

	if ($(window).width() <= 992) {
		let windowHeight =
			window.visualViewport !== void 0
				? window.visualViewport.height
				: window.innerHeight
		let elem = $(this).next()

		elem.innerHeight(windowHeight)

		body.addClass('overflow-y_hidden')
	}
})

$('.header__menu-category').on('click', function () {
	$(this).toggleClass('active').siblings().removeClass('active')

	langsDropdown.hide()
	cart.hide()
	favorites.hide()

	menu.eq($(this).index()).toggle().siblings().hide()

	header.addClass('active')
	$('.header__menu-btn').removeClass('active').next().hide()

	backBtnVisible()
})

$('.header__menu-btn').on('click', function () {
	if ($(window).width() <= 992) {
		$(this).next().show()
		$('.header__menu-btn').not(this).next().hide()

		$('.header__menu-close').hide()
		$('.header__menu-back').show()
	} else {
		$(this).toggleClass('active').next().slideToggle()
		$('.header__menu-btn').not(this).removeClass('active').next().slideUp()
	}
})
// ----------

// Header search
const search = $('.header__search')
const searchBtn = $('.header__search-btn')
const searchInput = $('.header__search-input')
const searchResult = $('.header__search-result')

searchBtn.on('click', function () {
	langsDropdown.hide()
	cart.hide()
	favorites.hide()
	menu.hide()

	$('.header__trigger').removeClass('active')

	header.addClass('active')
	search.toggleClass('active')
	searchResult.hide()
	$('.header__search-input').focus()
})

$('.header__search-input').on('click', function () {
	searchResult.show()
})

$('body').on('click', function (event) {
	if (
		!searchInput.is(event.target) &&
		searchInput.has(event.target).length === 0 &&
		!searchResult.is(event.target) &&
		searchResult.has(event.target).length === 0 &&
		!searchBtn.is(event.target) &&
		searchBtn.has(event.target).length === 0
	) {
		search.removeClass('active')
		searchResult.hide()
	}
})
// ----------

// Header hamburger
function backBtnVisible() {
	if ($(window).width() <= 922) {
		$('.header__menu-close').show()
	}
}

$('.header__hamburger').on('click', function () {
	$('.header__hamburger-menu').addClass('active')
	body.addClass('overflow-y_hidden')
})

$('.header__hamburger-close').on('click', function () {
	$('.header__hamburger-menu').removeClass('active')
	$('.header__hamburger-back').hide()
	$('.header__hamburger-heading').hide()
	$('.header__menu-links-dropdown').slideUp()
	body.removeClass('overflow-y_hidden')

	langs.hide()
	cart.hide()
	favorites.hide()
	menu.hide()
	search.hide()
	searchResult.hide()

	header.removeClass('active')
})

$('.header__menu-close').on('click', function () {
	$(this).hide()

	langs.hide()
	cart.hide()
	favorites.hide()
	menu.hide()
	search.hide()
	searchResult.hide()
	$('.header__hamburger-heading').hide()
})

$('.header__menu-back').on('click', function () {
	$(this).hide()

	$('.header__menu-links-dropdown').hide()
	$('.header__menu-close').show()
	$('.header__hamburger-heading').hide()
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
	$('.body-inner').removeClass('active')
	body.removeClass('overflow-y_hidden')
})

$('.header__menu-btn').on('click', function () {
	let txt = $(this).html()

	$(this)
		.closest('.header__menu-dropdown')
		.find('.header__hamburger-heading')
		.html(txt)
		.show()
})
// ----------

// Sliders
const mainSlider = new Swiper('.main__slider', {
	loop: true,
	speed: 1000,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	autoplay: {
		delay: 5000,
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
		},
		0: {
			spaceBetween: 12,
		},
	},
})

if ($(window).width() > 992) {
	$('.scrollbar-slider').on('mouseover', function () {
		$('body').addClass('overflow-y_hidden')
	})

	$('.scrollbar-slider').on('mouseleave', function () {
		$('body').removeClass('overflow-y_hidden')
	})
}

const previewSlider = new Swiper('.product__slider', {
	speed: 500,
	effect: 'fade',

	autoplay: {
		delay: 2000,
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
			freeMode: true,
		},
		0: {
			freeMode: false,
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
	loop: false,
	spaceBetween: 30,
	speed: 500,
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
$('.product__btn, .cart__item-btn').on('click', function () {
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

$('.catalog__filter-heading').on('click', function () {
	$(this).parent().toggleClass('active')
	if ($(window).width() <= 922) {
		body.addClass('overflow-y_hidden')
	}
})

$('.catalog__filter-close').on('click', function () {
	$('.catalog__btn-heading, .catalog__filter').removeClass('active')
	$('.catalog__btn-dropdown').hide()

	body.removeClass('overflow-y_hidden')
})
// ----------

// Catalog text dropdown
$('.catalog__toggle-activator').on('click', function () {
	let catalogTextHeight = $('.catalog__text-inner').height()

	$(this).parent().addClass('active')
	$('.catalog__text').addClass('active').css('height', catalogTextHeight)
})

$('.catalog__toggle-deactivator').on('click', function () {
	$(this).parent().removeClass('active')
	$('.catalog__text').css('height', '44px').removeClass('active')
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

if ($('*').is('.select-search')) {
	$('.select-search').select2({
		templateResult: selectSpan,
		templateSelection: selectSpan,
		minimumResultsForSearch: -1,
		width: '100%',
		selectionCssClass: 'select__heading select__heading-search',
		dropdownCssClass: 'select__dropdown select__dropdown-search',
	})
}

if ($('*').is('.select-payment')) {
	$('.select-payment').select2({
		templateResult: selectSpan,
		templateSelection: selectSpan,
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
		return opt.text
	}

	let optimage = $(opt.element).attr('data-image')
	if (!optimage) {
		return opt.text
	} else {
		let $opt = $(
			'<span><img src="' +
				optimage +
				'" width="24px" /> ' +
				opt.text +
				'</span>'
		)
		return $opt
	}
}

function selectSpan(opt) {
	let $opt = $(`<span>${opt.text}</span>`)
	return $opt
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

$('input.company-name').on('input', function () {
	if ($(this).val().length !== 0) {
		$(this).closest('form').find('.vat-code').addClass('visible').animate(
			{
				top: '0',
			},
			200
		)
		$(this).parent().removeClass('_m-less')
	} else {
		$(this).closest('form').find('.vat-code').removeClass('visible')
		$(this).parent().addClass('_m-less')
	}
})

$('.data__form-activator').on('click', function () {
	$(this)
		.hide()
		.closest('form')
		.addClass('active')
		.find('input, select, textarea, button')
		.removeAttr('disabled')

	$(this).closest('form').find('.data__form-btn').addClass('visible')
	$(this).closest('form').find('._m-none').removeClass('_m-none')
})

$('.data__form').on('submit', function () {
	if ($(this).valid()) {
		$(this)
			.closest('form')
			.removeClass('active')
			.find('input, select, textarea')
			.attr('disabled', 'disabled')

		$(this).closest('form').find('.data__form-activator').show()
		$(this).closest('form').find('.data__form-btn').removeClass('visible')
	}
})

$('.sms-btn').on('click', function () {
	$('.verification-code').addClass('visible').animate(
		{
			top: '0',
		},
		200
	)
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
		touch: false,
		thumbs: {
			autoStart: true,
			axis: 'x',
		},
	})
}

$('.overview__slider-full').on('click', function () {
	$('.overview__slider-item').first().trigger('click')
})
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

// Page nav
$(window)
	.on('scroll', function () {
		var scrollDistance = $(window).scrollTop() + headerHeights

		$('.p-product section').each(function (i) {
			if ($(this).position().top <= scrollDistance) {
				$('.p-product .page-nav__item.active').removeClass('active')
				$('.p-product .page-nav__item').eq(i).addClass('active')
			}
		})
	})
	.scroll()

$('body').on('click', '.page-nav__item', function (event) {
	event.preventDefault()

	var id = $(this).attr('href'),
		top = $(id).offset().top

	if ($(window).width() > 1340) {
		$('body,html').animate({ scrollTop: top - headerHeights + 20 }, 0)
	} else {
		$('body,html').animate({ scrollTop: top - headerHeights }, 0)
	}
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

const postInput = $('.data__post-input input')
const postResult = $('.data__post-result')

postInput.on('click', function () {
	postResult.show()
})

$('body').on('click', function (event) {
	if (
		!postResult.is(event.target) &&
		postResult.has(event.target).length === 0 &&
		!postInput.is(event.target) &&
		postInput.has(event.target).length === 0
	) {
		postResult.hide()
	}
})

postInput.on('blur', function () {
	if ($(this).val().length == 0) {
		$(this).parent('.input-wrapper').addClass('active')
	}
})

$('.data__post-item').on('click', function () {
	const postIndex = $(this).data('value')
	postInput.val(postIndex).focus()

	postResult.hide()
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
	$('*').is('.input-card') ||
	$('*').is('.input-cvv')
) {
	$('.input-phone').inputmask({
		mask: '(999) 99 99 999',
		showMaskOnHover: false,
		placeholder: '',
	})

	$('.input-date').inputmask({
		mask: '99/99/9999',
		showMaskOnHover: false,
		placeholder: 'DD/MM/YYYY',
	})

	$('.input-card').inputmask({
		mask: '9999 9999 9999 9999',
		showMaskOnHover: false,
		placeholder: '',
	})
	$('.input-cvv').inputmask({
		mask: '999',
		showMaskOnHover: false,
		placeholder: '',
	})
}

if ($('*').is('.input-filter')) {
	$('.input-filter').inputmask({
		showMaskOnHover: false,
		placeholder: '',
	})
}
// ----------

// Cookie
$('.cookie-modal__btn').on('click', function () {
	$('.cookie-modal').hide()
})
// ----------

// Share product
const share = $('.overview__share')
const shareHeading = $('.overview__share-heading')
const shareLinks = $('.overview__share-dropdown')

shareHeading.on('click', function () {
	$(this).toggleClass('active').next().toggle()
})

$('.overview__share-close').on('click', function () {
	shareHeading.toggleClass('active').next().toggle()
})

$('body').on('click', function (event) {
	if (
		!share.is(event.target) &&
		share.has(event.target).length === 0 &&
		!shareLinks.is(event.target) &&
		shareLinks.has(event.target).length === 0
	) {
		shareHeading.removeClass('active').next().hide()
	}

	headerPosition()
})
// ----------

// Close modal
function closeModal(space, elem) {
	$('.body-inner').on('click', function (event) {
		if (
			!space.is(event.target) &&
			space.has(event.target).length === 0 &&
			!elem.is(event.target) &&
			elem.has(event.target).length === 0
		) {
			elem.hide().prev().removeClass('active')

			share.removeClass('active')
		}

		headerPosition()
	})
}

if ($(window).width() > 992) {
	closeModal(headerBtnWrapper, langsDropdown)
	closeModal(headerBtnWrapper, cart)
	closeModal(headerBtnWrapper, favorites)
}

closeModal(catalogBtn, sort)
closeModal(catalogBtn, filter)

$('body').on('click', function (event) {
	if (
		!headerMenu.is(event.target) &&
		headerMenu.has(event.target).length === 0 &&
		!menu.is(event.target) &&
		menu.has(event.target).length === 0
	) {
		menu.hide()
		$('.header__menu-category').removeClass('active')

		$('.header__menu-btn.active').removeClass('active').next().slideUp()
	}
})
// ----------

// Video
if ($('*').is('.video__frame')) {
	const videoOptions = {
		muted: true,
		volume: 0,
		autoplay: true,
	}

	const player = videojs('my-video', videoOptions)

	$(window).on('scroll', function () {
		if ($(window).width() > 992) {
			if ($('.video__frame').is(':in-viewport')) {
				player.play()
			} else {
				player.pause()
			}
		}
	})
}
// ----------

// Выезжающие блоки
$('.nav__inner-close, .aside__container-close, .main-plug').on('click', function () {
	$('.header__buttons-item').removeClass('active')
	$('.nav__inner, .aside__container-inner').removeClass('active')
	$('.main-plug').fadeOut()
	$('body').removeClass('overflow-hidden')
})

$('.header__buttons-menu').on('click', function () {
	$(this).addClass('active').siblings().removeClass('active')
	$('.nav__inner-menu').addClass('active').siblings().removeClass('active')
	$('.aside__container-inner').removeClass('active')
	$('.main-plug').fadeIn()
	$('body').addClass('overflow-hidden')
})

$('.header__buttons-portfolio').on('click', function () {
	$(this).addClass('active').siblings().removeClass('active')
	$('.nav__inner-portfolio').addClass('active').siblings().removeClass('active')
	$('.aside__container-inner').removeClass('active')
	$('.main-plug').fadeIn()
	$('body').addClass('overflow-hidden')
})

$('.header__buttons-rating').on('click', function () {
	$(this).addClass('active').siblings().removeClass('active')
	$('.aside__container-rating').addClass('active').siblings().removeClass('active')
	$('.nav__inner').removeClass('active')
	$('.main-plug').fadeIn()
	$('body').addClass('overflow-hidden')
})

$('.header__buttons-benefits').on('click', function () {
	$(this).addClass('active').siblings().removeClass('active')
	$('.aside__container-benefits').addClass('active').siblings().removeClass('active')
	$('.nav__inner').removeClass('active')
	$('.main-plug').fadeIn()
	$('body').addClass('overflow-hidden')
})
// eof

// Выпадающий список категорий портфолио
$('.nav__button').on('click', function () {
	$(this).toggleClass('active')
	$('.nav__dropdown').slideToggle()
	$('.nav').toggleClass('swiped')
})
// eof

// Галлерея на странице "О нас"
var backstageThumbsSlider = new Swiper('.backstage__thumbs-slider', {
	freeMode: true,
	speed: 500,
	// watchSlidesProgress: true,
	grabCursor: true,
	pagination: {
		el: '.backstage__thumbs-pagination',
		type: 'progressbar',
	},
	breakpoints: {
		0: {
			slidesPerView: 'auto',
			spaceBetween: 10,
		},
		768: {
			slidesPerView: 4,
			spaceBetween: 15,
		},
	},
})

var backstageMainSlider = new Swiper('.backstage__main-slider', {
	spaceBetween: 15,
	speed: 500,
	effect: 'cube',
	navigation: {
		nextEl: '.backstage__button-next',
		prevEl: '.backstage__button-prev',
	},
	thumbs: {
		swiper: backstageThumbsSlider,
	},
	breakpoints: {
		0: {
			allowTouchMove: true,
		},
		768: {
			allowTouchMove: false,
		},
	},
})
// eof

// Копирование ссылки шоурила
$('.copyboard').on('click', function (e) {
	$(this).addClass('active')

	setTimeout(() => {
		$(this).removeClass('active')
	}, 5000)

	e.preventDefault()

	var copyText = $(this).attr('data-link')

	var textarea = document.createElement('textarea')
	textarea.textContent = copyText
	textarea.style.position = 'fixed'
	document.body.appendChild(textarea)
	textarea.select()
	document.execCommand('copy')

	document.body.removeChild(textarea)
})
// eof

// Слайдер логотипов клиентов
var clientsSlider = new Swiper('.clients__slider', {
	spaceBetween: 25,
	speed: 1000,
	grabCursor: true,
	navigation: {
		nextEl: '.clients__button-next',
		prevEl: '.clients__button-prev',
	},
	breakpoints: {
		0: {
			spaceBetween: 10,
		},
		768: {
			spaceBetween: 25,
		},
	},
})
// eof

// Смена иконок при фокусе на поле
$('.contacts__form-input').on('focus', function () {
	$(this).parent().addClass('_focus')
})

$('.contacts__form-input').on('focusout', function () {
	$(this).parent().removeClass('_focus')
})
// eof

// Закрытие попапа
$('.contacts__popup-close').on('click', function () {
	$(this).closest('.contacts__popup-container').fadeOut()
})
// eof

// Воспроизведение видео
$('.project').on('click', function () {
	$(this).find('.project__video').fadeIn()
})
// eof

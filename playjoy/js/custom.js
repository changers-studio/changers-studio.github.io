jQuery(function () {
	$('form.s-form__form').on('submit', function () {
		var th = $(this)
		$.ajax({
			type: 'POST',
			url: 'mail.php',
			data: th.serialize(),
		}).done(function () {
			alert('Message sent')
			th.trigger('reset')
		})
		return false
	})

	$('.s-form__input._file').on('change', function () {
		if (this.value) {
			$('.s-form__input-wrap').addClass('active')
		} else {
			console.log('Файл не выбран')
		}
	})

	$(window).on('scroll', function () {
		var headerHeight = $('#header').height() - 1

		if ($(this).scrollTop() > headerHeight) {
			$('.header_sticky').fadeIn()
		} else if ($(this).scrollTop() < headerHeight) {
			$('.header_sticky').fadeOut()
		}

		AOS.refresh()
	})

	$(window).on('load', function () {
		var headerHeight = $('#header').height() - 1

		if ($(this).scrollTop() > headerHeight) {
			$('.header_sticky').fadeIn()
		} else if ($(this).scrollTop() < headerHeight) {
			$('.header_sticky').fadeOut()
		}

		AOS.refresh()
	})

	if ($(window).width() < 992) {
		$('.cooperation__slider, .localization-solutions__container').slick({
			infinite: true,
			slidesToShow: 1,
			lidesToScroll: 1,
			variableWidth: true,
			arrows: false,
			touchMove: false,
		})

		$('.roadmap__heading').on('click', function () {
			$(this).toggleClass('_active').next().slideToggle()
			$('.roadmap__heading').not(this).removeClass('_active').next().slideUp()
		})

		$('.solutions__container').slick({
			infinite: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: true,
			arrows: false,
			variableWidth: true,
			speed: 700,
			touchMove: false,
		})

		$('.creature__container').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			speed: 700,
			arrows: false,
			dots: true,
			touchMove: false,
			fade: true,
			autoplay: true,
			autoplaySpeed: 5000,
			infinite: true,
		})
	}

	$('.footer__to-top').on('click', function () {
		$('html, body').animate({ scrollTop: 0 }, 2000)
	})

	$('.our-clients__slider, .tech__slider').slick({
		arrows: false,
		slidesToShow: 5,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		speed: 700,
		centerMode: true,
		centerPadding: '0',
		touchMove: false,
		responsive: [
			{
				breakpoint: 992,
				settings: 'unslick',
			},
		],
	})

	$('.review__slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		infinite: true,
		speed: 700,
		centerMode: true,
		centerPadding: '0px',
		dots: true,
		touchMove: false,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1,
					arrows: false,
					fade: true,
				},
			},
		],
	})

	$('.preview__slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		speed: 700,
		centerMode: true,
		centerPadding: '150px',
		variableWidth: true,
		dots: true,
		touchMove: false,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					arrows: false,
					dots: false,
					centerPadding: '0',
				},
			},
		],
	})

	$('.art-main__slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		speed: 1000,
		autoplay: true,
		autoplaySpeed: 3000,
		fade: true,
		arrows: false,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					arrows: false,
					dots: false,
					centerPadding: '0',
				},
			},
		],
	})

	$('.games__slider').slick({
		infinite: true,
		speed: 700,
		dots: true,
		touchMove: false,
		autoplay: true,
		autoplaySpeed: 10000,
	})

	$('.project__image-slider').slick({
		infinite: true,
		speed: 700,
		touchMove: false,
	})
})

var body = $('body')
var hamburger = $('.header__hamburger')
var sidebar = $('.header__sidebar')
var sidebarClose = $('.header__sidebar-close')
var plug = $('.header__sidebar-plug')
var toggleSidebar = $(
	'.header__hamburger, .header__plug, .header__sidebar-close, .header__sidebar-plug'
)

toggleSidebar.on('click', function () {
	hamburger.toggleClass('_active')
	sidebarClose.toggleClass('_rotate')
	sidebar.toggleClass('_visible')
	plug.toggleClass('_visible')
	body.toggleClass('scroll_disable')
	$('.header__dropdown .dropdown__heading')
		.removeClass('_active')
		.next()
		.slideUp(300)
})

$('.header__button').on('click', function () {
	hamburger.removeClass('_active')
	sidebarClose.removeClass('_rotate')
	sidebar.removeClass('_visible')
	plug.removeClass('_visible')
	body.removeClass('scroll_disable')
})

$('ul.tabs__caption').on('click', 'li:not(.active)', function () {
	$(this)
		.addClass('active')
		.siblings()
		.removeClass('active')
		.closest('div.tabs')
		.find('div.tabs__content')
		.hide()
		.eq($(this).index())
		.fadeIn(500)
})

$('.dropdown__heading').on('click', function () {
	$(this).toggleClass('_active').next().slideToggle(300)
	$('.dropdown__heading').not(this).removeClass('_active').next().slideUp(300)
})

$('.dropdown__back-btn').on('click', function () {
	$(this)
		.closest('div.header__dropdown')
		.find('.dropdown__heading')
		.toggleClass('_active')
		.next()
		.slideToggle(300)
})

$('body').on('click', '.link-move', function (event) {
	event.preventDefault()
	var id = $(this).attr('href'),
		top = $(id).offset().top
	$('body,html').animate({ scrollTop: top - 50 }, 1500)
})

$('form input').on('change invalid', function () {
	var textfield = $(this).get(0)

	textfield.setCustomValidity('')

	if (!textfield.validity.valid) {
		textfield.setCustomValidity('Fill this line')
	}
})

$('.blog__caption-heading').on('click', function () {
	$(this).toggleClass('active').next().slideToggle()
})

if ($('.portfolio-item__img').length) {
	let mediaQuery = window.matchMedia('(max-width: 992px)')

	if (mediaQuery.matches) {
		$('.portfolio-item__img').fancybox({
			thumbs: {
				autoStart: true,
				axis: 'x',
			},
			infobar: true,
			buttons: ['close'],
			wheel: false,
			loop: false,

			helpers: {
				media: true,
			},
			youtube: {
				autoplay: 1,
			},
			beforeShow: function () {
				$('body').css({ 'overflow-y': 'hidden' })
				let item = this.src.split('/')
				let projectName = item[item.length - 2].slice(3)
				if (projectName.includes('_')) {
					let newStr = projectName.split('')
					let index = newStr.indexOf('_')
					newStr.splice(index, 1)
					projectName = newStr.join('')
				}
				let caption = document.querySelector('.fancybox-caption__body')
				if (projectName !== 'ed' && projectName !== 'view') {
					caption.innerHTML = projectName
				}
			},
			afterClose: function () {
				$('body').css({ 'overflow-y': 'visible' })
			},
		})
		// let list = document.querySelector('.fancybox-thumbs__list')
		// let listLink = document.querySelectorAll('.fancybox-thumbs__list a')
		// console.log(list, listLink);
	} else {
		$('.portfolio-item__img').fancybox({
			thumbs: {
				autoStart: true,
				axis: 'y',
			},
			infobar: true,
			buttons: ['close'],
			wheel: true,
			loop: true,
			touch: {
				horizontal: true, // Allow to drag content vertically
				momentum: true, // Continue movement after releasing mouse/touch when panning
			},

			helpers: {
				media: true,
			},
			youtube: {
				autoplay: 1,
			},
			// onInit: function () {
			// 	console.log($());
			// },
			beforeShow: function () {
				$('html').css({ 'overflow-y': 'hidden' })
				let item = this.src.split('/')
				let projectName = item[item.length - 2].slice(3)
				if (projectName.includes('_')) {
					let newStr = projectName.split('')
					let index = newStr.indexOf('_')
					newStr.splice(index, 1)
					projectName = newStr.join('')
				}
				let caption = document.querySelector('.fancybox-caption__body')
				if (projectName !== 'ed' && projectName !== 'view') {
					caption.innerHTML = projectName
				}
			},
			afterClose: function () {
				$('html').css({ 'overflow-y': 'visible' })
			},
		})
	}
}

let allLinks = document.querySelectorAll('a[alt="image"]')
allLinks.forEach((link) => {
	link.removeAttribute('alt')
})

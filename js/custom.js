jQuery(function () {
	$('.magnific-popup, .success-form__button').magnificPopup({
		removalDelay: 350,
		mainClass: 'mfp-fade',
	})

	if ($('*').is('input[type="tel"]')) {
		$('input[type=tel]').inputmask({
			mask: '+38 (099) 999 99 99',
			placeholder: '+38 (0__) ___-__-__',
		})
	}
})

$('.sidebarActivator').on('click', function () {
	$('.sidebar').fadeToggle('slow')
	$('body').toggleClass('scroll_disable')
})

$('ul.tabs__caption').on('click', 'li:not(.active)', function () {
	$(this)
		.addClass('active')
		.siblings()
		.removeClass('active')
		.closest('div.tabs')
		.find('div.tabs__content')
		.fadeOut(300)
		.eq($(this).index())
		.delay(300)
		.fadeIn(300)
})

$('.sidebar__about-heading').on('click', function () {
	$('.sidebar__about-content').addClass('active')
	$('.sidebar__services-content').removeClass('active')
})

$('.sidebar__services-heading').on('click', function () {
	$('.sidebar__services-content').addClass('active')
	$('.sidebar__about-content').removeClass('active')
})

$('.popup form').on('submit', function () {
	var th = $(this)
	$.ajax({
		type: 'POST',
		url: 'mail.php',
		data: th.serialize(),
	}).done(function () {
		$(th).find('.success-form').css('display', 'flex').hide().fadeIn()

		setTimeout(function () {
			th.trigger('reset')
		}, 500)
	})
	return false
})

function closePopup() {
	$.magnificPopup.close()
	$('.popup .success-form').fadeOut()
}

$('.form form').on('submit', function () {
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

$('.lang__heading').on('click', function () {
	$(this).toggleClass('_active').next().slideToggle()
})

$(document).on('mouseup', function (e) {
	let lang = $('.header__lang')

	if (!lang.is(e.target) && lang.has(e.target).length === 0) {
		$('.lang__heading').removeClass('_active')
		$('.lang__dropdown').slideUp()
	}
})

$('body').on('click', '.scroll-down', function (event) {
	event.preventDefault()
	var id = $(this).attr('href'),
		top = $(id).offset().top
	$('body,html').animate({ scrollTop: top }, 1000)
})

$(function () {
	//E-mail Ajax Send
	$('form').submit(function () {
		//Change
		var th = $(this)
		$.ajax({
			type: 'POST',
			url: 'mail.php', //Change
			data: th.serialize(),
		}).done(function () {
			alert('Thank you!')
			setTimeout(function () {
				// Done Functions
				th.trigger('reset')
			}, 1000)
		})
		return false
	})

	if ($('*').is('#parallax') && $(window).width() > 992) {
		const parallax = document.querySelector('#parallax')
		onmousemove = (e) => {
			const x = innerWidth / 2 - e.x
			const y = innerHeight / 2 - e.y
			parallax.style.transform = `translate(${x / 50}px, ${y / 50}px)`
		}
	}
})

// fullpage
var fullpageActive = false
function windowSize() {
	if ($(window).width() > 992 && !fullpageActive) {
		new fullpage('#fullpage', {
			navigation: false,
			lockAnchors: true,
			scrollingSpeed: 1000,
			responsiveWidth: 992,
			css3: true,
			afterLoad: function (origin, destination, direction) {
				if (origin.index == 3 && direction == 'down') {
					fullpage_api.setAutoScrolling(false)
				}
			},
			onLeave: function (origin, destination, direction) {
				if (origin.index == 4 && direction == 'up') {
					fullpage_api.setAutoScrolling(true)
				}

				if (origin.index == 1 && direction == 'up') {
					$('.button-up').fadeOut()
				}

				if (origin.index == 0 && direction == 'down') {
					$('.button-up').fadeIn()
				}
			},
		})
		fullpageActive = true
	} else if ($(window).width() < 992 && fullpageActive) {
		$.fn.fullpage.destroy('all')
		fullpageActive = false
	}
}

$(window).on('load resize', windowSize)
// eof

// Dropdown в меню шапки
let headerDropdown = $('.header__menu-dropdown')

if ($(window).width() < 992) {
	headerDropdown.on('click', function () {
		$(this).toggleClass('active').find('.header__menu-dropdown-body').slideToggle(300)
		$(this)
			.siblings()
			.removeClass('active')
			.find('.header__menu-dropdown-body')
			.slideUp(300)
	})

	$(document).on('mouseup', function (event) {
		if (
			!headerDropdown.is(event.target) &&
			headerDropdown.has(event.target).length === 0
		) {
			headerDropdown
				.removeClass('active')
				.find('.header__menu-dropdown-body')
				.slideUp(300)
		}
	})
} else {
	headerDropdown.on('click', function () {
		$(this).toggleClass('active').find('.header__menu-dropdown-body').fadeToggle(300)
		$(this)
			.siblings()
			.removeClass('active')
			.find('.header__menu-dropdown-body')
			.fadeOut(300)
	})

	$(document).on('mouseup', function (event) {
		if (
			!headerDropdown.is(event.target) &&
			headerDropdown.has(event.target).length === 0
		) {
			headerDropdown
				.removeClass('active')
				.find('.header__menu-dropdown-body')
				.fadeOut(300)
		}
	})
}

// eof

// Hamburger menu
$('.header__hamburger').on('click', function () {
	$('.header__hamburger').toggleClass('is-active')
	$('.header__menu').toggleClass('active')
	$('.header__menu-plug').fadeToggle()
	$('body').toggleClass('scroll__disabled')
})
// eof

// Buttom to top
$('.button-up').on('click', function () {
	fullpage_api.moveTo(1)
	$(this).fadeOut()
})
// eof

// Json animation
lottie.loadAnimation({
	container: document.getElementById('shadowAnimation-1'),
	renderer: 'svg',
	loop: true,
	autoplay: true,
	path: 'animation/home__shadow-image.json',
})

lottie.loadAnimation({
	container: document.getElementById('shadowAnimation-2'),
	renderer: 'svg',
	loop: true,
	autoplay: true,
	path: 'animation/home__shadow-image.json',
})

lottie.loadAnimation({
	container: document.getElementById('shadowAnimation-3'),
	renderer: 'svg',
	loop: true,
	autoplay: true,
	path: 'animation/home__shadow-image.json',
})

lottie.loadAnimation({
	container: document.getElementById('homeAboutAnimation'),
	renderer: 'svg',
	loop: true,
	autoplay: true,
	path: 'animation/home__our-story.json',
})

lottie.loadAnimation({
	container: document.getElementById('animationGlazing'),
	renderer: 'svg',
	loop: true,
	autoplay: true,
	path: 'animation/glazing__main-screen.json',
})

lottie.loadAnimation({
	container: document.getElementById('animationCladding'),
	renderer: 'svg',
	loop: true,
	autoplay: true,
	path: 'animation/cladding__main-screen.json',
})

lottie.loadAnimation({
	container: document.getElementById('animationArchitectural'),
	renderer: 'svg',
	loop: true,
	autoplay: true,
	path: 'animation/architectural-panels.json',
})

lottie.loadAnimation({
	container: document.getElementById('animationWood'),
	renderer: 'svg',
	loop: true,
	autoplay: true,
	path: 'animation/wood-siding.json',
})

lottie.loadAnimation({
	container: document.getElementById('animationCement'),
	renderer: 'svg',
	loop: true,
	autoplay: true,
	path: 'animation/cement.json',
})

lottie.loadAnimation({
	container: document.getElementById('animationSteel'),
	renderer: 'svg',
	loop: true,
	autoplay: true,
	path: 'animation/steel.json',
})

lottie.loadAnimation({
	container: document.getElementById('animationAluminium'),
	renderer: 'svg',
	loop: true,
	autoplay: true,
	path: 'animation/aluminium-panels.json',
})

lottie.loadAnimation({
	container: document.getElementById('ourTeamAnimation'),
	renderer: 'svg',
	loop: true,
	autoplay: true,
	path: 'animation/our-team.json',
})
// eof

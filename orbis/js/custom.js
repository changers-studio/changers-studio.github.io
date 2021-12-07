$(function () {
	if ($('*').is('#parallax') && $(window).width() > 992) {
		const parallax = document.querySelector('#parallax')
		onmousemove = (e) => {
			const x = innerWidth / 2 - e.x
			const y = innerHeight / 2 - e.y
			parallax.style.transform = `translate(${x / 40}px, ${y / 40}px)`
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
$('.header__menu-dropdown').on('click', function () {
	$(this).toggleClass('active').find('.header__menu-dropdown-body').slideToggle(300)
	$(this)
		.siblings()
		.removeClass('active')
		.find('.header__menu-dropdown-body')
		.slideUp(300)
})
// eof

// Hamburger menu
$('.header__hamburger').on('click', function () {
	$(this).toggleClass('is-active')
	$('.header__menu').slideToggle()
})
// eof

// Json animation

// Home page
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
// eof

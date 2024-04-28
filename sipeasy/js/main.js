// Smooth scroll
ScrollSmoother.create({
	smooth: 1.5,
	speed: 0.8,
	effects: true,
})
//

// Preloader
if ($('*').is('.preloader')) {
	setTimeout(() => {
		$('.preloader__logo').css('transform', 'scale(5)')
		$('.preloader').fadeToggle(1000)
	}, 1500)
}
//

// AOS
AOS.init({
	duration: 1000,
	once: true,
})

window.addEventListener('load scroll', () => {
	AOS.refresh()
})
//

// Remove aos delay on mobile
if (window.innerWidth <= 960) {
	document.querySelectorAll('[data-aos-delay]').forEach((item) => {
		item.removeAttribute('data-aos-delay')
	})
}
//

// Hamburger
$('.header__hamburger').on('click', function () {
	$('.header__hamburger').toggleClass('active')
	$('.header__menu-wrapper').fadeToggle()
	$('body').toggleClass('scroll-disabled')
})
//

// Phone number mask
if ($('*').is('input[type="tel"]')) {
	$('input[type=tel]').inputmask({
		mask: '+9999999999999',
		showMaskOnHover: false,
		placeholder: '',
	})
}
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
		dropdownBody.slideUp().prev().removeClass('active')
	}
})
//

// Blog back btn
if ($('*').is('.main__btn')) {
	gsap.to('.main__btn', {
		duration: 1,
		translateX: '150%',
		ease: 'power4.out',
		scrollTrigger: {
			trigger: '.footer',
			start: 'top bottom',
			end: 'top 75%',
			scrub: true,
		},
	})
}
//

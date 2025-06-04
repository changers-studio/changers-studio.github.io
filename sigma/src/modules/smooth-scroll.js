import gsap from 'gsap'
import ScrollSmoother from 'gsap/ScrollSmoother'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

var smoother = ScrollSmoother.create({
	smooth: 3,
	speed: 0.5,
})

// Scroll to sections
const scrollToBtns = document.querySelectorAll('.scroll-to')
const scrollToSection = (offset) => {
	gsap.to(smoother, {
		scrollTop: offset,
		duration: 2,
	})
}

if (scrollToBtns) {
	scrollToBtns.forEach((btn) => {
		btn.addEventListener('click', () => {
			let section = btn.dataset.scrollTo
			let offset = smoother.offset(`#${section}`, 'top top')

			scrollToSection(offset)
		})
	})
}

window.addEventListener('load', () => {
	if (window.location.hash !== '') {
		let section = window.location.hash
		let offset = smoother.offset(section, 'top top')
		scrollToSection(offset)
	}
})
//

export { smoother }

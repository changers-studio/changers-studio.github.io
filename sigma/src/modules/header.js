import { desktop } from './check.js'
import { smoother } from './smooth-scroll.js'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

const header = document.querySelector('.header')
const hamburgerMenu = document.querySelector('.header__menu-container')
const hamburgerBtn = document.querySelector('.header__menu-btn')
const hamburgerTrigger = document.querySelectorAll(
	'.header__menu-btn, .header__menu-item, .header__menu-close, .header__menu-link'
)

// Hamburger menu
hamburgerTrigger.forEach((btn) => {
	btn.addEventListener('click', () => {
		hamburgerBtn.classList.toggle('active')
		header.classList.toggle('active')
		hamburgerMenu.classList.toggle('active')

		if (!desktop) {
			if (hamburgerBtn.classList.contains('active')) {
				smoother.paused(true)
			} else {
				smoother.paused(false)
			}
		}
	})
})

if (desktop) {
	document.addEventListener('mouseup', (e) => {
		if (!e.target.closest('.header__menu')) {
			hamburgerBtn.classList.remove('active')
			header.classList.remove('active')
			hamburgerMenu.classList.remove('active')

			smoother.paused(false)
		}
	})
}
//

// Show/hide on scroll
gsap.to(header, {
	duration: 0.5,
	backgroundColor: 'rgba(0, 0, 0, 0.2)',
	backdropFilter: 'blur(5rem)',
	padding: 0,
	onStart: () => {
		header.classList.add('fixed')
	},
	onReverseComplete: () => {
		header.classList.remove('fixed')
	},
	scrollTrigger: {
		trigger: '.header',
		start: '10% top',
		end: '50% top',
		scrub: true,
	},
})

window.addEventListener('load', () => {
	ScrollTrigger.create({
		trigger: '.overflow-hidden',
		start: 'top top',
		onUpdate: (self) => {
			if (self.direction == -1) {
				header.classList.remove('hidden')
			} else if (self.direction == 1 && window.pageYOffset >= window.innerHeight / 5) {
				header.classList.add('hidden')
				hamburgerBtn.classList.remove('active')
				header.classList.remove('active')
				hamburgerMenu.classList.remove('active')

				smoother.paused(false)
			}
		},
	})
})
//

// Show on hover
if (desktop) {
	header.addEventListener('mouseover', () => {
		header.classList.add('mouseOver')
	})

	header.addEventListener('mouseleave', () => {
		header.classList.remove('mouseOver')
	})
}
//

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import MotionPathPlugin from 'gsap/MotionPathPlugin'

import { desktop } from './check'

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin)

ScrollTrigger.normalizeScroll({
	allowNestedScroll: true,
	type: 'touch,wheel,pointer',
})

if (document.body.classList.contains('home')) {
	// Text animation
	const animationTargets = document.querySelectorAll('.fade-up')

	animationTargets.forEach((item) => {
		gsap.to(item, {
			translateY: '0rem',
			opacity: 1,
			duration: 0.7,
			ease: 'power4.inOut',
			scrollTrigger: {
				trigger: item,
				start: 'top 90%',
			},
		})
	})
	//

	// Hero section
	if (desktop) {
		const heroTl = gsap.timeline({
			default: {
				duration: 1,
				ease: 'power4.out',
			},
		})
		const heroTlScroll = gsap.timeline({
			scrollTrigger: {
				trigger: '.hero',
				start: 'bottom 85%',
				end: 'bottom -30%',
				scrub: true,
			},
		})
		const heroText = document.querySelectorAll('.hero__title, .stats__item-text')

		gsap.set('.hero', {
			translateY: '-200rem',
			opacity: 0,
		})

		gsap.set(heroText, {
			translateY: '10rem',
			opacity: 0,
		})

		gsap.set('.advantages', {
			translateY: '10rem',
			opacity: 0,
		})

		heroTl
			.to('.hero', { translateY: '0rem', opacity: 1 }, 0)
			.to(heroText, { translateY: '0rem', opacity: 1 }, '>')

		heroTlScroll
			.to('.hero__wrapper', { translateY: '-300rem', opacity: 0 }, 0)
			.to('.fade-left', { translateX: '-300rem', opacity: 0 }, '<')
			.to('.fade-right', { translateX: '300rem', opacity: 0 }, '<')
			.to('.advantages', { translateY: '0rem', opacity: 1 }, '<+=0.5')
	}
	//

	// Numbers counter
	const numbers = document.querySelectorAll('.number')
	function numberWithCommas(x) {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
	}

	numbers.forEach((number) => {
		gsap.to(number, {
			textContent: number.dataset.num,
			duration: 2,
			delay: 0.5,
			ease: 'power1.in',
			snap: { textContent: 1 },
			stagger: {
				each: 0.03,
				onUpdate: function () {
					this.targets()[0].innerHTML = numberWithCommas(
						Math.ceil(this.targets()[0].textContent)
					)
				},
			},
			scrollTrigger: {
				trigger: number,
				start: 'top 90%',
			},
		})
	})
	//

	// Stats ticker mobile
	if (!desktop) {
		window.addEventListener('load', () => {
			gsap
				.timeline({
					repeat: -1,
					defaults: {
						duration: 10,
						ease: 'none',
					},
				})
				.to(
					'.stats__container-inner',
					{
						transform: 'translateX(calc(-100% + 360rem))',
					},
					0
				)
				.to(
					'.stats__container-inner',
					{
						transform: 'translateX(0%)',
					},
					'>'
				)
		})
	}
	//

	// Advantages
	const advantagesItmes = document.querySelectorAll('.advantages__item')
	const advantagesItmesInner = document.querySelectorAll('.advantages__item-inner')

	if (desktop) {
		gsap.set('.advantages__item-heading, .advantages__item-text', {
			translateY: '10rem',
			opacity: 0,
		})

		gsap.set(advantagesItmes, {
			opacity: 0,
		})

		advantagesItmes.forEach((item) => {
			const itemTl = gsap.timeline({
				defaults: {
					duration: 1,
					translateY: 0,
				},
				scrollTrigger: {
					trigger: item,
					start: 'top 80%',
					end: 'top 40%',
					scrub: true,
				},
			})
			const itemText = item.querySelectorAll(
				'.advantages__item-heading, .advantages__item-text'
			)

			itemTl
				.to(
					item,
					{
						opacity: 1,
					},
					0
				)
				.to(
					itemText,
					{
						opacity: 1,
					},
					'<+=0.8'
				)
		})

		advantagesItmesInner.forEach((item) => {
			gsap.to(item, {
				opacity: 0,
				scrollTrigger: {
					trigger: item,
					start: 'bottom center',
					end: 'bottom 10%',
					scrub: true,
				},
			})
		})
	}

	if (!desktop) {
		advantagesItmes.forEach((item) => {
			gsap.to(item, {
				opacity: 0,
				scrollTrigger: {
					trigger: item,
					start: 'top 5%',
					end: 'bottom top',
					pin: true,
					scrub: true,
				},
			})
		})
	}
	//

	// About
	if (desktop) {
		gsap.set('.about__video', {
			scale: 3,
		})

		gsap
			.timeline({
				scrollTrigger: {
					trigger: '.about__container',
					start: 'center center',
					end: 'bottom+=150% top',
					pin: true,
					scrub: true,
				},
			})
			.to(
				'.about__video',
				{
					scale: 1,
					transform: 'translate(-50%, -50%)',
				},
				0
			)
			.to(
				'.about',
				{
					duration: 1,
				},
				'>'
			)
	}
	//

	// Tokens
	const tokensLeft = document.querySelectorAll('.tokens__items-1 .tokens__item')
	const tokensRight = document.querySelectorAll('.tokens__items-2 .tokens__item')

	gsap.to(tokensLeft, {
		ease: 'none',
		stagger: 0.075,
		scrollTrigger: {
			trigger: '.tokens',
			start: 'top bottom',
			end: 'bottom top',
			scrub: true,
		},
		motionPath: {
			path: '#motionPathLeft',
			align: '#motionPathLeft',
			autoRotate: false,
			alignOrigin: [0.5, 0.5],
		},
	})

	gsap.to(tokensRight, {
		ease: 'none',
		stagger: 0.075,
		scrollTrigger: {
			trigger: '.tokens',
			start: 'top bottom',
			end: 'bottom top',
			scrub: true,
		},
		motionPath: {
			path: '#motionPathRight',
			align: '#motionPathRight',
			autoRotate: false,
			alignOrigin: [0.5, 0.5],
		},
	})
	//

	// Features
	// const featuresContainers = document.querySelectorAll('.features__row-inner')
	const featuresItemes = document.querySelectorAll('.features__item')

	// if (desktop) {
	// 	featuresContainers.forEach((container) => {
	// 		const items = container.querySelectorAll('.features__item')
	// 		const defaultState = () => {
	// 			items.forEach((item) => {
	// 				item.classList = 'features__item'
	// 			})
	// 		}

	// 		items.forEach((item, index) => {
	// 			item.addEventListener('mouseover', () => {
	// 				item.classList.add('active')

	// 				if (index == 0) {
	// 					items[1].classList.add('not-active-1')
	// 					items[2].classList.add('not-active-2')
	// 					items[3].classList.add('not-active-3')
	// 				} else if (index == 1) {
	// 					items[0].classList.add('not-active-1')
	// 					items[2].classList.add('not-active-3')
	// 					items[3].classList.add('not-active-2')
	// 				} else if (index == 2) {
	// 					items[0].classList.add('not-active-2')
	// 					items[1].classList.add('not-active-3')
	// 					items[3].classList.add('not-active-1')
	// 				} else if (index == 3) {
	// 					items[0].classList.add('not-active-3')
	// 					items[1].classList.add('not-active-2')
	// 					items[2].classList.add('not-active-1')
	// 				}
	// 			})

	// 			item.addEventListener('mouseleave', () => {
	// 				defaultState()
	// 			})
	// 		})
	// 	})
	// }

	if (!desktop) {
		gsap.set(featuresItemes, {
			opacity: 0,
		})

		featuresItemes.forEach((item) => {
			gsap.to(item, {
				opacity: 1,
				scrollTrigger: {
					trigger: item,
					start: 'bottom bottom',
					end: 'bottom 40%',
					scrub: true,
				},
			})
		})
	}
	//
}

import { gsap } from 'gsap'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Swiper, { Navigation } from 'swiper'

const importAll = (r) => r.keys().forEach(r)
importAll(require.context('../partials/', true, /\.js$/))
;('use strict')

if (typeof gsap !== 'undefined') {
	gsap.registerPlugin(MotionPathPlugin, ScrollTrigger)
}

;(function injectSprite(window, document) {
	if (!window || !document || !window.file) return
	if (
		!document.createElementNS ||
		!document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect
	) {
		return
	}

	var isLocalStorage = 'localStorage' in window && window.localStorage !== null
	var request
	var data

	function insert() {
		if (document.body) {
			document.body.insertAdjacentHTML('afterbegin', data)
		} else {
			document.addEventListener('DOMContentLoaded', function () {
				document.body.insertAdjacentHTML('afterbegin', data)
			})
		}
	}

	if (isLocalStorage && localStorage.getItem('inlineSVGrev') === window.revision) {
		data = localStorage.getItem('inlineSVGdata')
		if (data) {
			insert()
			return
		}
	}

	try {
		request = new XMLHttpRequest()
		request.open('GET', window.file, true)
		request.onload = function () {
			if (request.status >= 200 && request.status < 400) {
				data = request.responseText
				insert()
				if (isLocalStorage) {
					localStorage.setItem('inlineSVGdata', data)
					localStorage.setItem('inlineSVGrev', window.revision)
				}
			}
		}
		request.send()
	} catch (e) {
		// noop
	}
})(window, document)

function initLenis() {
	if (typeof Lenis === 'undefined') return

	var lenis = new Lenis({
		smoothWheel: true,
		smoothTouch: false,
		lerp: 0.1,
	})

	window.lenis = lenis

	function raf(time) {
		lenis.raf(time)
		requestAnimationFrame(raf)
	}
	requestAnimationFrame(raf)
}

document.addEventListener('DOMContentLoaded', function () {
	initLenis()
})

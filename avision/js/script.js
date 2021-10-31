// ТАЙМЕР НАЧАЛО

document.addEventListener('DOMContentLoaded', function () {
	// конечная дата, например 1 июля 2021
	const deadline = new Date(2021, 10, 28)
	// id таймера
	let timerId = null
	// склонение числительных
	function declensionNum(num, words) {
		return words[
			num % 100 > 4 && num % 100 < 20
				? 2
				: [2, 0, 1, 1, 1, 2][num % 10 < 5 ? num % 10 : 5]
		]
	}
	// вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов
	function countdownTimer() {
		const diff = deadline - new Date()
		if (diff <= 0) {
			clearInterval(timerId)
		}
		const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0
		const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0
		const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0
		const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0
		$days.textContent = days < 10 ? '0' + days : days
		$hours.textContent = hours < 10 ? '0' + hours : hours
		$minutes.textContent = minutes < 10 ? '0' + minutes : minutes
		$seconds.textContent = seconds < 10 ? '0' + seconds : seconds
		$days.dataset.title = declensionNum(days, ['DAY', 'DAYS', 'DAYS'])
		$hours.dataset.title = declensionNum(hours, ['HOUR', 'HOURS', 'HOUR'])
		$minutes.dataset.title = declensionNum(minutes, ['MINUTES', 'MINUTES', 'MINUTES'])
		$seconds.dataset.title = declensionNum(seconds, ['SECONDS', 'SECONDS', 'SECONDS'])
	}
	// получаем элементы, содержащие компоненты даты
	const $days = document.querySelector('.timer__days')
	const $hours = document.querySelector('.timer__hours')
	const $minutes = document.querySelector('.timer__minutes')
	const $seconds = document.querySelector('.timer__seconds')
	// вызываем функцию countdownTimer
	countdownTimer()
	// вызываем функцию countdownTimer каждую секунду
	timerId = setInterval(countdownTimer, 1000)
})

// ТАЙМЕР КОНЕЦ

//  ТАБЫ В СЛАЙДЕРЕ
function openCity(evt, cityName) {
	var i, tabcontent, tablinks

	// Получите все элементы с помощью class = "tabcontent" и скройте их
	tabcontent = document.getElementsByClassName('tabcontent')
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = 'none'
	}

	// Получите все элементы с помощью class = "tablinks" и удалите класс "active"

	tablinks = document.getElementsByClassName('tablinks')
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(' active', '')
	}

	// Показать текущую вкладку и добавить «активный» класс к ссылке, открывшей вкладку.

	document.getElementById(cityName).style.display = 'block'
	evt.currentTarget.className += ' active'
}
// КОНЕЦ  ТАБОВ В СЛАЙДЕРЕ

// ИНИЦИАЛИЗАЦИЯ  СЛАЙДЕРА

var swiper = new Swiper('.swiper', {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	observer: true,
	observeParents: true,
})

// КОНЕЦ  СЛАЙДЕРА
//  БЛОК ВИДЕО
const videoBtn = document.querySelector('#video-story-btn')
const videoBtnIcon = document.querySelector('#video-story-btn-icon')
const videoOverlay = document.querySelector('#video-story-overlay')
const videoFile = document.querySelector('#video-story')

videoBtn.addEventListener('click', function () {
	function toggleOverlay(event) {
		if (event.type === 'mouseleave') {
			videoOverlay.classList.add('hidden')
		} else {
			videoOverlay.classList.remove('hidden')
		}
	}

	if (videoFile.paused) {
		videoFile.play()
		videoBtnIcon.src = 'img/pause-video.png'

		videoOverlay.onmouseleave = toggleOverlay
		videoOverlay.onmouseenter = toggleOverlay
	} else {
		videoFile.pause()
		videoBtnIcon.src = 'img/video-play-btn.png'
		videoOverlay.onmouseleave = null
		videoOverlay.onmouseenter = null
	}
})
// КОНЕЦ  БЛОКА ВИДЕО

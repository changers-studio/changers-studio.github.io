let cursor = document.createElement('div')
document.body.appendChild(cursor)
cursor.classList.add('cursor')

const updateProperties = (elem, state) => {
	elem.style.setProperty('--x', `${state.x}px`)
	elem.style.setProperty('--y', `${state.y}px`)
	elem.style.setProperty('--width', `${state.width}px`)
	elem.style.setProperty('--height', `${state.height}px`)
	elem.style.setProperty('--radius', state.radius)
	elem.style.setProperty('--scale', state.scale)
}

document.querySelectorAll('.cursor').forEach((cursor) => {
	let onElement

	const createState = (e) => {
		const defaultState = {
			x: e.clientX,
			y: e.clientY,
			width: 16,
			height: 16,
			radius: '50%',
		}

		const computedState = {}

		if (onElement != null) {
			computedState.width = 0
			computedState.height = 0
		}

		return {
			...defaultState,
			...computedState,
		}
	}

	document.addEventListener('mousemove', (e) => {
		const state = createState(e)
		updateProperties(cursor, state)
	})

	document.querySelectorAll('a, button, label, input').forEach((elem) => {
		elem.addEventListener('mouseenter', () => (onElement = elem))
		elem.addEventListener('mouseleave', () => (onElement = undefined))
	})
})

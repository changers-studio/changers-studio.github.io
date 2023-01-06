let autocomplete
let searchField
let address1Field
let postalField
let cityField

function initAutocomplete() {
	searchField = document.querySelector('#googlesearch')
	address1Field = document.querySelector('#address1')
	postalField = document.querySelector('#postal_code')
	cityField = document.querySelector('#locality')

	autocomplete = new google.maps.places.Autocomplete(searchField, {
		fields: ['address_components', 'geometry'],
		types: ['address'],
	})

	autocomplete.addListener('place_changed', fillInAddress)
}

function fillInAddress() {
	const place = autocomplete.getPlace()
	let address1 = ''
	let postcode = ''

	for (const component of place.address_components) {
		const componentType = component.types[0]

		switch (componentType) {
			case 'street_number': {
				address1 = `${component.long_name} ${address1}`
				break
			}

			case 'route': {
				address1 += component.short_name
				break
			}

			case 'postal_code': {
				postcode = `${component.long_name}${postcode}`
				break
			}

			case 'postal_code_suffix': {
				postcode = `${postcode}-${component.long_name}`
				break
			}
			case 'locality': {
				cityField.value = component.long_name

				break
			}

			// case 'country': {
			// 	document.querySelector('#country').value = component.long_name
			// 	break
			// }
		}
	}

	address1Field.value = address1
	postalField.value = postcode

	cityField.focus()
	address1Field.focus()
	postalField.focus()
}

window.initAutocomplete = initAutocomplete

//! ----------------------------------------------------------------------------

let autocomplete2
let searchField2
let address1Field2
let postalField2
let cityField2

function initAutocompleteb() {
	searchField2 = document.querySelector('#googlesearchb')
	address1Field2 = document.querySelector('#address1b')
	postalField2 = document.querySelector('#postal_codeb')
	cityField2 = document.querySelector('#localityb')

	autocomplete2 = new google.maps.places.Autocomplete(searchField2, {
		fields: ['address_components', 'geometry'],
		types: ['address'],
	})

	autocomplete2.addListener('place_changed', fillInAddressb)
}

function fillInAddressb() {
	const placeb = autocomplete2.getPlace()
	let address1b = ''
	let postcodeb = ''

	for (const componentb of placeb.address_components) {
		const componentTypeb = componentb.types[0]

		switch (componentType) {
			case 'street_number': {
				address1b = `${componentb.long_name} ${address1b}`
				break
			}

			case 'route': {
				address1b += componentb.short_name
				break
			}

			case 'postal_code': {
				postcode = `${componentb.long_name}${postcodeb}`
				break
			}

			case 'postal_code_suffix': {
				postcodeb = `${postcodeb}-${componentb.long_name}`
				break
			}
			case 'locality': {
				cityField2.value = componentb.long_name

				break
			}

			// case 'country': {
			// 	document.querySelector('#country').value = component.long_name
			// 	break
			// }
		}
	}

	address1Field2.value = address1b
	postalField2.value = postcodeb

	cityField2.focus()
	address1Field2.focus()
	postalField2.focus()
}

window.initAutocompleteb = initAutocompleteb

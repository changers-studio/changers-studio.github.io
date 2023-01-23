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

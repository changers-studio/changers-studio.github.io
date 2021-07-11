jQuery(function () {
	// code
})

// Sidebar
let sidebar = $('.sidebar')
let toggleSidebar = $('.header .hamburger, .sidebar__close')

toggleSidebar.on('click', function () {
	sidebar.toggleClass('visible')
})
//

// Dropdown
$('.dropdown__heading').on('click', function () {
	$(this).toggleClass('_active').next().slideToggle()
	$('.dropdown__heading').not(this).removeClass('_active').next().slideUp()
})

// Button to top
$('body').on('click', '.link_move', function (event) {
	event.preventDefault()
	var id = $(this).attr('href'),
		top = $(id).offset().top
	$('body,html').animate({ scrollTop: top - 50 }, 1500)
})

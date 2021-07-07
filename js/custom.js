jQuery(function () {
	// code
})

let sidebar = $('.sidebar')
let toggleSidebar = $('.header .hamburger, .sidebar__close')

toggleSidebar.on('click', function () {
	sidebar.toggleClass('visible')
})

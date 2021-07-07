jQuery(function () {
	new fullpage('#fullpage', {
		navigation: false,
		menu: '#fullpageMenu',
		lockAnchors: false,
		responsiveWidth: 700,
		parallax: true,
		responsiveWidth: 992,
		afterLoad: function (origin, destination, direction) {
			if ($('section.news').hasClass('active')) {
				$('.fullpage-menu').addClass('dark')
			} else {
				$('.fullpage-menu').removeClass('dark')
			}
		},
	})
})

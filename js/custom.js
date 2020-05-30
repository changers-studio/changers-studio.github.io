	$('ul.tabs').on('click', 'li:not(.active)', function() {
		$(this).addClass('active').siblings().removeClass('active')
		.closest('div.bottom-site').find('div.tab-content').removeClass('active').eq($(this).index()).addClass('active');
	});

	$('.tab1').click(function(){
		$('.top-side').css('background-image', 'url("img/top-bg.png")');
		$('.top-side .title, .top-side .subtitle, .top-side h1').show();
	});

	$('.tab2').click(function(){
		$('.top-side').css('background-image', 'url("img/top-bg2.png")');
		$('.top-side .title, .top-side .subtitle, .top-side h1').show();
	});

	$('.tab3').click(function(){
		$('.top-side').css('background-image', 'url("img/top-bg3.png")');
		$('.top-side .title, .top-side .subtitle, .top-side h1').hide();
	});


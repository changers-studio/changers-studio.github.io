$(document).ready(function(){
	
	$('body').addClass('overflow-y');
	
	$('.preloader').delay(2000).fadeOut(1000);

	setTimeout(function() {
    $('body').removeClass('overflow-y');
  }, 2000);

});
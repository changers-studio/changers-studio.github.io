jQuery(function () {
	$('.needs-validation button[type=submit]').on('click', function (e) {
		$(this).closest('.needs-validation').addClass('was-validated')
	})
})

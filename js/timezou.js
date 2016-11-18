jQuery(document).ready(function($) {
	$('.num_a2 a').each(function(index, el) {
		$(this).removeClass('current');
	});
	$('.num_a2 a').click(function(event) {
		$('.num_a2 a').removeClass('current');
		$(this).addClass('current')

	});
});
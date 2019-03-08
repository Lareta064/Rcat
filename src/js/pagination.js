$(document).ready(function() {

	$('.pagination-item').on('click', function(e){
		e.preventDefault();
		$(this).addClass('pagination-item--active');
		$(this).siblings('.pagination-item--active').removeClass('pagination-item--active');

	});

})
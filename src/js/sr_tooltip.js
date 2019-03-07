$(document).ready(function() {
	//-показать тултип
	$('.appartment-page-link').on('click', function(){
		$(this).children('.tooltip-box').toggleClass('tooltip-box--visible');
	});

	//-скрыть тултип по клику вне


})
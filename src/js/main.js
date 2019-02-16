$(document).ready(function() {


	// Scrollbar боковой панели (меню)
	$(".left-panel").customScrollbar({preventDefaultScroll: true});


	// Убрать/Добавить боковую панель (меню)

	$('#ui-nav-toggle').click(function(){
		$('body').toggleClass('ui-nav--hidden');
		$('.container').toggleClass('container--left');
	});
	//-красим иконку сердечко

	$('.icon-heart').on('click', function(){
		if($(this).children('svg').attr('data-prefix') == 'far'){
			$(this).children('svg').attr('data-prefix','fas');
		}
		else {
			$(this).children('svg').attr('data-prefix','far');
		}
	})


});
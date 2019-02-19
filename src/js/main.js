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

	// Изменение фото в блоке Фото ЖК
	$('.thumbnails__image').on('click',function(){
		var imgPath = $(this).attr('data-img-path');
		var mainImage = $('.switch-block__main-photo img')

		mainImage.fadeOut(200, function(){
			mainImage.attr('src', imgPath).fadeIn(200);
		});
	});
	// слайде фото ЖК на мобильном
	$('.carousel').carousel();

	// при ховере удлинняем/укорачиваем кнопку телефон
	$('.contact-phone').on('mouseenter', function(){
			$(this).css('width','150px');
	});


	$('.contact-phone').on('mouseout', function(){
		if(window.innerWidth >= 768){
			$(this).css('width','115px');
		}
		else{
			$(this).css('width','125px');
		}

	});


});
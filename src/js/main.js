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

	$('.contact-phone').on('mouseenter', function(){
		$(this).css('width','150px');
		console.log(555);
	});
	$('.contact-phone').on('mouseout', function(){
		$(this).css('width','115px');
		console.log(444);
	});

});
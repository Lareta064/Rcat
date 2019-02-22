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
	//-модальное окно для панель опций(иконка+ссылка)
	const dropdownОption = $('#dropdown--option');// выпадашка
	const showOptions = $('#showOptions'); //кнопка Еще
	var dataValue ;
	showOptions.on('click', function(){
		dataValue = dropdownОption.attr('data-control');

		if(dataValue =='hidden'){

			dropdownОption.slideDown(800);
			dropdownОption.attr('data-control','open');
			dataValue = 'open';

			showOptions.children('.link-block__icon').addClass('icon-down--rotate');


		}else {
			dropdownОption.slideUp(800);
			dropdownОption.attr('data-control','hidden');
			dataValue = 'hidden';

			showOptions.children('.link-block__icon').removeClass('icon-down--rotate');

			}
	});

	//-переключаем класс у ссылки-фильтра (по цене)
	$('.link-filter').on('click', function(){
		$(this).toggleClass('link-filter--active');
	})

});
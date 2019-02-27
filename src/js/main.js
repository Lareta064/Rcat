$(document).ready(function() {


	// Scrollbar боковой панели (меню)
	$(".left-panel").customScrollbar({preventDefaultScroll: true});


	// Убрать/Добавить боковую панель (меню)

	$('#ui-nav-toggle').click(function(){
		$('body').toggleClass('ui-nav--hidden');
		$('.container').toggleClass('container--left');
	});

	//-красим иконку сердечко  и меняем слово Избранное

	$('.icon-heart').on('click', function(){
		if($(this).children('svg').attr('data-prefix') == 'far'){
			$(this).children('svg').attr('data-prefix','fas');
			$(this).parents('.link-block__icon').siblings('.simple-link').text('В избранном');

		}
		else {
			$(this).children('svg').attr('data-prefix','far');
			$(this).parents('.link-block__icon').siblings('.simple-link').text('В избранноe');
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

	// при ховере удлинняем/укорачиваем кнопку телефон
	$('.contact-phone').on('click', function(e){
		e.preventDefault();
			$(this).toggleClass('show-phoneNumber');
	});

	//-модальное окно для панель опций(иконка+ссылка)
	const dropdownОption = $('#dropdown--option');// выпадашка
	const showOptions = $('#showOptions'); //кнопка Еще
	var dataValue ;
	showOptions.on('click', function(e){
		e.preventDefault();
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
	//-скрываем выпадашку при ресайзе
	window.onresize = function(event) {

	    dropdownОption.slideUp(800);
		dropdownОption.attr('data-control','hidden');
		dataValue = 'hidden';
		showOptions.children('.link-block__icon').removeClass('icon-down--rotate');

		if($(document).width()>768){
			$('.hc-description__footer-content').show();
		}
		else{
			$('.hc-description__footer-content').hide();
		}

	}

	//-переключаем класс у ссылки-фильтра (по цене)
	$('.link-filter').on('click', function(e){
		e.preventDefault();
		if($(this).attr('data-pill','off')){
			$(this).addClass('link-filter--active');
			$(this).attr('data-pill','active');
			$(this).siblings('.link-filter--active').removeClass('link-filter--active');
		}

	});

	//-переключаем класс у ссылки-фильтра (по цене)
	$('.filter-toggle-item').on('click', function(){

		if($(this).attr('data-pill','off')){
			$(this).addClass('filter-active');
			$(this).attr('data-pill','active');
			$(this).siblings('.filter-toggle-item').removeClass('filter-active');
		}

	});



		//-выделить послеюнюю строку описания
		$('.description__visible-text').text(function(index, text){

                text = text.substr(278,350);
                $('.description__visible-text')

		});

	//-показать/скрыть текст описание ЖК

	$('.description__hidden-text').hide();
		$('#openHiddenDescrip').on('click', function(e){
			e.preventDefault();
			if($(document).width()>=768){

				if($(this).hasClass('hideText')) {
					$('.description__hidden-text').hide(800);
					$(this).removeClass('hideText');
					$(this).text('Подробнее о ЖК');
				} else {
					$('.description__hidden-text').show(800);
					$(this).addClass('hideText');
					$(this).text('Скрыть описание');
				}
			}

			if($(document).width()<768){
				if($(this).hasClass('hideText')) {
					$('.hc-description__footer-content').hide(800);
					$(this).removeClass('hideText');
					$(this).text('Подробнее о ЖК');
				} else {
					$('.hc-description__footer-content').show(800);
					$(this).addClass('hideText');
					$(this).text('Скрыть описание');
				}

			}



	});

		$('.photo-slider').slick({
			arrows: false,
			variableWidth: true
		});


		//-Retina//

		(function(){
			if( document.cookie.indexOf('device_pixel_ratio') == -1
				&& 'devicePixelRatio' in window
				&& window.devicePixelRatio == 2 ){

				document.cookie = 'device_pixel_ratio=' + window.devicePixelRatio + ';';
			window.location.reload();
		}
	})();

		//-Text Fade Out / Read More Link
});




	






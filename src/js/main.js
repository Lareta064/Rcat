$(document).ready(function() {


	// Scrollbar боковой панели (меню)
	$(".left-panel").customScrollbar({preventDefaultScroll: true});


	// Убрать/Добавить боковую панель (меню)

	$('#ui-nav-toggle').click(function(){
		$('body').toggleClass('ui-nav--hidden');
		$('.container').toggleClass('container--left');
	});

	//-красим иконку сердечко  и меняем слово Избранное

	$('.add-favorite').on('click', function(e){
		e.preventDefault();
		if($(this).children('.link-block__icon').children('.icon-heart').children('svg').attr('data-prefix') == 'far'){
			$(this).children('.link-block__icon').children('.icon-heart').children('svg').attr('data-prefix','fas');
			$(this).children('.simple-link').text('В избранном');
		}
		else {
			$(this).children('.link-block__icon').children('.icon-heart').children('svg').attr('data-prefix','far');
			$(this).children('.simple-link').text('В избранноe');
		}
	});
	//-красим иконку сердечко  в строке таблицы квартир
	var tableHeartIcon = $('.table-row--group').children('.icon-heart');
		tableHeartIcon.on('click', function(){
			console.log(888);
		if($(this).children('.fa-heart').attr('data-prefix') == 'far'){
			 $(this).children('.fa-heart').attr('data-prefix','fas');

		}
		else {
			$(this).children('.fa-heart').attr('data-prefix','far');

		}

	});

		//-следить за объявлениями
	$('.watch-announcements').on('click', function(e){
		e.preventDefault();
		if($(this).hasClass('watch-announcements--active')){
			$(this).removeClass('watch-announcements--active');
			$(this).children('.simple-link').children('span').children('nohyphen').text('Следить за объявлениями в этом ЖК');

		}
		else {
			$(this).addClass('watch-announcements--active');
			$(this).children('.simple-link').children('span').children('nohyphen').text('Отписаться от объявлений в этом ЖК');

		}
	});

	// Изменение фото в блоке Фото ЖК
	$('.thumbnails__image').on('click',function(){
		var imgPath = $(this).attr('data-img-path');
		var mainImage = $('.switch-block__main-photo img')

		mainImage.fadeOut(400, function(){
			mainImage.attr('src', imgPath).fadeIn(400);
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
		if(detectmob())
			return;

	 //    dropdownОption.slideUp(800);
		// dropdownОption.attr('data-control','hidden');
		// dataValue = 'hidden';
		// showOptions.children('.link-block__icon').removeClass('icon-down--rotate');

		if($(document).width()>768){
			$('.hc-description__footer-content').show();
		}
		else{
			$('.hc-description__footer-content').hide();
			$('.openHiddenDescrip').removeClass('hideText');
			$('.openHiddenDescrip').text('Подробнее о ЖК');
		}

	}
		window.onresize = function(event) {


	    dropdownОption.slideUp(800);
		dropdownОption.attr('data-control','hidden');
		dataValue = 'hidden';
		showOptions.children('.link-block__icon').removeClass('icon-down--rotate');


	}

	function detectmob() {
	 return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
	}
	//-кнопка телефон в таблице на планшетах

	// if($(document).width()>=768 || $(document).width()<= 992 ){
	// 	$('.contact-phone').on('click', function(){
	// 		$(this).toggleClass('contact-phone--tablet')
	// 	});

	// }

	//-переключаем класс у ссылки-фильтра (по цене)
	// $('.link-filter').on('click', function(e){
	// 	e.preventDefault();
	// 	if($(this).attr('data-pill','off')){
	// 		$(this).addClass('link-filter--active');
	// 		$(this).attr('data-pill','active');
	// 		$(this).siblings('.link-filter--active').removeClass('link-filter--active');
	// 	}

	// });

	//-переключаем класс у ссылки-фильтра (по цене)
	$('.filter-toggle-item').on('click', function(){

		if($(this).attr('data-pill','off')){
			$(this).addClass('filter-active');
			$(this).attr('data-pill','active');
			$(this).siblings('.filter-toggle-item').removeClass('filter-active');
		}

	});

		//-показать/скрыть текст описание ЖК

		// $('.description__hidden-text').hide();
	$('.openHiddenDescrip').on('click', function(e){
		e.preventDefault();
		if($(document).width()>=768){

			if($(this).hasClass('hideText')) {
				$('.description__hidden-text').hide(800);
				$(this).removeClass('hideText');
				$(this).text('Подробнее о ЖК');
				$('.description__visible-text').addClass('fadeOut');
			} else {
				$('.description__hidden-text').show(800);
				$(this).addClass('hideText');
				$(this).text('Скрыть описание');
				$('.description__visible-text').removeClass('fadeOut');
			}
		}else if($(document).width()<768){
			if($(this).hasClass('hideText')) {
				$('.hc-description__footer-content').hide(800);
				$('.description__hidden-text').hide(800);
				$(this).removeClass('hideText');
				$(this).text('Подробнее о ЖК');
			} else {
				$('.hc-description__footer-content').show(800);
				$('.description__hidden-text').show(800);
				$(this).addClass('hideText');
				$(this).text('Скрыть описание');
			}

		}
	});

	$('.photo-slider').slick({
		arrows: false,
		variableWidth: true
	});

	//-обрезать текст троеточием
	var size = 189,
	newsContent= $('.appartment-card__truncate-text'),
	newsText = newsContent.text();

	if(newsText.length > size){
		newsContent.text(newsText.slice(0, size) + ' ...');
	}

		//-Retina//

	// 	(function(){
	// 		if( document.cookie.indexOf('device_pixel_ratio') == -1
	// 			&& 'devicePixelRatio' in window
	// 			&& window.devicePixelRatio == 2 ){

	// 			document.cookie = 'device_pixel_ratio=' + window.devicePixelRatio + ';';
	// 		window.location.reload();
	// 	}
	// // })();

	// function detectmob() {
	//  return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
	// }

	//Скрипт для фокуса input
	$('.form-input').focus(function(event){
		$ (this).addClass('form-input--focus');
	});

	$('.form-input').blur(function(event){
		$ (this).removeClass('form-input--focus');
	});
});











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
			$(this).parent('.icon-heart').parent('.link-block__icon').siblings('.simple-link').text('Убрать из избранного')
			console.log($(this).parent('.icon-heart').parent('.link-block__icon').siblings('.simple-link').text());
		}
		else {
			$(this).children('svg').attr('data-prefix','far');
			$(this).parent('.icon-heart').parent('.link-block__icon').siblings('.simple-link').text('В избранное')
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
	//-скрываем выпадашку при ресайзе
	window.onresize = function(event) {

	  dropdownОption.slideUp(800);
			dropdownОption.attr('data-control','hidden');
			dataValue = 'hidden';
			showOptions.children('.link-block__icon').removeClass('icon-down--rotate');
	}

	//-переключаем класс у ссылки-фильтра (по цене)
	$('.link-filter').on('click', function(e){
		e.preventDefault();
		$(this).toggleClass('link-filter--active');
		$(this).siblings('.link-filter--active').removeClass('link-filter--active');

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
			if($(this).hasClass('hideText')) {
				$('.description__hidden-text').hide(800);
				$(this).removeClass('hideText');
				$(this).text('Подробнее о ЖК');
			} else {
			$('.description__hidden-text').show(800);
			$(this).addClass('hideText');
			$(this).text('Скрыть описание');
		}
	});

		$('.photo-slider').slick({
			arrows: false,
			variableWidth: true
		});
});

	//-Text Fade Out / Read More Link
	
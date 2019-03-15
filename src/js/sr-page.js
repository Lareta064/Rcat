//-страница поиск квартир
$(document).ready(function() {

	// Изменение фото в карточке квартир на стр Поиска квартиры
	$('.thumbnails__image--appartment').on('click',function(){
		var imgPath = $(this).attr('data-img-path');
		var mainImage = $(this).closest('.appartment-photo__switch-block').children('.switch-block__main-photo').children('img');
		console.log(imgPath);
		mainImage.attr('src', imgPath)

		mainImage.fadeOut(300, function(){
			mainImage.attr('src', imgPath).fadeIn(300);
		});
	});

	//Скрипт для фокуса input
	$('.form-input').focus(function(event){
		$ (this).addClass('form-input--focus');
	});

	$('.form-input').blur(function(event){
		$ (this).removeClass('form-input--focus');
	});


	//-обрезка текста троеточием
	var snipping = function(height){
		$(".appartment-card__truncate-text").snipper({
			height: height,
			ellipsis: '&hellip;'
		});

	};

	if($(document).width()>992){
		snipping('130px');
	}
	else{
		snipping('50px');
	}

	$(window).resize(snipping);
	//- //обрезка текста троеточием


	//-карточка квартиры , красим иконку сердечко  и меняем на текст "удалить из избранного"
	$('.item-favorite').on('click', function(e){
		e.preventDefault();
		if($(this).children('.link-block__icon').children('.icon-heart').children('svg').attr('data-prefix') == 'far'){
			$(this).children('.link-block__icon').children('.icon-heart').children('svg').attr('data-prefix','fas');
			$(this).children('.simple-link').text('В избранном');
			// $(this).children('.simple-link').text('Удалить из избранного');
		}
		else {
			$(this).children('.link-block__icon').children('.icon-heart').children('svg').attr('data-prefix','far');
			$(this).children('.simple-link').text('В избранноe');
		}
	});


	//-красим кнопки с квартирами
	$('.rooms-num .link-btn').on('click', function(){
		$(this).toggleClass('link-btn--active');

	});
	//-блок поиска показать полный поиск
	$('.show-full-search').on('click', function(){
		if($(this).children('.text-link').attr('data-action') !=='open'){
			$(this).children('.arrow-down').addClass('arrow-down--rotate');
			$('.search-dropdown').addClass('show-flex');
			$(this).children('.text-link').text('Скрыть');
			$(this).children('.text-link').attr('data-action','open');
		}
		else{
			$(this).children('.arrow-down').removeClass('arrow-down--rotate');
			$('.search-dropdown').removeClass('show-flex');
			$(this).children('.text-link').text('Еще');
			$(this).children('.text-link').attr('data-action','close');
		}

	});


	$('.badge-group.click-badge .badge').on('click', function(){
		$('.areas-badges').toggleClass('areas-badges--visible');

	});
	//-полный поиск на мобилках
	$('.full-search-mobile').on('click', function(e){
		e.preventDefault();
		$('.search-dropdown').addClass('show-flex');
		$(this).css('display','none');
		$(this).siblings('.close-full-mobile').css('display','flex');

	});

	//-свернуть полный поиск на мобилках
		$('.close-full-mobile').on('click', function(){

		$('.search-dropdown').removeClass('show-flex');
		$(this).css('display','none');
		$(this).siblings('.full-search-mobile').css('display','flex');

	});

	//-Открыть редактир. поиска
	$('.open-save-items').on('click', function(){
		if($(this).attr('data-action') !=='open'){
			$(this).parent('.search-edit-header').siblings('.search-edit-body').addClass('show-block');
			$(this).text('Cкрыть');
			$(this).attr('data-action','open');

		}
		else{
			$(this).parent('.search-edit-header').siblings('.search-edit-body').removeClass('show-block');
			$(this).text('Редактировать');
			$(this).attr('data-action','close');

		}
	});

	$('.search-edit-basket').on('click', function(){
		$(this).closest('.search-edit-body__item').css('display','none');

	})


})
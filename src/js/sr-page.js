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
	var snipping = function(){
		$(".appartment-card__truncate-text").snipper({
			height: '140px',
			ellipsis: '&hellip;'
		});

	};
	snipping();
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

})
$(document).ready(function() {
	//-показать тултип
	$('.appartment-page-link').on('click', function(){
		$(this).children('.tooltip-box').toggleClass('tooltip-box--visible');
	});

	//-скрыть тултип по клику вне
	$(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $(".tooltip-box"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0 ) { // и не по его дочерним элементам
			div.removeClass('tooltip-box--visible'); // скрываем его
		}
	});

})
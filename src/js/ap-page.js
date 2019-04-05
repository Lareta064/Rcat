//-страница с описанием и фото квартиры
$(document).ready(function() {

	//-обрезать текст в описании квартиры на мобилках
	let appartmentTruncateText = $('.description-paragrafe--truncate');

	var snippingAppartmentDescription = function(height){
		// console.log(555);
		appartmentTruncateText.snipper({
			height: height,
			ellipsis: '&hellip;'
		});

	};
	// snippingAppartmentDescription('110px');
	if($(document).width()>=992){
		snippingAppartmentDescription('100%');
	}
	else{
		snippingAppartmentDescription('110px;');
	}

     $(window).resize(function(){
          if(appartmentTruncateText.attr('data-position') == 'hidden'){
               if($(document).width()>=992){
                    snippingAppartmentDescription('100%');
               }
               else{
                    snippingAppartmentDescription('110px;');
               }


          }

     });

     //-показать скрытый на мобилках текст

     const showTruncateText = $('.showTruncateText');
     showTruncateText.on('click',function(e){
     	e.preventDefault();
     	appartmentTruncateText.snipper({
			height: '300px'
		});

     	$(this).css('display','none');
          appartmentTruncateText.attr('data-position','show');

     })

     //-показать карточки дубликатов
     const showDuplicateItem = $('.duplicate-add__link');
     const duplicateCardsBlock = $('.duplicate-add__cards');

     showDuplicateItem.on('click', function(e){
     	e.preventDefault();
     	if($(this).attr('data-position') == 'passive'){
     	     	duplicateCardsBlock.fadeIn(1000);
     	     	$(this).attr('data-position','active');
     	     	$(this).children('.show-duplicate').text('Свернуть 3 дубля объявления');
     	     	$(this).children('.arrow-down').addClass('icon-down--rotate');

     	     }

     	 else{
     	 		duplicateCardsBlock.fadeOut(800);
     	     	$(this).attr('data-position','passive');
     	     	$(this).children('.show-duplicate').text('Найдено 3 дубля объявления');
     	     	$(this).children('.arrow-down').removeClass('icon-down--rotate');
     	 }

     })

})
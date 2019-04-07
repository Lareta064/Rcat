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
		snippingAppartmentDescription('330px;');
	}
	else{
		snippingAppartmentDescription('110px;');
	}

     $(window).resize(function(){
          //if(appartmentTruncateText.attr('data-position') == 'hidden'){

               if($(document).width()>=992){
                    snippingAppartmentDescription('330px;');
               }
               else{
                    snippingAppartmentDescription('110px;');
               }


          //}

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

    //-Показать/скрыть блок "подробнее" в карточке описание ЖК
    const showHcDescription = $('.showHcDescription');
    const linkGroupHidden = $('.row-text-subtitle');
    const linkGroupHidden2 = $('.hc-card-wrapper');
    const bigBadgeWhite = $('.big-badge--white');

    showHcDescription.on('click', function(e){
    	e.preventDefault();
    		linkGroupHidden.toggleClass('row-text-subtitle--active');
    		linkGroupHidden2.fadeIn(500);
    		bigBadgeWhite.fadeOut(500);
    		$(this).css('display','none');

    })
    //-Клик по кнопке Следить за объявлениями в этом ЖК
    const subscribeButton = $('.subscribeButton');
    const unSubscribeButton = $('.unsubscribe');

    subscribeButton.on('click', function(e){
    	e.preventDefault();
    	$(this).addClass('subscribeButton--active');
    	$(this).children('.btn-text--mobile').text('Вы подписаны');
    	$(this).children('.btn-text').text('Вы подписаны на объявления в этом ЖК');
    	unSubscribeButton.css('display','flex');
    })
    //-Клик по ссылке Отписаться
    unSubscribeButton.on('click',function(e){
    	e.preventDefault();
    	subscribeButton.children('.btn-text--mobile').text('Следить за ЖК');
    	subscribeButton.children('.btn-text').text('Следить за объявлениями в этом ЖК');
    	subscribeButton.removeClass('subscribeButton--active');
    	$(this).css('display','none');

    });

    //-клик или наведение на cсылку 'Еще' в панели опций под шапкой
    const optionPanelModal = $('.option-panel__modal-block');
    const showModalBlock = $('.option-panel__modal');

    showModalBlock.on('click', function(e){
        // e.preventDefault(); // ПРЕДОТВРАЩАЕТ НОРМАЛЬНОЕ ПОВЕДЕНИЕ!
        optionPanelModal.addClass('option-panel__modal-block--active');
    });

    showModalBlock.mouseenter(function() {
      optionPanelModal.addClass('option-panel__modal-block--active');
    });

    optionPanelModal.mouseenter(function() {
        console.log(555);
       $(this).addClass('option-panel__modal-block--active');
    });
     optionPanelModal.mouseleave(function() {

       $(this).removeClass('option-panel__modal-block--active');
    });

     //- показать поле для записи заметки
    const showFieldNote = $('.block-item--note');
    const textareaForNote = $('.write-note-textarea');

    showFieldNote.on('click', function(e){
        e.preventDefault();
         if($(this).attr('data-position') !== 'showing'){

             textareaForNote.addClass('block-visible');
             $(this).attr('data-position','showing');
             $(this).children('.text-link').text('Удалить заметку');
         }
         else{
            textareaForNote.removeClass('block-visible');
             $(this).attr('data-position','hidden');
             $(this).children('.text-link').text('Добавить заметку');

         }


    });

    //-клик по кнопке "Показать телефон"" в карточке с ценой
    const buttonShowPhone = $('.buttonShowPhone');
    const phoneBlock = $('.appartment-price__phone-block');

    buttonShowPhone.on('click', function(e){
        e.preventDefault();
        phoneBlock.addClass('block-visible');
        $(this).css('display','none');
    });

    //-показать кнопку Отправить в карточке с ценой
    const priceCardTextarea = $('.appartment-price__textarea');
    const buttonSendMessage = $('.btn-send-message');

    priceCardTextarea.focus(function(){
        buttonSendMessage.addClass('block-visible');
    });
    priceCardTextarea.blur(function(){
        if(priceCardTextarea.val() == ''){
            buttonSendMessage.removeClass('block-visible');

        }
        else{buttonSendMessage.addClass('block-visible');
        }
    });

    //-показать поле для заметок в  карточке с ценой
    const showNoteField = $('.show-note-field');
    const fieldForNote = $('.price-card__toolbar-note');

    showNoteField.on('click', function(e){
        e.preventDefault();
        if($(this).attr('data-position') !== 'showing'){

            fieldForNote.addClass('block-visible');
            $(this).attr('data-position','showing');
            $(this).children('.text-link').text('Удалить заметку');
            console.log($(this).attr('data-position'))
        }
        else{
            fieldForNote.removeClass('block-visible');
            $(this).attr('data-position','hidden');
            $(this).children('.text-link').text('Добавить заметку');
        }

    });

        //-фикс карточки с ценой и показать тулбар карточки с ценой, когда уезжает панель опций
    $(window).on("scroll", function() {
        if($(window).innerWidth() >=1200){

            if ($(window).scrollTop() > 215){
                $('.price-card__toolbar').addClass('flex-visible');
                $('.phone-block-item .add-favorite').addClass('block-visible');


            }
            else {
                $('.price-card__toolbar').removeClass('flex-visible');
                $('.phone-block-item .add-favorite').removeClass('block-visible');

            }
        }
    });

})

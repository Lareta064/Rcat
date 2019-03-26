// Скрыть/Показать комментарии по клику
$(document).ready(function(){

    let showHiddenMessage = $('.message-hidden-show');

    showHiddenMessage.click(function(e){
    	e.preventDefault();
      	console.log('kek');
      	$(this).siblings('.message-hidden-items').show('500');
   		 $(this).hide();
     });

});


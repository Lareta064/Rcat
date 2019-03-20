// Скрыть/Показать комментарии по клику
$(document).ready(function(){
    $('.ch-title-row').click(function () {
        $('.hidden-comments').addClass('hidden-comments-show');
        $(this).addClass('ch-title-row-hidden');
    });
		
});
   

// const element = document.querySelector('.ch-title')
// click element.addEventListener('click', (evt) => {/*обработчик события*/})
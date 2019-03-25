//-страница бесед
$(document).ready(function() {

	//-скрипт для иконок like and dislike
	$('.icon-group').click(function(){
		var likeNum = parseInt($(this).children('.icon-group__num').text());

		if($(this).attr('data-action')!=='on'){
		$(this).attr('data-action','on');
		$(this).children('.icon-group__icon').addClass('clicked');
		$(this).children('.icon-group__num').text(likeNum + 1);

		}
		else{
		$(this).attr('data-action','off');
		$(this).children('.icon-group__icon').removeClass('clicked');
		$(this).children('.icon-group__num').text(likeNum - 1);

		}



	});

	//-развернуть текст описание кв в карточке новых предложений
	let textShowLink = $('.show-hidden-text');


	textShowLink.click(function(e){
		e.preventDefault();
		$(this).siblings('.text-hidden').fadeIn(500);
		$(this).parent('.offer-row--info').removeClass('fadeOut');
		$(this).css('display','none');


	})
})
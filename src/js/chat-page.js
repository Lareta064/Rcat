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
	//-затемнение на последнее фото в карточке агента
	// var testItem = $('.download-num-item');
	// var testItemLength = testItem.length;

	// if(testItemLength ==6){
	// 	var lastItem = testItem[5];
	// 	// lastItem.addClass('download-num-item-last');
	// 	console.log(lastItem)
	// }






})
//-страница бесед
$(document).ready(function() {


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







})
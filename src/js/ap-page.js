//-страница с описанием и фото квартиры
$(document).ready(function() {

	//-обрезать текст в описании квартиры на мобилках
	let appartmentTruncateText = $('.description-paragrafe--truncate');
	console.log(appartmentTruncateText);
	var snippingAppartmentDescription = function(height){
		console.log(555);
		appartmentTruncateText.snipper({
			height: height,
			ellipsis: '&hellip;'
		});



	};
	if($(document).width()>=992){
		snippingAppartmentDescription('100%');
	}
	else{
		snippingAppartmentDescription('330px;');
	}

     $(window).resize(snippingAppartmentDescription);



})
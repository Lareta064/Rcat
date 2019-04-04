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
     	if($(document).width()>=992){
			snippingAppartmentDescription('100%');
		}
		else{
			snippingAppartmentDescription('110px;');
		}
     });



})
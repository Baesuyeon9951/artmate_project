console.clear();

function ExhibitionPageMenu1(){

	$('.exhibition-page__menu-1 > ul > li').click(function(){
		$(this).siblings('.active').removeClass('active');

		if($(this).hasClass('active')){
			$(this).removeClass('active');
		}
		else{
			$(this).addClass('active');
		}
	})
}

ExhibitionPageMenu1();
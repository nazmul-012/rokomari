// Fixed Header
$(window).scroll(function(){
	var scroll = $(this).scrollTop();
	if(scroll>=60){
		$('body').addClass('fixed-header');
	}else{
		$('body').removeClass('fixed-header');
	}
});


//Typed js
var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    typeSpeed: 20,
    backSpeed: 20,
    startDelay: 1000,
    loop: true,
    loopCount: Infinity,
});
$('.search-input .input-search').on('keyup change', function(){
	if($(this).val().length > 0){
		$(this).addClass('typed');
	}else{
		$(this).removeClass('typed');
	}
})
jQuery(document).ready(function($){
	$('.hamburger').click(function(){
		$(this).toggleClass('is-active');
		$('.menu-hide').toggleClass('on');
		$('body').toggleClass('scroll');
	})
})

jQuery(window).scroll(function(event) {
	var windowScrollTop = jQuery(window).scrollTop();
	if (windowScrollTop > 50) {
		jQuery('header .nav').addClass('bg-white');
	} else {
		jQuery('header .nav').removeClass('bg-white');
	}
});
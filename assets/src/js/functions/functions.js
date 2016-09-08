(function ( $ ) {
	'use strict';

	// Lightbox Form
	// -------------------------	
	$(function lightboxForm() {
		$('.fancybox-media').fancybox({
			openEffect  : 'none',
			closeEffect : 'none',
			helpers 	: {
			media 		: {}
			}
		});
	});	

	// Slider home
	// -------------------------
	$(function sliderHome() {
		$('#owl-carousel').owlCarousel({
			items: 1,
	        autoplaySpeed: 1000,
	        autoplayTimeout: 7000,
	        autoplay: true,
	        nav: false,
	        loop: true  
		})
	});

	// Responsive YouTube
	// ------------------------- 		
	$(function responsiveYouTube() {
		var all_oembed_videos = $("iframe[src*='youtube'], iframe[src*='vimeo']");
		all_oembed_videos.each(function(){
			$(this).removeAttr('height').removeAttr('width').wrap( "<div class='embed-responsive embed-responsive-16by9'></div>" );
		});
	});

}( jQuery ));
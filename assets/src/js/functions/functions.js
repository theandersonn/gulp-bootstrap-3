var functions = {
	init: function(){
		this.lightboxFancy();
		this.sliderHome();
		this.responsiveYouTube();
		this.removeAtributosImg();
	},


	// Lightbox
	// -------------------------
	lightboxFancy: function(){
		jQuery('.fancybox-media').fancybox({
			openEffect  : 'none',
			closeEffect : 'none',
			helpers 	: {
			media 		: {}
			}
		});
	},		

	// Slider home
	// -------------------------
	sliderHome: function(){
		jQuery('#owl-carousel').owlCarousel({
			items: 1,
	        autoplaySpeed: 1000,
	        autoplayTimeout: 7000,
	        autoplay: true,
	        nav: false,
	        loop: true  
		})
    },

	// Responsive YouTube
	// ------------------------- 
	responsiveYouTube: function(){
		var all_oembed_videos = jQuery("iframe[src*='youtube'], iframe[src*='vimeo']");
		all_oembed_videos.each(function(){
			jQuery(this).removeAttr('height').removeAttr('width').wrap( "<div class='embed-responsive embed-responsive-16by9'></div>" );
		});
	},	    	

	// Remove attributes images
	// -------------------------
	removeAtributosImg: function(){
		jQuery('img').each(function(){
			jQuery(this).removeAttr('width')
			jQuery(this).removeAttr('height');
		});
	}
}

jQuery(function(){
	functions.init();
});

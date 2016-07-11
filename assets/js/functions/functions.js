var functions = {
	init: function(){
		this.sliderHome();
		this.responsiveYouTube();
		this.removeAtributosImg();
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

	// YouTube Responsivo
	// ------------------------- 
	responsiveYouTube: function(){
		var all_oembed_videos = jQuery("iframe[src*='youtube'], iframe[src*='vimeo']");
		all_oembed_videos.each(function(){
			jQuery(this).removeAttr('height').removeAttr('width').wrap( "<div class='embed-responsive embed-responsive-16by9'></div>" );
		});
	},	    	

	// Remove Atributos img
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

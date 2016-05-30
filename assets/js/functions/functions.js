var functions = {
	init: function(){
		this.sliderHome();
		this.removeAtributosImg();
	},

	// Slider home
	// -------------------------
	sliderHome: function(){
		jQuery('.owl-carousel').owlCarousel({
			items: 1,
	        autoplaySpeed: 1000,
	        autoplayTimeout: 7000,
	        autoplay: true,
	        nav: false,
	        loop: true  
		})
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

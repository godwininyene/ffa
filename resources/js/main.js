$(document).ready(function(){
	let responsive ={
		0:{
			items:1
		},
		
		900:{
			items: 2
		},
		1024:{
			items: 3
		}
	};

	$nav = $(".nav");
	$toggleCollapse = $(".toggle-collapse");
	/** Click event on toggle menu */
	$toggleCollapse.click(function(){
		$nav.toggleClass("collapse");
		var icon = $('.js-navicon');
		// Toggle navigation icon
		if(icon.hasClass('fa-navicon')){
			icon.removeClass('fa-navicon');
			icon.addClass('fa-close');
		}else{
			icon.addClass('fa-navicon');
			icon.removeClass('fa-close');	
		}
	});


	//Owl-carousel for team members
	$('.team-owl-container').owlCarousel({
		loop:true,
		autoplay:true,
		autoplayTimeout:3000,
		dots: false,
		responsive:responsive
		
	});

	// Owl-carousel for Event
	$('.event-owl-container').owlCarousel({
		loop:false,
		autoplayTimeout:3000,
		dots: false,
		nav:true,
		navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
		responsive:responsive
		
	});


	//Owl-carousel for blog posts
	$('.owl-blog-post').owlCarousel({
		loop:false,
		autoplayTimeout:3000,
		nav:true,
		navText: [$('.owl-navigation--2 .owl-nav-prev'), $('.owl-navigation--2 .owl-nav-next')],
		dots:false,
		responsive:responsive
		
	});

	// Animation on scroll Instances
	AOS.init();
});
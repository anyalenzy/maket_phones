$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		dots:false,
		slidesToShow:3,
		adaptiveHeight:true, 
		autoplay:false,
		speed:800,
		responsive:[
			{
				breakpoint: 1200,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 900,
				settings: {
					slidesToShow:1
				}
			}
		]
	});

	$('.reviews').slick({
		arrows:false,
		dots:true,
		slidesToShow:1,
		adaptiveHeight:true, 
		autoplay:false,
		speed:800,

	});
});
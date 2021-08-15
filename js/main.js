$(function () {

  $('.review__slider').slick({
		slidesToShow: 3,
		slidesToScroll: 3,
		dots: true,
		arrows: false,
		responsive: [
			{
				breakpoint:635,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 4,
				}
			},
			{
				breakpoint:420,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 6,
				}
			},
		]
	});


	$('.header__btn-open').on('click', function(){
		$('.header__nav').addClass('active');
	});
	$('.header__btn-close').on('click', function(){
			$('.header__nav').removeClass('active');
		});


})
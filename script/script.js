$(document).ready(() => {

	$('.nav_menu_hamburger').on('click', () => {
		$('.nav_menu_mobile').fadeToggle(800);
		if( $('.nav_menu_mobile').css('display', 'block')) {
			$('.nav_menu_hamburger').css('opacity', '0');
		};
	});

	$('.nav_close').on('click', () => {
		$('.nav_menu_mobile').fadeOut(800);
		if( $('.nav_menu_mobile').css('display', 'none')) {
			$('.nav_menu_hamburger').css('opacity', '1');
		};
	});

	$('.menu').on('click', () => {
		$('.menu').fadeOut(800);
	});

	$(() => {
		$('a[href^="#"]').on('click', function(event) {
		event.preventDefault();

		const ref = $(this).attr("href"),
		      pos = $(ref).offset().top;

		$('html, body').animate({scrollTop: pos}, 1000);
		});
	});

	$('a').on('click', () => {
		$('.nav_menu_mobile').fadeOut(1000);
	})
	
})
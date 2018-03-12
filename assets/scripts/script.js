$(document).ready(function(){

  $(".owl-carousel").owlCarousel({
  	items: 1,
  	autoHeight: true
  });









	let random = Math.floor(Math.random() * (5 - 1) + 1);

	let modalToggler = $('.js-modal-toggler'),
		modal = $('.modal'),
		headerMobile = $('.header-mobile'),
		modalTogglerMobile = $('.js-modal-toggler-mobile'),
		modalElems = [
			'.js-modal-github',
			'.js-modal-vk',
			'.js-modal-mail',
			'.modal-map',
			'.modal-toggler'
		];


	$('.section-main').css({
		'background-image': 'url(./assets/images/bg-2.jpg)'
	});

	$('.mobile-toggler-js').click(function() {
		headerMobile.addClass('-open');
		headerMobile.addClass('-Xvisible');
		for (let i = 0; i < modalElems.length; i++) {
				let timeToWait = i * 200;
				setTimeout(function() {
				$(modalElems[i]).removeClass('-active');
			}, 200 + timeToWait);
		}		
		modal.removeClass('-active');
	})

	$('.mobile-togglerX-js').click(function(){
		headerMobile.removeClass('-open');
		headerMobile.removeClass('-Xvisible');
	})

	modalTogglerMobile.click(function() {
		headerMobile.removeClass('-open');
		headerMobile.removeClass('-Xvisible');
	});

	setTimeout(function(){
		$('h1').addClass('-animated');
		$('h2').addClass('-animated');
	}, 1500);
  
	modalToggler.click(function() {
		modal.toggleClass('-active');
			for (let i = 0; i < modalElems.length; i++) {
				let timeToWait = i * 200;
				setTimeout(function() {
				$(modalElems[i]).toggleClass('-active');
			}, 200 + timeToWait);
		}
	});



});

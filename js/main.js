
function onScroll() {
	if ($(window).scrollTop() > 50) {
				$('.navbar_first').css('diplay', 'none');
				$('.navbar_abs').css('display', 'block');
				$('.navbar_abs').css('position', 'fixed');
				
			} else {
				$('.navbar_first').css('display', 'block');
				$('.navbar_abs').css('display', 'none');

			}
		}

		window.addEventListener('scroll', onScroll, false);


$(function(){
	var typed = new Typed(".typed", {
  strings: ["It's the only place you have to live."], 
   fadeOut: true,
   fadeOutDelay: 100,
  typeSpeed:100,  
  showCursor: true,
  cursorChar: '|',
  autoInsertCss: true
});
});



$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
	items:1	
	});
});


$("div.box-main").click( function(){
	$("div.box-main").removeClass("active");
	$("div.block-secondary").removeClass("active");		
	$(this).addClass("active");		
	$(this).next(".block-secondary").addClass("active");	
});
 



 $(document).ready(function(){
    $(".nav_rigth").on("click","a", function (event) {
    	$("div.menu").toggleClass("toggle_slide");
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 800);

    });
    setTimeout(function() {}, 1000);
});

 $(document).ready(function(){
    $(".mobile_menu").on("click","a", function (event) {
    	$("div.menu").toggleClass("toggle_slide");
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 800);
    });
});

 $(".toggle_button").click(function(){
 	$(".mobile_menu").toggleClass("mobile_menu_open")
 });

  $(".mobile_menu_close").click(function(){
 	$(".mobile_menu").toggleClass("mobile_menu_open");
 });

  $(".mobile_nav_item").click(function(){
 	$(".mobile_menu").toggleClass("mobile_menu_open");
 });
   $(window).on('load', function () {
    $preloader = $('#before-load'),
      $loader = $preloader.find('.loader');
    $loader.fadeOut();
    $preloader.delay(350).fadeOut('slow');
  });



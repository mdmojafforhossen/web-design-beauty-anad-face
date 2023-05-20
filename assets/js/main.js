$(document).ready(function () {

	/*======= STICKY MENU =======*/
	$(window).on('scroll', function () {
		if ($(window).scrollTop()) {
			$("header").addClass('sticky-menu');
		} else {
			$("header").removeClass('sticky-menu');
		}
	});

	/*====== SHOW & HIDE MENU ======*/
	$(".menu-show-hide-btn").click(function () {
		$("nav .main-menu").toggleClass("open-menu");
	});

	/*=== WOW JS ===*/
	new WOW().init();

  // owl-carousel
  // eta comment kore rakhte hobe
 $(document).ready(function(){
  $('.owl-carousel').owlCarousel(); 
});

 // Testimonials carousel (uses the Owl Carousel library)
  $(".owl_one").owlCarousel({
    autoplay:Boolean,
     margin:5,
    slideBy:1,
    dots:false,
    loop:Boolean,
    responsive: {
      0: {
        items: 1
      },
      425: {
        items: 2
      },
      767: {
        items: 3
      },
      768: {
        items: 3
      },
      900: {
        items:4
      }
    }
  });


  // owl-carousel end

 // Testimonials carousel (uses the Owl Carousel library)
$('.owl_2').owlCarousel({
    autoplay:Boolean,
    loop:true,
    nav:false,
    responsive: {
      0: {
        items: 1
      },
      425: {
        items: 1
      },
      767: {
        items: 1
      },
      768: {
        items: 1
      },
      900: {
        items:1
      }
    }
})

  // owl-carousel end

});

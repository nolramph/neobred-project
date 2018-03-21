(function($) {
  "use strict"; // Start of use strict
  var imgPath = "images/"
  
  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  //Placeholder Animation
  $(".talkToUs-placeholder")
  .mouseover(function(){
    $(this).addClass("onHovered");
  })
  .mouseout(function() {
    $(this).removeClass("onHovered");
  });
  //Backstretch picture transition
  $("header.foldhead").backstretch([
    "images/bg_neo_bldg.jpg",
    "images/loading_arms.jpg",
    "images/loading_arms2.jpg"
    ], {
      fade: 750,
      duration: 2000
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 80) {
      $("#mainNav").addClass("navbar-shrink");
      
    } else {
      $("#mainNav").removeClass("navbar-shrink");
      
      // //Header Logo Toggle
      // $("img#neobred-logo").hover(
      //   function () {
      //       $(this).attr("src", imgPath + "neobred_logo.png");
      //   },
      //   function () {
      //       $(this).attr("src", imgPath + "neobred_logo_white.png");
      //   }
      // );

    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Hide navbar when modals trigger
  $('.portfolio-modal').on('show.bs.modal', function(e) {
    $(".navbar").addClass("d-none");
  })
  $('.portfolio-modal').on('hidden.bs.modal', function(e) {
    $(".navbar").removeClass("d-none");
  })

})(jQuery); // End of use strict

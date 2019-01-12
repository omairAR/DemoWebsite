/*============================================
                PRELOADER
============================================*/
$(window).on('load', function(){
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut( 'slow');
});

/*============================================
                OWL CAROUSEL team
============================================*/


$(function(){
  $("#team-members").owlCarousel({
      items: 2,
      autoplay: true,
      smartSpeed: 700,
      loop: true,
      autoplayHoverPause: true,
      nav: true,
      dots: false,
      navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
      responsive: {
          0: {
            items: 1  
          },
          //breakpoint for 480 and up
          480: {
            items: 2
          }
          
      }
    
  });
    
   
});

/*============================================
            PROGRESS BARS
============================================*/
$(function () {

    $("#progress-elements").waypoint(
        function () {
            
            $('.progress-bar').each(function () { //each()--loop through progress bars
                $(this).animate({
                    width: $(this).attr("aria-valuenow") + "%"
                }, 2000);

            });
            this.destroy();

        }, {
            offset: 'bottom-in-view'
        }

    );

});


/*============================================
            RESPONSIVE TABS 
============================================*/

$(function(){
    $("#services-tabs").responsiveTabs({
        animation: 'slide'
    });
});


/*============================================
            Portfolio
============================================*/
$(window).on('load', function(){
    // intialize isotope
    $("#isotope-container").isotope({});
    
    // filter items on button click
    $("#isotope-filters").on( 'click', 'button', function() {
        // get filter value
        var filterValue= $(this).attr('data-filter');
        
        $("#isotope-container").isotope({
            filter: filterValue
        });
        //active button
        $("#isotope-filters").find('.active').removeClass('active');
        $(this).addClass('active');
});
 
});    


/*============================================
            magnific-popup
============================================*/

$(function(){
    $("#portfolio-wrapper").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});

/*============================================
                OWL CAROUSEL testimonial
============================================*/


$(function(){
  $("#testimonial-slider").owlCarousel({
      items: 1,
      autoplay: false,
      smartSpeed: 700,
      loop: true,
      autoplayHoverPause: true,
      nav: true,
      dots: false,
      navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>']
    
  });
    
   
});


/*============================================
           Counter up Stars
============================================*/

$(function(){
    $(".counter").counterUp({
        delay: 10,
        time: 2000
    });
});

/*============================================
                OWL CAROUSEL clients
============================================*/


$(function(){
  $("#clients-list").owlCarousel({
      items: 6,
      autoplay: false,
      smartSpeed: 700,
      loop: true,
      autoplayHoverPause: true,
      nav: true,
      dots: false,
      navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
      responsive: {
          0: {
            items: 2  
          },
          //breakpoint for 480 and up
          480: {
            items: 3
          },
          //breakpoint for 768 and up
          768: {
            items: 6
            }
      }
    
  });
    
   
});

/*============================================
            NAvigation
============================================*/

// show and hide white navigation

$(function(){
    //show/hide nav on page load
    showHideNav();
    
    $(window).scroll(function(){
        //show/hide nav on window scroll
        showHideNav();   
        
    });
    //page on load
    
    function showHideNav(){
        
        if( $(window).scrollTop() > 50){
          // show white nav
            $("nav").addClass("white-nav-top");
            //show dark logo
            $(".navbar-brand img").attr("src","img/logo/logo-dark.png");
            //show backto top button
            $("#back-to-top").fadeIn();
            
            
        }
        else{
           //alert("you just scrolled position is not>"+$(window).scrollTop());
            $("nav").removeClass("white-nav-top");
            
            //show logo
            $(".navbar-brand img").attr("src","img/logo/logo.png");
            
            //Hide backto top button
            $("#back-to-top").fadeOut();
        }
    }
});


//smooth scrolling
$(function(){
    $("a.smooth-scroll").click(function(event){
        event.preventDefault();
        //get section id #about, #services etc
        var section_id = $(this).attr("href");
        
        $("html, body").animate({
            scrollTop: $(section_id).offset().top - 64
        }, 1250, "easeInOutExpo");
    });
});

/*============================================
            Mobile Menu
============================================*/
$(function(){
    //show mobile navigation
    $("#mobile-nav-open-btn").click(function(){
        $("#mobile-nav").css("height","100%");
    });
    $("#mobile-nav-close-btn, #mobile-nav a").click(function(){
        $("#mobile-nav").css("height","0%");
    });
    
    
});

/*============================================
            Animation
============================================*/
//animate on scroll
$(function(){
    new WOW().init();
});

//home animation on page load
$(window).on('load', function(){
    
    $("#home-heading-1").addClass("animated fadeInDown");
    $("#home-heading-2").addClass("animated fadeInLeft");
    $("#home-text").addClass("animated zoomIn");
    $("#home-btn").addClass("animated zoomIn");                 //zoomIn
    $("#arrow-down i").addClass("animated fadeInDown infinite");
});    


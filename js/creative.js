/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Fit Text Plugin for Main Header
    $("h1").fitText(
        1.2, {
            minFontSize: '35px',
            maxFontSize: '65px'
        }
    );

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

	// Pop-up functionality
	$(function() { //document ready
		$(".displayPopup").on("click", function() { //click event of the button
			$("#overlay").fadeTo(100, .3); //this will show the overlay awith a crossbrowser transparency
			$("#popup1").show(); // show popup1
			return false; //disable event propogation (avoid addition of "#" to url)
		})
 
		$(".popup .close").on("click", function() { //click event of the close button in popup
			$("#overlay").hide(); //hide overlay
			$(".popup").hide(); //hide popup
			return false; //disable event propogation (avoid addition of "#" to url)
		})
	})


})(jQuery); // End of use strict

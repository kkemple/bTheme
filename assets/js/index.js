/**
 * Main JS file for the theme behaviours
 */

/*globals jQuery, document */
(function ($) {
    "use strict";

    $(document).ready(function(){

        // On the home page, move the blog icon inside the header 
        // for better relative/absolute positioning.

        //$("#blog-logo").prependTo("#site-head-content");

		
		/* ==========================================================================
			Back To Top - http://webdesignerwall.com/tutorials/animated-scroll-to-top
			========================================================================== */

			// hide #back-top first
			$("#back-top").hide();
			
			// fade in #back-top
			$(function () {
				$(window).scroll(function () {
					if ($(this).scrollTop() > 100) {
						$('#back-top').fadeIn();
					} else {
						$('#back-top').fadeOut();
					}
				});

				// scroll body to 0px on click
				$('#back-top a').click(function () {
					$('body,html').animate({
						scrollTop: 0
					}, 800);
					return false;
				});
			});


		// $(function(){
		// 	$('#site-head').data('size','big');
		// });

		// $(window).scroll(function(){
		// 	if($(document).scrollTop() > 0)
		// {
		// 	if($('#site-head').data('size') == 'big')
		// 	{
		// 		$('#site-head').data('size','small');
		// 		$('#site-head').stop().animate({
		// 			height:'40px'
		// 		},600);
		// 	}
		// }
		// else
		// {
		// 	if($('#site-head').data('size') == 'small')
		// 		{
		// 		$('#site-head').data('size','big');
		// 		$('#site-head').stop().animate({
		// 			height:'100px'
		// 			},600);
		// 		}
		// 	}
		// });


    });

}(jQuery));
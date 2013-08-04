/**
 * Copyright 2013, Andrew Glenn Waterman
 */

jQuery(document).ready(function () {
        "use strict";
        
        function hide(divs) {
			for (var counter in divs) {
               jQuery(divs[counter]).hide();
			}
            jQuery('#nav').children().each(function () {
               jQuery(this).removeClass('active');
            });
        }

		function hideAll() {
			hide(hide(['#about','#opensource','#stream','#writing']));
		}

        /* Bind controls */
        jQuery('#back').click(function(){
            hideAll();
            jQuery('#about').fadeIn('medium');
            jQuery('#back').parent().addClass('active');
            jQuery('.breadcrumb').children().last().text("background");
        });

        jQuery('#open').click(function() {
            hideAll();
            jQuery('#opensource').fadeIn('medium');
            jQuery('#open').parent().addClass('active');
            jQuery('.breadcrumb').children().last().text("open source");
        });

        jQuery('#str').click(function() {
            hideAll();
            jQuery('#stream').fadeIn('medium');
            jQuery('.carousel').show();
            jQuery('#str').parent().addClass('active');
            jQuery('.breadcrumb').children().last().text("stream");
        });

        jQuery('#write').click(function() {
            hideAll();
            jQuery('#writing').fadeIn('medium');
            jQuery('#write').parent().addClass('active');
            jQuery('.breadcrumb').children().last().text("writing");
        });

        hideAll();
        var url = jQuery(document.location).attr('href');
        var hash = url.substring(url.indexOf("#"));
        jQuery(hash).click();
        
        jQuery('.carousel').carousel({ interval: 2500});
        jQuery('.carousel').hide();
});

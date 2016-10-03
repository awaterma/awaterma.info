/**
 * Copyright 2013, Andrew Glenn Waterman
 */
jQuery(document).ready(function () {
        "use strict";
        
        jQuery('.carousel').carousel({ interval: 4000});
        
        function hideAll() {
          var hide = function hide(divs) {
            for (var counter in divs) {
              jQuery(divs[counter]).addClass('hidden');
            }
            jQuery('#nav').children().each(function () {
              jQuery(this).removeClass('active');
            });
          };
          hide(['#about','#opensource','#stream','#writing']);
        }

        function showPanel(panel, tag, breadCrumb) {
          hideAll();
          jQuery(panel).removeClass('hidden');
          jQuery(panel).fadeIn('medium');
          jQuery(tag).parent().addClass('active');
          jQuery('.breadcrumb').children().last().text(breadCrumb);
        }
        /* Bind controls */
        jQuery('#back').click(function(){
          showPanel('#about','#back','me');
        });

        jQuery('#open').click(function() {
            showPanel('#opensource','#open','open source');
        });

        jQuery('#str').click(function() {
            showPanel('#stream','#str','stream');
            jQuery('.carousel').show();
        });

        jQuery('#write').click(function() {
            showPanel('#writing','#write','writing');
        });
        var url = jQuery(document.location).attr('href');
        var hash = url.substring(url.indexOf("#"));
        jQuery(hash).click();
});

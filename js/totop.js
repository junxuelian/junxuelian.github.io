(function(o){var t=150;var e=o("#totop");var l=500;e.hide();o(window).scroll(function(){var l=o(document).scrollTop();if(l>t){o(e).stop().fadeTo(300,1)}else{o(e).stop().fadeTo(300,0)}});o(e).click(function(){o("html, body").animate({scrollTop:0},l);return false})})(jQuery);
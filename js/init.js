/* skel-baseline v2.0.3 | (c) n33 | getskel.com | MIT licensed */

(function($) {

	skel.init({
		layout : {
			conditionals: true
		},
		reset: 'full',
		breakpoints: {
			global: {
				href: 'css/style.css',
				containers: 1400,
				grid: { gutters: ['2em', 0] }
			},
			xlarge: {
				media: '(max-width: 1680px)',
				href: 'css/style-xlarge.css',
				containers: 1200
			},
			large: {
				media: '(max-width: 1280px)',
				href: 'css/style-large.css',
				containers: 960,
				grid: { gutters: ['1.5em', '1.5em'] },
				viewport: { scalable: false }
			},
			medium: {
				media: '(max-width: 980px)',
				href: 'css/style-medium.css',
				containers: '90%'
			},
			small: {
				media: '(max-width: 736px)',
				href: 'css/style-small.css',
				containers: '90%',
				grid: { gutters: ['1.25em', 0] }
			},
			xsmall: {
				media: '(max-width: 480px)',
				href: 'css/style-xsmall.css'
			}
		}
	
	});

	$(function() {

		var	$window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				$body.removeClass('is-loading');
			});
		

			$(".scroll").click(function(e) {			//scroll on index
				e.preventDefault();
				var id = $(this).attr('href').substring(1);
				$('html,body').animate({scrollTop: $('#'+id).offset().top-60}, 'fast');
			});

			$(".servicesImage").click(function(){				//read more leads to relevant page
				var location = $(this).attr('data-link')+'.html';
				window.location = location;
			});

			var url = window.location.hash;						//scroll top element on index when comming from
			if(url){											//othr pages
				setTimeout(function(){
					$('body').animate({scrollTop: $(url).offset().top-60}, 'fast');
				},1000)
				
			}
			setTimeout(function(){					//load the logo when page start unless its not on top
				if(!$(window).scrollTop()){
					$('#header-logo').fadeIn();
				}
			},700);
			$(window).scroll(function() { 			//on scroll hide the logo
			    if ($(this).scrollTop() <= 200) { 
			        $('#header-logo').fadeIn();
			    }
			    else{
			    	$('#header-logo').fadeOut();	
			    }
			});

			if(skel.isActive('xsmall')){
				width = $(window).width();
				bannerWidth = $('.banner').css('width');
				console.log(bannerWidth);
			}

		

	});

})(jQuery);
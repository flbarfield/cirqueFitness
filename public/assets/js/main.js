//plans for app:

// ****THIS SOUNDS LIKE IT NEEDS AN API PAGE THAT I CAN REFERENCE***
// *I want the user to be able to browse workouts per apperatus and/or muscle group
// *When displaying exercises, I want there to be a gif demonstrating the excersize, with a potential youtube link of a further breakdown
// * this should be displayed in 'viewer' window when a workout is clicked - assuming a toggleable "help" button has been clicked beforehand.
// *****************************************************************

//workout tracking:
// reps, are trackable via button click/text field gathering. Timer can be applied to others when applicable. OR perhaps a timer function could just be included for all workouts but toggleable as you can make anything have a isometric component.
//* User should be able to add their own workouts as well as delete them via trashcan icon

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$main = $('#main');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ '361px',   '480px'  ],
			xxsmall:  [ null,      '360px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Nav.
		var $nav = $('#nav');

		if ($nav.length > 0) {

			// Shrink effect.
				$main
					.scrollex({
						mode: 'top',
						enter: function() {
							$nav.addClass('alt');
						},
						leave: function() {
							$nav.removeClass('alt');
						},
					});

			// // Links.
			// 	var $nav_a = $nav.find('a');

			// 	$nav_a
			// 		.scrolly({
			// 			speed: 1000,
			// 			offset: function() { return $nav.height(); }
			// 		})
			// 		.on('click', function() {

			// 			var $this = $(this);

			// 			// External link? Bail.
			// 				if ($this.attr('href').charAt(0) != '#')
			// 					return;

			// 			// Deactivate all links.
			// 				$nav_a
			// 					.removeClass('active')
			// 					.removeClass('active-locked');

			// 			// Activate link *and* lock it (so Scrollex doesn't try to activate other links as we're scrolling to this one's section).
			// 				$this
			// 					.addClass('active')
			// 					.addClass('active-locked');

			// 		})
			// 		.each(function() {

			// 			var	$this = $(this),
			// 				id = $this.attr('href'),
			// 				$section = $(id);

			// 			// No section for this link? Bail.
			// 				if ($section.length < 1)
			// 					return;

			// 			// Scrollex.
			// 				$section.scrollex({
			// 					mode: 'middle',
			// 					initialize: function() {

			// 						// Deactivate section.
			// 							if (browser.canUse('transition'))
			// 								$section.addClass('inactive');

			// 					},
			// 					enter: function() {

			// 						// Activate section.
			// 							$section.removeClass('inactive');

			// 						// No locked links? Deactivate all links and activate this section's one.
			// 							if ($nav_a.filter('.active-locked').length == 0) {

			// 								$nav_a.removeClass('active');
			// 								$this.addClass('active');

			// 							}

			// 						// Otherwise, if this section's link is the one that's locked, unlock it.
			// 							else if ($this.hasClass('active-locked'))
			// 								$this.removeClass('active-locked');

								// }
							// });

					// });

		}

	// Scrolly.
		$('.scrolly').scrolly({
			speed: 1000
		});

})(jQuery);

// '/' path specific
const signInButton = document.querySelector('[href="#signIn"]')
const registerButton = document.querySelector('[href="#register"]')

let toggleSection = function () {
	alert('bing!')
	let statusCheck = ''
	statusCheck = signInButton.getAttribute()
	if (statusCheck === '#signIn' ){
		
	}
}

signInButton.addEventListener('click', toggleSection)
registerButton.addEventListener('click', toggleSection)



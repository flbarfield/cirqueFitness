//plans for app:

// ****THIS SOUNDS LIKE IT NEEDS AN API PAGE THAT I CAN REFERENCE***
// *I want the user to be able to browse workouts per apperatus and/or muscle group
// *When displaying exercises, I want there to be a gif demonstrating the excersize, with a potential youtube link of a further breakdown
// * this should be displayed in 'viewer' window when a workout is clicked - assuming a toggleable "help" button has been clicked beforehand.
// *****************************************************************

//workout tracking:
// reps, are trackable via button click/text field gathering. Timer can be applied to others when applicable. OR perhaps a timer function could just be included for all workouts but toggleable as you can make anything have a isometric component.
// User should be able to add their own workouts as well as delete them via trashcan icon
// User should be able to add notes to each individual exercise to track any extra feelings they have about the work that they did

// Maybe In the custom exercise bank - the user's exercises will be presented first, but the entire community's exercises are also accessable. They can even add their own descriptions and gifs of how to do said exercises on their own....This list should definitely be searchable though by title and maybe eventually musclegroup category.

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

		}
	// Scrolly.
		$('.scrolly').scrolly({
			speed: 1000
		});

})(jQuery);

// '/' path specific
const signInButton = document.querySelector('[href="#signIn"]')
const registerButton = document.querySelector('[href="#register"]')
let signInStyle = document.getElementById('signIn').style.display
let registerStyle = document.getElementById('register').style.display

let toggleSignIn = function () {
	if (signInStyle === 'none' && registerStyle === 'flex' || signInStyle === "none" && registerStyle === 'none' || signInStyle === '' && registerStyle === ''){
		document.getElementById('signIn').style.display = 'flex'
		document.getElementById('register').style.display = 'none'
	}
}

let toggleRegister = function () {
	if (registerStyle === 'none' || signInStyle === 'flex' || registerStyle === '') {
		document.getElementById('register').style.display = 'flex'
		document.getElementById('signIn').style.display = 'none'
	}
}

signInButton.addEventListener('click', toggleSignIn)
registerButton.addEventListener('click', toggleRegister)
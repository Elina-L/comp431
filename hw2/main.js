window.onload = function() {
	var LOGIN = "Login";
	var LOGOUT = "LogOut";

	var username = document.getElementById("username");
	var loginBtn = document.getElementById("login");
	var shareArea = document.getElementById("share");

	loginBtn.value = LOGIN;

	// Array of class name of image cards
	var cardClass = ["one", "two", "three", "four", "five", 
					"six", "seven", "eight", "nine", "ten"];
	
	// Call carousel function on all image cards
	cardClass.forEach(function(item) {
		carousel(item);
	});

	// Function which starts and stops carousel.
	function carousel(num) {
		var pauseBool = false;          						  // Flag for paused or not
		var myIndex = 0;                						  // Index of image
		var myInterval;                 						  // Interval time
		var classes = document.getElementsByClassName(num);       // List of classes
		var overlay = document.getElementById("overlay"+num);     // List of overlays
		var pause = document.getElementById("pause"+num);         // List of pause buttons

		// Hide all images
		Array.prototype.forEach.call(classes, function(img) {
			img.style.display = "none";
		})

		if (myIndex == classes.length) {
			myIndex = 0;
		}

		classes[myIndex].style.display = "block";
		startSlide();

		// Start and stop slides when clicking the pause button.
		overlay.onclick = function() { 
			if (pauseBool == false) {
				stopSlide(); 
				pauseBool = true;
			} else {
				startSlide();
				pauseBool = false;
			}
		}

		function stopSlide() {
			clearInterval(myInterval);
			// Change pause button image.
			pause.style.content = 'url("https://d30y9cdsu7xlg0.cloudfront.net/png/2873-200.png")';   
		}

		function startSlide() {
			var interval = (Math.floor(Math.random() * 5) + 1) * 1000;
			// Change pause button image.
			pause.style.content = 'url("http://image.flaticon.com/icons/png/256/12/12193.png")';   
			// Creates interval for changing images.
			myInterval = setInterval(
				function() {
					// Toggle all images to hidden.
					Array.prototype.forEach.call(classes, function(img) {
						img.style.display = "none";
					})
					// Circle back to the first image if reached the end of images.
					myIndex = myIndex + 1;
					if (myIndex == classes.length) {
						myIndex = 0;
					}
					// Toggle the current image to display.
					classes[myIndex].style.display = "block";
				}, interval
			);
		}
	}

	loginBtn.onclick = function() {
		if (loginBtn.value == LOGIN) {
			login()
		} else {
			logout()
		}
	}

	function login() {
		if (!username.value) {
			window.alert("Please enter a username")
		} else {
			// hide the input field
			username.type = "hidden";
			// make the post div visible
			shareArea.style.display = "block";
			// change the text of the login button to logout
			loginBtn.value = "Logout";
		}
	}

	function logout() {
		// change the text of button to login
		username.type = "text";
		username.value = "";
		// reverse hiding done in login 		
		loginBtn.value = "Login";
		// make the post div visible
		shareArea.style.display = "none";
	}
}

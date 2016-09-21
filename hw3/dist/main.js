window.onload = function() {
	var LOGIN = "Login";
	var LOGOUT = "Logout";

	var username = document.getElementById("username");
	var loginBtn = document.getElementById("login");
	var shareArea = document.getElementById("shareArea");
	var clear = document.getElementById("clear");
	var update = document.getElementById("update");
	var updateheadline = document.getElementById("update-headline");
	var headline = document.getElementById("headline");
	var headlineinput = document.getElementById("headline-input");

	loginBtn.value = LOGOUT;

	// Event handler for when clicking on clear				
	clear.onclick = function() {

	// Clears the input in the textbox
		shareArea.value = "";
	}

	// Updates user headline upon clicking update
	updateheadline.onclick = function() {
		var headlineString = headlineinput.value;
		headline.innerHTML = headlineString;
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
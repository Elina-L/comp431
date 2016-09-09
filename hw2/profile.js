window.onload = function() {
	var submitBtn = document.getElementById("submitBtn");
	// Boolean to check if all input values are valid
	var valid = true;
	
	// Check all input fields.
	submitBtn.onclick = function() { checkAll(); }

	// Function which calls the helper function update(field).
	function checkAll() {
		update("Dis");
		update("Email");
		update("Phone");
		update("Zip");
		update("Pass");
		update("Conf");

		// Only clear input if all inputs are valid.
		if (valid) {
			clearAll();
		}

		// Turn valid back on for new checkAll().
		valid = true;
	}

	// Iterates through all input tags and sets the values to empty string.
	function clearAll() {
		var list = document.getElementsByTagName("input");

		// Initialize an alert message to an empty string.
		var alertMsg = new String();

		// Iterates through entire list
		for (a in list) {
			var aVal = document.getElementById(a);
			// If this tag corresponds to an element.
			if (aVal != null) {
				var value = document.getElementById("value" + aVal.id.slice(5));
				
				// Getting the english name of the element.
				var name = aVal.name;

				// If the input value is not empty
				if (aVal.value != "") {

					// Updating the alert message.
					if (name != "") {
						alertMsg = alertMsg + "Changed " + name + " from " + value.innerHTML + " to " + aVal.value +".\n";
					}
					value.innerHTML = aVal.value;
				}
				aVal.value = "";
			}
		}

		// If the alert message contains content, alert it.
		if (alertMsg != "") {
			alert(alertMsg);
		}
	}

	// Does pattern matching.
	function update(field) {

		var input = document.getElementById("input" + field);
		var value = document.getElementById("value" + field);

		// If value is not empty.
		if (input.value != "") {
			if (field == "Dis") {
				if (/[a-zA-Z][a-zA-Z0-9]/.test(input.value) == false) {
					alert("Display name should be upper or lower case letters and numbers, but may not start with a number.")
					valid = false;
					return false;
				}
			}

			// Pattern checking for email.
			if (field == "Email") {
				if (/[^@]+@[^@]+[.][a-zA-Z]/.test(input.value) == false) {
					alert("Not a valid email address.");
					valid = false;
					return false;
				}
			}

			// Pattern checking for phone number.
			if (field == "Phone") {
				if (/\d\d\d-\d\d\d-\d\d\d\d/.test(input.value) == false) {
					alert("Phone number should be of the format 123-456-7890.");
					valid = false;
					return false;
				}			
			}

			// Pattern checking for zipcode.
			if (field == "Zip") {
				if (/\d\d\d\d\d/.test(input.value) == false) {
					alert("Zipcode should be of the format 00000.");
					valid = false;
					return false;
				}			
			}

			// Pattern checking for phone number.
			if (field == "Pass") {
				if (inputConf.value == "") {
					alert("Please confirm your password.");
					valid = false;
					return false;
				} else if (input.value != inputConf.value) {
					alert("Passwords do not match.");
					valid = false;
					return false;
				}			
			}

			// Confirm password
			if (field == "Conf") {
				if (inputPass.value == "") {
					alert("Please confirm your password.");
					valid = false;
					return false;
				} else if (input.value != inputPass.value) {
					valid = false;
					return false;
				}
			}
		}
	}
}

window.onload = function() {
	var submitBtn = document.getElementById("submitBtn");
	
	// Confirm password
	var passconfirm = document.getElementById("passconfirm");
}

// Boolean to check if all input values are valid
var valid = true;

// Function which calls the helper function update(field).
function checkAll(form) {
	update("Dis");
	update("Email");
	update("Phone");
	update("Zip");
	update("Pass");
	update("Conf");

	// Only clear input if all inputs are valid.
	if (valid) {
		clearAll();
		passconfirm.innerHTML = "";
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
			if (aVal.value != "" && value != null) {
				value.innerHTML = aVal.value;
			}
			aVal.value = "";
		}
	}

}

// Does pattern matching.
function update(field) {

	var input = document.getElementById("input" + field);
	var value = document.getElementById("value" + field);

	// If value is not empty.
	if (input.value != "") {
		if (field == "Dis") {
			if (/[a-zA-Z][a-zA-Z0-9]*/.test(input.value) == false) {
				passconfirm.innerHTML = "Display name should be upper or" +
				 "lower case letters and numbers, but may not start with a "
				 + "number."
				valid = false;
				return false;
			}
		}

		// Pattern checking for email.
		if (field == "Email") {
			if (/[^@]+@[^@]+[.][a-zA-Z]/.test(input.value) == false) {
				passconfirm.innerHTML = "Not a valid email address.";
				valid = false;
				return false;
			}
		}

		// Pattern checking for phone number.
		if (field == "Phone") {
			if (/\d\d\d-\d\d\d-\d\d\d\d/.test(input.value) == false) {
				passconfirm.innerHTML = 
					"Phone number should be of the format 123-456-7890.";
				valid = false;
				return false;
			}			
		}

		// Pattern checking for zipcode.
		if (field == "Zip") {
			if (/\d\d\d\d\d/.test(input.value) == false) {
				passconfirm.innerHTML = 
					"Zipcode should be of the format 00000.";
				valid = false;
				return false;
			}			
		}

		// Pattern checking for phone number.
		if (field == "Pass") {
			if (inputConf.value == "") {
				passconfirm.innerHTML = "Please confirm your password.";
				valid = false;
				return false;
			} else if (input.value != inputConf.value) {
				passconfirm.innerHTML = "Passwords do not match.";
				valid = false;
				return false;
			}			
		}

		// Confirm password
		if (field == "Conf") {
			if (inputPass.value == "") {
				passconfirm.innerHTML = "Please confirm your password.";
				valid = false;
				return false;
			} else if (input.value != inputPass.value) {
				valid = false;
				return false;
			} else {
				passconfirm.innerHTML = "Successfully changed password.";
				valid = true;
				return true;
			}
		}
	}
}


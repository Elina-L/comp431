window.onload = function () {
	var password = document.getElementById("password");
	var confirm_password = document.getElementById("confirm_password");
	var pw_check = document.getElementById("pw_check");
	var pw_valid = false;

	var timeStamp = new Date().getTime();
	var today = new Date();
	var nowYear = today.getFullYear();
	var nowYear_18 = nowYear - 18;
	today.setFullYear(nowYear - 18);
	var nowMonth = today.getMonth();
	var nowDay = today.getDate();
	var birth;

	// Variable definitions for login section
	var loginaccn = document.getElementById("loginaccn");
	var loginpw = document.getElementById("loginpw");
	var login = document.getElementById("login");
	var loginMsg = document.getElementById("loginMsg");

	document.getElementById("password").onchange = checkPassword;
	document.getElementById("confirm_password").onchange = checkPassword;
	document.getElementById("timestamp").value = timeStamp;
	nowMonth = nowMonth + 1;
	if (nowMonth < 10) {
		nowMonth = "0" + nowMonth;
	} if (nowDay < 10) {
		nowDay = "0" + nowDay;
	}
	dateOK = nowYear_18 + "-" + nowMonth + "-" + nowDay;

}


// Checks if birthday is greater that 18 years
function updateBday() {
	birth = document.getElementById("bday");
	var birthString = birth.value.toString();
	var birthDate = new Date(birthString);

	document.getElementById("bday").max = dateOK;
	var okDate = new Date(dateOK);
	if (okDate < birthDate) {
		document.getElementById("demo").innerHTML = 
		"You must be 18 or above to sign up.";

	} else {
		document.getElementById("demo").innerHTML = "";
	}

}

// Checks if passwords match
function checkPassword() {
	if (password.value != confirm_password.value) {
		pw_check.textContent = "Passwords don't match.";
	} else {
		pw_check.textContent = "";
		pw_valid = true;
	}
}

function checkForm(form) {
	if (password.value != confirm_password.value) {
		pw_check.value = "Passwords don't match."
		document.getElementById("password").style.borderColor = "#E34234";
		document.getElementById("confirm_password").style.borderColor = 
			"#E34234";
		return false;
	} else {
		return true;
	}
}
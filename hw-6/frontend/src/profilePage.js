import React from 'react';
import {render} from 'react-dom';

class Profile extends React.Component {
	constructor(props) {
        super(props)
        this.valid = true;
        this.inputVar;
        this.val;
    }

    doNothing() {

    }

    checkAll() {
		this.update("Dis");
		this.update("Email");
		this.update("Phone");
		this.update("Zip");
		this.update("Pass");
		this.update("Conf");

		// Only clear input if all inputs are valid.
		if (this.valid) {
			this.clearAll();
			passconfirm.innerHTML = "";

		}
		// Turn valid back on for new checkAll().
		this.valid = true;

    }

    update(field) {
    	console.log(field);
		this.inputVar = document.getElementById("input" + field);
		this.val = document.getElementById("value" + field);

		console.log(this.inputVar)
		// If value is not empty.
		if (this.inputVar.value != "") {
			console.log(field);
			if (field == "Dis") {
				if (/[a-zA-Z][a-zA-Z0-9]*/.test(this.inputVar.value) == false) {
					passconfirm.innerHTML = "Display name should be upper or" +
					 "lower case letters and numbers, but may not start with a "
					 + "number."
					this.valid = false;
					return false;
				}
			}

			// Pattern checking for email.
			if (field == "Email") {
				if (/[^@]+@[^@]+[.][a-zA-Z]/.test(this.inputVar.value) == false) {
					passconfirm.innerHTML = "Not a valid email address.";
					this.valid = false;
					return false;
				}
			}

			// Pattern checking for phone number.
			if (field == "Phone") {
				if (/\d\d\d-\d\d\d-\d\d\d\d/.test(this.inputVar.value) == false) {
					passconfirm.innerHTML = 
						"Phone number should be of the format 123-456-7890.";
					this.valid = false;
					return false;
				}			
			}

			// Pattern checking for zipcode.
			if (field == "Zip") {
				if (/\d\d\d\d\d/.test(this.inputVar.value) == false) {
					passconfirm.innerHTML = 
						"Zipcode should be of the format 00000.";
					this.valid = false;
					return false;
				}			
			}

			// Pattern checking for phone number.
			if (field == "Pass") {
				if (inputConf.value == "") {
					passconfirm.innerHTML = "Please confirm your password.";
					this.valid = false;
					return false;
				} else if (this.inputVar.value != inputConf.value) {
					passconfirm.innerHTML = "Passwords do not match.";
					this.valid = false;
					return false;
				}			
			}

			// Confirm password
			if (field == "Conf") {
				if (inputPass.value == "") {
					passconfirm.innerHTML = "Please confirm your password.";
					this.valid = false;
					return false;
				} else if (this.inputVar.value != inputPass.value) {
					this.valid = false;
					return false;
				} else {
					passconfirm.innerHTML = "Successfully changed password.";
					this.valid = true;
					return true;
				}
			}
		}
    }

    clearAll() {
    	console.log("clear all");

    	var list = document.getElementsByTagName("input");

    	console.log("LIST: " + list);
		// Iterates through entire list
		for (var a in list) {
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


    render() { return (
<div>
<div className="wrapper">
	<div className="shareField">
		<div className="row row2">
		<h1>Rice Book!</h1>
		<div className="align-right">
		 	<a href="main.html" type="button" className="btn btn-default" id="submitBtn">Home</a>
			<a href="index.html" type="button" className="btn btn-default" value="Logout" id="login">Logout</a>
		</div>
		</div>
	</div>
	<div className="picWrapper">
		<img className="profilePic" src="https://upload.wikimedia.org/wikipedia/en/7/70/Shawn_Tok_Profile.jpg"/>
		<input type="file" className="btn btn-default" value="Upload Image" id="upload-image" onChange={(e) => this.doNothing()}/>
	</div>
	<div className="container2">
	<div className="profile2">
		<div className="row">
			<div className="col-sm-6">
				<div className="inputField">Display Name:
				<span id="valueDis">Elina Liu</span>
				</div>
			</div>			
			<div className="col-sm-6">
				<input className="form-control" id="inputDis" name="Display Name" type="text"/>
			</div>
		</div>
		<div className="row">
			<div className="col-sm-6">
				<div className="inputField">Email address: 
					<span id="valueEmail">a@b.c</span>
				</div>
			</div>
			<div className="col-sm-6">
				<input className="form-control" id="inputEmail" name="Email Address" type="text"/>
			</div>
		</div>
		<div className="row">
			<div className="col-sm-6">
				<div className="inputField">Phone number: 
					<span id="valuePhone">123-456-7890</span>
				</div>
			</div>					
			<div className="col-sm-6">
				<input className="form-control" id="inputPhone" name="Phone Number" type="text"/>
			</div>
		</div>
		<div className="row">
			<div className="col-sm-6">
				<div className="inputField">Date of Birth: 
					<span id="valueEmail">01/01/1985</span>
				</div>
			</div>
		</div>		
		<div className="row">
			<div className="col-sm-6">
				<div className="inputField">Zipcode: 
					<span id="valueZip">77005</span>
				</div>
			</div>
			<div className="col-sm-6">
				<input className="form-control" id="inputZip" name="Zip Code" type="text"/>
			</div>
		</div>
		<div className="row">
			<div className="col-sm-6">
				<div className="inputField">Password: 
				</div>
			</div>
			<div className="col-sm-6">
				<input className="form-control" id="inputPass" name="Password" type="password"/>
			</div>
		</div>
		<div className="row">	
			<div className="col-sm-6">
				<div className="inputField">Password confirmation: 
				</div>
			</div>
			<div className="col-sm-6">
				<input className="form-control" id="inputConf" type="password"/>
			</div>
		</div>
		<div>
			<button type="button" className="btn btn-default" id="submitBtn" onClick={(e) => this.checkAll()}>Update</button>
			<span id="passconfirm"></span>
		</div>
	</div>
	</div>
</div>
<div className="footer">
	<span>Contact	 |	  </span>
	<span>About    |    </span>
	<span>FAQs        </span>
</div>

</div>



    )}
}

export default Profile;
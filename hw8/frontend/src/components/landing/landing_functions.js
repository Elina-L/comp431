import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

export const updateBday = () => {
    console.log("updateBday")
    var timeStamp = new Date().getTime();
    var today = new Date();
    var nowYear = today.getFullYear();
    var nowYear_18 = nowYear - 18;
    today.setFullYear(nowYear - 18);
    var nowMonth = today.getMonth();
    var nowDay = today.getDate();
    var birth;

    nowMonth = nowMonth + 1;
    if (nowMonth < 10) {
        nowMonth = "0" + nowMonth;
    } if (nowDay < 10) {
        nowDay = "0" + nowDay;
    }
    var dateOK = nowYear_18 + "-" + nowMonth + "-" + nowDay;

    birth = document.getElementById("bday");
    var birthString = birth.value.toString();
    var birthDate = new Date(birthString);

    document.getElementById("bday").max = dateOK;
    var okDate = new Date(dateOK);
    if (okDate < birthDate) {
        document.getElementById("demo").innerHTML = 
        "You must be 18 or above to sign up.";
        return false;

    } else if (okDate >= birthDate) {
        document.getElementById("demo").innerHTML = "";
        return true;
    } else {
        return false;
    }

}

export const checkPassword = () => {

    console.log('checkPassword')
    var password = document.getElementById("password");
    var confirm_password = document.getElementById("confirm_password");
    var pw_check = document.getElementById("pw_check");
    var pw_valid = false;

    // Variable definitions for login section
    var loginaccn = document.getElementById("loginaccn");
    var loginpw = document.getElementById("loginpw");
    var login = document.getElementById("login");
    var loginMsg = document.getElementById("loginMsg");

    if (password.value != confirm_password.value) {
        pw_check.textContent = "Passwords don't match.";
    } else {
        pw_check.textContent = "";
        pw_valid = true;
    }
}

export const formValidation = (dispatch) => {
    console.log(valid)
    valid = true;
    var nameFormat = /[a-zA-Z][a-zA-Z0-9]*/;
    var name = document.getElementById('accName')

    var emailFormat = /[^@]+@[^@]+[.][a-zA-Z]+/;
    var email = document.getElementById("email");

    var phoneFormat = /\d\d\d-\d\d\d-\d\d\d\d/;
    var phone = document.getElementById("phone");

    var zipFormat = /\d\d\d\d\d/;
    var zipcode = document.getElementById("zipcode");


    var password = document.getElementById("password");
    var confirm_password = document.getElementById("confirm_password");
    var pw_check = document.getElementById("pw_check");
    var pw_valid = false;

    if (!name.value.match(nameFormat)) {
        valid = false;
        console.log(valid);
    }

    if (!email.value.match(emailFormat)) {
        valid = false;
        console.log(valid);
    }

    console.log(updateBday());
    if (!updateBday()) {
        valid = false
        console.log("bday")
    }

    if (!phone.value.match(phoneFormat) || !zipcode.value.match(zipFormat)) {
        valid = false;
        console.log(valid);
    }

    if (password.value != confirm_password.value || password.value.length < 1 || confirm_password.value.length < 1) {
        pw_check.value = "Passwords don't match."
        document.getElementById("password").style.borderColor = "#E34234";
        document.getElementById("confirm_password").style.borderColor = 
            "#E34234";
        valid = false
    }

    if (valid) {
        dispatch({ type: 'NAVIGATION', location: 'MAIN'});
    }
}

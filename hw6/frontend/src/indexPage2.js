import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
// import {render} from 'react-dom';

let valid = true;

const updateBday = () => {
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

const checkPassword = () => {

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

const formValidation = (dispatch) => {
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

export const Index = ({login, checkForm}) => (
<div>
<div className="shareField">
<div className="row row2">
<h1>Rice Book!</h1>
</div>
<div id="share" style={{display: 'none'}}>
    <input type="text" className="form-control" placeholder="share something" 
    id="share"/>
    <input className="btn btn-default" type="button" value="Post"/>
</div>
</div>
    <div className="picWrapper">
        <img className="profilePic" src="https://s.graphiq.com/sites/default/files/10/media/images/Rice_University_170690.png"/>
    </div>
    <div className="container2">
    <div className="profile col-md-6">
        <h3>Sign up for Rice Book</h3>
    <div id="myForm">
        <p>Account name (only letters and numbers)<br/>
            <input className="form-control" type="text" name="accName" id = "accName"
            pattern="[a-zA-Z][a-zA-Z0-9]*" required/>
        </p>
        <p>Display name (optional)<br/>
            <input className="form-control" type="text" name="disName"/>
        </p>
        <p>Email address<br/>
            <input className="form-control" type="email" name="email" id="email" 
            pattern="[^@]+@[^@]+[.][a-zA-Z]+" placeholder="example@email.com" 
            required/>
        </p>
        <p>Phone Number<br/>
            <input className="form-control" type="text" name="phone" id="phone" 
            placeholder="123-456-7890"pattern="\d\d\d-\d\d\d-\d\d\d\d" required/>
        </p>
        <p>Date of Birthday <span id="demo"></span><br/>
            <input className="form-control" type="date" name="bday" id="bday" 
            onChange={(e) => updateBday()} max="" required/>
        </p>
        <p>Zipcode<br/>
            <input className="form-control" type="text" name="zipcode" id="zipcode" 
            placeholder="99999" pattern="\d\d\d\d\d" required/>
        </p>
        <p>Password <span id="pw_check"></span><br/>
            <input className="form-control" type="password" name="password" 
            id="password" placeholder="Password" onKeyUp={(e) => checkPassword()} 
            required/>
        </p>
        <p>Password confirmation<br/>
            <input className="form-control" type="password" name="confirm_pass" 
            id="confirm_password" placeholder="Confirm Password" 
            onKeyUp={(e) => checkPassword()} required/>
        </p>
        <p>
            <input type="hidden" name="timestamp" id="timestamp" value=""/>
        </p>
        <input type="submit" className="btn btn-default" value="Sign up" 
        onClick={checkForm}/>
        <input type="reset" className="btn btn-default" value="Clear"/>
    </div>
</div>
<div className="profile col-md-6">
    <h3>Already signed up?</h3>
    <div>  
        <p>Email account<br/>
            <input className="form-control" type="email" name="accName" 
            id="loginaccn" required/>
        </p>
        <p>Password<br/>
            <input className="form-control" type="password"  id="loginpw" 
            placeholder="Password" required/>
        </p>    
        <p id="loginMsg"></p>
        <input type="submit" onClick={login} className="btn btn-default" value="Login" id="login"/>
    </div>

</div>
</div>
<div className="footer">
    <span>Contact    |    </span>
    <span>About    |    </span>
    <span>FAQs        </span>
</div>
</div>

)

Index.propTypes = {
    login: PropTypes.func.isRequired,
    checkForm: PropTypes.func.isRequired
}

formValidation.propTypes = {
    checkForm: PropTypes.func.isRequired
}

export default connect(null, (dispatch) => {
    return {
        login: () => dispatch({ type: 'NAVIGATION', location: 'MAIN'}),
        checkForm: () => {
            formValidation();
            if (valid) {
                dispatch({ type: 'NAVIGATION', location: 'MAIN'})
            }
        }
    }
})(Index);

// ReactDOM.render(<App/>, document.getElementById('app'));
// export default Index;

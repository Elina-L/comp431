import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {render} from 'react-dom';

class Index extends React.Component {
    
    constructor(props) {
        super(props)
        this.nextId = 2;
        this.state = {
            todoItems: [
                {id:0, text:"This is an item"},
                {id:1, text:"Another item" }
            ]
        }

        this.pw_valid = false;

        this.timeStamp = new Date().getTime();
        this.today = new Date();
        this.nowYear = this.today.getFullYear();
        this.nowYear_18 = this.nowYear - 18;
        this.today.setFullYear(this.nowYear - 18);
        this.nowMonth = this.today.getMonth() + 1;
        this.nowDay = this.today.getDate();

        if (this.nowMonth < 10) {
            this.nowMonth = "0" + this.nowMonth;
        } if (this.nowDay < 10) {
            this.nowDay = "0" + this.nowDay;
        }

        this.dateOK = this.nowYear_18 + "-" + this.nowMonth + "-" + this.nowDay;
        
        this.birthDate;
        this.okDate;
    }

    updateBday() {
        bday.max = this.dateOK;
        this.birthDate = new Date(bday.value.toString());
        this.okDate = new Date(this.dateOK);
        if (this.okDate < this.birthDate) {
            demo.innerHTML = "You must be 18 or above to sign up.";
        } else {
            demo.innerHTML = "";
        }
    }

    checkPassword() {
        if (password.value != confirm_password.value) {
            pw_check.textContent = "Passwords don't match.";
        } else {
            pw_check.textContent = "";
            this.pw_valid = true;
        }
    } 

    checkForm() {
        console.log("Checking Form!!");
    }


    render() { return (
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
    <form id="myForm" method="get" action="main.html">
        <p>Account name (only letters and numbers)<br/>
            <input className="form-control" type="text" name="accName" 
            pattern="[a-zA-Z][a-zA-Z0-9]*" required/>
        </p>
        <p>Display name (optional)<br/>
            <input className="form-control" type="text" name="disName"/>
        </p>
        <p>Email address<br/>
            <input className="form-control" type="email" name="email" 
            pattern="[^@]+@[^@]+[.][a-zA-Z]" placeholder="example@email.com" 
            required/>
        </p>
        <p>Phone Number<br/>
            <input className="form-control" type="text" name="phone" 
            placeholder="123-456-7890"pattern="\d\d\d-\d\d\d-\d\d\d\d" required/>
        </p>
        <p>Date of Birthday <span id="demo"></span><br/>
            <input className="form-control" type="date" name="bday" id="bday" 
            onChange={(e) => this.updateBday()} max="" required/>
        </p>
        <p>Zipcode<br/>
            <input className="form-control" type="text" name="zipcode" 
            placeholder="99999" pattern="\d\d\d\d\d" required/>
        </p>
        <p>Password <span id="pw_check"></span><br/>
            <input className="form-control" type="password" name="password" 
            id="password" placeholder="Password" onKeyUp={(e) => this.checkPassword()} 
            required/>
        </p>
        <p>Password confirmation<br/>
            <input className="form-control" type="password" name="confirm_pass" 
            id="confirm_password" placeholder="Confirm Password" 
            onKeyUp={(e) => this.checkPassword()} required/>
        </p>
        <p>
            <input type="hidden" name="timestamp" id="timestamp" value=""/>
        </p>
        <input type="submit" className="btn btn-default" value="Sign up" 
        onClick={(e) => this.checkForm(this)}/>
        <input type="reset" className="btn btn-default" value="Clear"/>
    </form>
</div>
<div className="profile col-md-6">
    <h3>Already signed up?</h3>
    <form onClick={login}>  
        <p>Email account<br/>
            <input className="form-control" type="email" name="accName" 
            id="loginaccn" required/>
        </p>
        <p>Password<br/>
            <input className="form-control" type="password"  id="loginpw" 
            placeholder="Password" required/>
        </p>    
        <p id="loginMsg"></p>
        <input type="submit" className="btn btn-default" value="Login" id="login"/>
    </form>

</div>
</div>
<div className="footer">
    <span>Contact    |    </span>
    <span>About    |    </span>
    <span>FAQs        </span>
</div>
</div>

    )}
}

export default connect(null, (dispatch) => {
    return {
        login: () => dispatch({ type: 'MAIN'})
    }
    
})(Index);

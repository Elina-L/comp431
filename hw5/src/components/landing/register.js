import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { register } from '../../dummy'
import { updateBday, checkPassword, formValidation } from './register_actions.js'

export const Register = () => (
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
        onClick={formValidation}/>
        <input type="reset" className="btn btn-default" value="Clear"/>
        <span id="message"></span>
    </div>
)

Register.propTypes = {
	checkForm: PropTypes.func.isRequired
}

export default connect(null, (dispatch) => {
	return {
		checkForm: () => dispatch({ type: 'NAVIGATION', location: 'MAIN'})
	}
})(Register)

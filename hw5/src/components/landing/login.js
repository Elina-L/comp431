import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { login, logout } from '../../dummy'

export const Login = ({tryLogin}) => (
    <div>  
        <p>Username<br/>
            <input className="form-control" type="text" name="accName" 
            id="loginaccn" required/>
        </p>
        <p>Password<br/>
            <input className="form-control" type="password"  id="loginpw" 
            placeholder="Password" required/>
        </p>    
        <p id="loginMsg"></p>
        <input type="submit" onClick={tryLogin} className="btn btn-default" value="Login" id="login"/>
        <div id="flag"></div>
    </div>
)

Login.propTypes = {
	tryLogin: PropTypes.func.isRequired,
}

export default connect(null, (dispatch) => {
    const success = () => dispatch({ type: "NAVIGATION", location: "MAIN"});
	return {
		tryLogin: () => {
            console.log("HERE " + success)
            login({success}) 
            // console.log(flag.innerHTML)
            // if (flag.innerHTML == "") {
            //     dispatch({ type: "NAVIGATION", location: "MAIN"})
            // }
        },

        // success: () => dispatch({ type: "NAVIGATION", location: "MAIN"})
	}
})(Login)

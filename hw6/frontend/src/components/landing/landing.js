import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { updateBday, checkPassword, formValidation } from './landing_functions.js';
import Register from './register'
import Login from './login'

let valid = true;

export const Landing = ({login}) => (
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
        <Register />
    </div>
    <div className="profile col-md-6">
	<h3>Already signed up?</h3>
    	<Login />
	</div>
	</div>
	<div className="footer">
	    <span>Contact    |    </span>
	    <span>About    |    </span>
	    <span>FAQs        </span>
	</div>
	</div>
)

Landing.propTypes = {
    login: PropTypes.func.isRequired,
}

export default connect(null, (dispatch) => {
	return {
        login: () => dispatch({ type: 'NAVIGATION', location: 'MAIN'}),		
	}
})(Landing)

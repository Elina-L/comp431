import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { login, logout } from '../../dummy'


export const Header = ({main, tryLogout}) => (
	<div>
		<div className="shareField">
			<div className="row row2">
			<h1>Rice Book!</h1>
			<div className="align-right">
			 	<a onClick={main} type="button" className="btn btn-default" id="submitBtn">Home</a>
				<a onClick={tryLogout} type="button" className="btn btn-default" value="Logout" id="login">Logout</a>
			</div>
			</div>
		</div>
		<div className="picWrapper">
			<img className="profilePic" src="https://upload.wikimedia.org/wikipedia/en/7/70/Shawn_Tok_Profile.jpg"/>
			<input type="file" className="btn btn-default" value="Upload Image" id="upload-image" onChange={(e) => this.doNothing()}/>
		</div>
	</div>
)


Header.propTypes = {
	main: PropTypes.func.isRequired,
	tryLogout: PropTypes.func.isRequired
}

export default connect(null, (dispatch) => {
	return {
		main: () => dispatch({ type: 'NAVIGATION', location: 'MAIN'}),
		tryLogout: () => {
			logout();
			dispatch({ type: 'NAVIGATION', location: 'INDEX'})
		}
	}
})(Header)
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { login, logout } from '../../dummy'


export const Header = ({profile, tryLogout}) => (
	<div>
		<div>
		<div className="shareField">
		    <div className="row row2">
		    <div className="left">
		        <span className="title">Rice Book!</span>
		        <span className="searchbar">
		            <input type="text" className="form-control" placeholder="Search..." 
		            id="search" defaultValue=""/>
		            <input onChange={(e) => this.doNothing()} className="btn btn-default" type="button" value="Search" 
		            id="search-btn"/>
		        </span>     
		    </div>  
		    <div className="align-right">
		        <a onClick={profile} type="button" className="btn btn-default" 
		        id="submitBtn">Profile Page</a>
		        <a onClick={tryLogout} type="button" className="btn btn-default" 
		        value="Logout" id="login">Logout</a>
		    </div>
		    </div>
		</div>
		<div className="share-container">   
		    <div id="share" style={{display: 'block'}} className="row">
		        <textarea type="text" className="form-control" 
		        placeholder="share something" id="shareArea" defaultValue="Share something..."></textarea>
		        <span>Upload Image:</span>
		        <input onChange={(e) => this.doNothing()} type="file" className="btn btn-default" value="Upload Image" 
		        id="upload-image"/>
		        <div className="right right2">
		            <input onChange={(e) => this.doNothing()} className="btn btn-default" type="button" value="Post Image" 
		            id="postimage"/>
		            <input onChange={(e) => this.doNothing()} className="btn btn-default" type="button" value="Post" 
		            id="post"/>
		            <input onChange={(e) => this.doNothing()} className="btn btn-default" type="button" value="Cancel" 
		            id="clear"/>
		        </div>
		    </div>
		</div>	
	</div>
	</div>
)


Header.propTypes = {
	profile: PropTypes.func.isRequired,
	tryLogout: PropTypes.func.isRequired
}

export default connect(null, (dispatch) => {
	return {
		profile: () => dispatch({ type: 'NAVIGATION', location: 'PROFILE'}),
		tryLogout: () => {
			logout();
			dispatch({ type: 'NAVIGATION', location: 'INDEX'})
		}
	}
})(Header)
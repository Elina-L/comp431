import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { getHeadline, updateHeadline } from '../../dummy'

window.onload=function() {
    console.log("window loaded")
    // getHeadline();
}

export const Self = () => (
    <div className="col-md-2 sidebar profile-mini followers"  onLoad={getHeadline}>
        <div className="row first">
            <input style={{display:'none'}} type="text" id="username" placeholder="username" defaultValue="wel1"/>
            <input style={{display:'none'}} type="password"  id="password" placeholder="password" defaultValue="look-sick-spell"/>
                <img src="https://upload.wikimedia.org/wikipedia/en/7/70/Shawn_Tok_Profile.jpg"/>
            <h3 id="name">Kurt Ngyuen</h3>
            <div id="headline-wrapper" >
                <p id="headline"><br/>
                </p>
            </div>
            <input type="text" className="form-control" 
            placeholder="How are you feeling?" id="newHeadline" defaultValue=""/>
            <input onClick={updateHeadline} className="btn btn-default" type="button" value="Update" 
            id="update-headline"/>
        </div>
    </div>
)


Self.propTypes = {
}

export default connect(null, (dispatch) => {
	return {
		profile: () => dispatch({ type: 'NAVIGATION', location: 'PROFILE'})
	}
})(Self)
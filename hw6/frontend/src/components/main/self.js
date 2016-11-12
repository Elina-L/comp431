import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { getHeadline, updateHeadline } from '../../dummy'

export const Self = ({headline, avatar, username}) => {
    return (
    <div className="col-md-2 sidebar profile-mini followers">
        <div className="row first">
            <input style={{display:'none'}} type="text" id="username" placeholder="username" defaultValue="wel1"/>
            <input style={{display:'none'}} type="password"  id="password" placeholder="password" defaultValue="look-sick-spell"/>
                <img src={avatar}/>
            <h3 id="name">{username}</h3>
            <div id="headline-wrapper" >
                <p id="headline">
                    {headline}
                </p>
            </div>
            <input type="text" className="form-control" 
            placeholder="How are you feeling?" id="newHeadline" defaultValue=""/>
            <input onClick={updateHeadline} className="btn btn-default" type="button" value="Update" 
            id="update-headline"/>
        </div>
    </div>
)}

Self.propTypes = {
    headline: PropTypes.string,
    avatar: PropTypes.string,
    username: PropTypes.string
}

export default connect(
    (state) => {
        return {
            headline: state.headline,
            avatar: state.avatar,
            username: state.username
        }
    }, 
    (dispatch) => {
	return {
		profile: () => dispatch({ type: 'NAVIGATION', location: 'PROFILE'}),
	}
})(Self)
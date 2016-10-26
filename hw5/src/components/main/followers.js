import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

export const Followers = () => (
    <div className="col-md-2 followers">
        <input onChange={(e) => this.doNothing()} type="text" className="form-control" placeholder="Search..." id="search2" defaultValue=""/>
        <input onChange={(e) => this.doNothing()} className="btn btn-default" type="button" value="Add Friend" id="search2-btn"/>
        <div className="row first">
            <img src="http://orig04.deviantart.net/aded/f/2013/066/c/2/profile_picture_by_naivety_stock-d5x8lbn.jpg"/>
            <h3>Kevin Leigh</h3>
            <p>"Never give up on things you can't live a day without. [Hong Kong China] 852 Pride. Got7."</p>
            <input onChange={(e) => this.doNothing()} className="btn btn-default unfollow-btn" type="button" value="Unfollow"/>
        </div>
        <div className="row">
            <img src="http://orig10.deviantart.net/b1f3/f/2011/258/1/8/profile_picture_by_ff_stock-d49yyse.jpg"/>
            <h3>Reagan Gettson</h3>
            <p>Mark Tuan SoCal. 626 Work Hard Play Hard</p>
            <input onChange={(e) => this.doNothing()} className="btn btn-default unfollow-btn" type="button" value="Unfollow"/>
        </div>
        <div className="row">
            <img src="http://orig00.deviantart.net/5250/f/2013/298/7/3/profile_picture_by_sd_stock-d6rt7w2.jpg"/>
            <p>BamBam(แบมแบม) 1997 🇹🇭🇰🇷</p>
            <input onChange={(e) => this.doNothing()} className="btn btn-default unfollow-btn" type="button" value="Unfollow"/>
        </div>
    </div>
)


Followers.propTypes = {
}

export default connect(null, (dispatch) => {
	return {
		profile: () => dispatch({ type: 'NAVIGATION', location: 'PROFILE'})
	}
})(Followers)
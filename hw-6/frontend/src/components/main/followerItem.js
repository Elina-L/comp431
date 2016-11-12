import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { resource } from '../../dummy'

export const FollowerItem = ({ avatar, name, headline, followers, 
	unfollowFriend }) => {

	return (
        <div className="row followerItem">
            <img src={avatar}/>
            <h3>{name}</h3>
            <p>{headline}</p>
            <input onChange={(e) => this.doNothing()} onClick={(e) => unfollow(name, {followers, unfollowFriend})} className="btn btn-default unfollow-btn" type="button" value="Unfollow"/>
        </div>
	)
}


export const unfollow = (name, {followers, unfollowFriend}) => {
		let newFollowers = {}
		resource('DELETE', 'following/' + name)
		.then(r => {
			unfollowFriend(name)
		})
	}

FollowerItem.propTypes = {
	avatar: PropTypes.string,
	name: PropTypes.string,
	headline: PropTypes.string,
	followers: PropTypes.object
}

export default connect(
	(state) => {
		return {
			followers: state.followers
		}
	}, 
	(dispatch, ownProps) => {
		return {
			unfollowFriend: (follower) => dispatch({ type: 'DELETEFOLLOWER', follower: follower })
		}
		const unfollowFriend = (friend) => {}
	}


)(FollowerItem)
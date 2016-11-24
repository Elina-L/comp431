import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import FollowerItem from './followerItem.js'
import { resource } from '../../dummy'

export const Followers = ({followers, updateFollowers, addFollowers}) => {
    return (
    <div className="col-md-2 followers">
        <input type="text" className="form-control" placeholder="Search..." id="search2" defaultValue=""/>
        <input onChange={(e) => this.doNothing()} onClick={(e) => addFollower({addFollowers, followers})} 
        className="btn btn-default" type="button" value="Add Friend" id="searchfollower-btn"/>
        <span id="addFollowerMsg"></span>
        <div>
        {Object.keys(followers)
            .map((id) => followers[id])
            .map((follower) =>
                (
                <FollowerItem
                    avatar={follower.avatar}
                    name={follower.username}
                    headline={follower.headline}/>
                ))

            }
        </div>
    </div>
)}

const addFollower = ({addFollowers, followers}) => {
    let addFollowerMsg = document.getElementById('addFollowerMsg')
    addFollowerMsg.innerHTML = ''
    let follower = document.getElementById('search2').value
    if (followers.hasOwnProperty(follower)) {
        addFollowerMsg.innerHTML = '    Already following ' + follower
    }
    else if (follower != '' && !followers.hasOwnProperty(follower)) {
        return resource('PUT', 'following/' + follower)
        .then(r => {
            if (!r.following.includes(follower)) {
                addFollowerMsg.innerHTML = '    User does not exist'
            }
            else {
                addFollowerMsg.innerHTML = ""
            }
        })
        .then(r => resource('GET','following'))
        .then(r => {
          let followersList = {}
          for (let flw of r.following) {
            let user = {
              username: "",
              avatar: "",
              headline: ""
            }
            const followerHeadline = resource('GET', 'headlines/' + flw)
            .then(r => {
              const follower = r.headlines[0]
              user.username = follower.username
              user.headline = follower.headline
            })

            const followerAvatar = resource('GET', 'avatars/' + flw)
            .then(r => {
              const follower = r.avatars[0]
              user.avatar = follower.avatar
            })

            Promise.all([followerHeadline, followerAvatar]).then(() => {
                followersList[user.username] = user
                addFollowers(user)
            }
          )}
        })

    }
}

Followers.propTypes = {
    followers: PropTypes.object,
    updateFollowers: PropTypes.func
}

export default connect(
    (state) => {
        return {
            followers: state.followers
        }
    }, 
    (dispatch, ownProps) => {
	return {
		profile: () => dispatch({ type: 'NAVIGATION', location: 'PROFILE'}),
        updateFollowers: (followers) => 
            dispatch({ type: "UPDATEFOLLOWERS", followers: followers}),
        addFollowers: (follower) => 
            dispatch({ type: "ADDFOLLOWERS", followers: follower})

	}
})(Followers)
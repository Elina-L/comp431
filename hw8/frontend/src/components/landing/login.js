import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { login, logout, resource } from '../../dummy'
import {url} from '../../dummy'

export const Login = ({tryLogin}) => 
    (
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
        <input type="submit" onClick={tryLogin} className="btn btn-default" value="Login" id="login_btn"/>
        <input onClick={() => {window.location = `${url}/auth/facebook`}} className="btn btn-default" value="Log in with Facebook" id="facebook_btn"/>
        <div id="flag"></div>
    </div>
)

Login.propTypes = {
	tryLogin: PropTypes.func.isRequired,
}


export const fetchArticles = () => {
    return (dispatch) => {
        resource('GET', 'articles').then(r => r.articles).then(r => {
            let articles = {}
            r.forEach((article) => {
                articles[article._id] = article
            })
            dispatch({type: "ARTICLES", articles: articles})
            //dispatch(updateArticles(articles))
        })
    }
}

export const updateArticles = (articles) => {
    return {type: "ARTICLES", articles}
}


export const login2 = () => {
    const username = document.querySelector("#loginaccn")
    const password = document.querySelector("#loginpw")
    return () => {
      resource('POST', 'login', {       
        username: username.value,
        password: password.value 
    })
      .then(r => {console.log("LOGIN")})
      .then(r => dispatch(initialVisit()))
      .catch(console.log("login2 error"))
    }
}

export const initialVisit = () => {
    return (dispatch) => {
        resource('GET', 'articles')
            .then(r => {
                dispatch(fetchArticles())
            })
            .catch(console.log("initial visit failed"))
    }
}

export const updateFriendAvatar = (avatar) => {
    return {type: "UPDATEFRIENDAVATARS", friendAvatars: avatar}

}

export default connect(null, (dispatch) => {
    const success = () => dispatch({ type: "NAVIGATION", location: "MAIN"});
    const updateArticles = (articles) => dispatch({ type: "ARTICLES", articles: articles});
    const updateHeadline = (headline) => dispatch({ type: "UPDATEHEADLINE", headline: headline});
    const updateAvatar = (avatar) => dispatch({ type: "UPDATEAVATAR", avatar: avatar});
    const updateEmail = (email) => dispatch({type: "UPDATEEMAIL", email: email});
    const updateZipcode = (zipcode) => dispatch({type: "UPDATEZIPCODE", zipcode: zipcode});
    const updateFriendAvatars = (friendAvatars) => dispatch({type: "UPDATEFRIENDAVATARS",
        friendAvatars: friendAvatars});
    const updateUsername = (username) => dispatch({type: "UPDATEUSERNAME", 
        username: username});
    const updateDOB = (dob) => dispatch({type: "UPDATEDOB", 
        dob: dob});
    const updateFollowers = (followers) => dispatch({ type: 'UPDATEFOLLOWERS', followers: followers})
    return {
		tryLogin: () => {
            login({success, updateArticles, updateHeadline, updateAvatar, updateEmail, 
                updateZipcode, updateFriendAvatars, updateUsername, updateDOB, updateFollowers})
            // dispatch(login2())
            // login2();
        }
	}
})(Login)

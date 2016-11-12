import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { login, logout } from '../../dummy'
import { resource } from '../../dummy.js'
import Promise from 'bluebird'


export const Header = ({main, tryLogout, avatar, tryUpdateAvatar}) => {
	let fd = new FormData()
	
	const handleImageChange = (e) => {
		let image = e.target.files[0]
		fd.append('image', image)
		console.log(image)
	}

	const updateAvatar = () => {
		tryUpdateAvatar(fd)
		fd = new FormData()
	}

	return (
	<div>
		<div className="shareField">
			<div className="row row2">
			<h1>Rice Book!</h1>
			<div className="align-right">
			 	<a onClick={main} type="button" className="btn btn-default" id="home_btn">Home</a>
				<a onClick={tryLogout} type="button" className="btn btn-default" value="Logout" id="logout_btn">Logout</a>
			</div>
			</div>
		</div>
		<div className="picWrapper">
			<img className="profilePic" src={avatar}/>
			<input type="file" accept="image/*" className="btn btn-default" 
			value="Upload Image" id="upload-image" onChange={(e) => handleImageChange(e)}/>
			<input onChange={(e) => this.doNothing()} type="button" 
	      	className="btn btn-default" value="Update" 
	      	onClick={(e) => updateAvatar()} id="edit"/>
		</div>
	</div>
)}

const postAvatar = (fd, {postAvatarSuccess}) => {
	return fetch('https://webdev-dummy.herokuapp.com/avatar', {
		method: 'PUT',
		credentials: 'include',
		body: fd
	})
	.then(r => {
		return (r.headers.get('Content-Type').indexOf('json') > 0) ? r.json() : r.text()
	})
	.then(r => {
		console.log(r)
		postAvatarSuccess(r.avatar)
	})
	.catch((err) => {
		console.log('putAvatar error: ' + err);
	})		
}

Header.propTypes = {
	main: PropTypes.func.isRequired,
	tryLogout: PropTypes.func.isRequired,
	avatar: PropTypes.string,
}

export default connect(
	(state) => {
		return {
            avatar: state.avatar			
		}
	}, 
	(dispatch) => {
		const postAvatarSuccess = (avatar) => {
			dispatch({ type: "UPDATEAVATAR", avatar: avatar});			
		}
	return {
		main: () => dispatch({ type: 'NAVIGATION', location: 'MAIN'}),
		tryLogout: () => {
			logout();
			dispatch({ type: 'NAVIGATION', location: 'INDEX'})
			dispatch({ type: 'LOGOUT'})
		},
		tryUpdateAvatar: (fd) => {
			postAvatar(fd, {postAvatarSuccess})
		}
	}
})(Header)
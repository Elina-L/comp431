import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { resource } from '../../dummy.js'
import Promise from 'bluebird'

export const Content = ({avatar, email, zipcode, dob, username, 
	updateEmail, updateZipcode, updatePassword}) => {
	return (
	<div className="container2">
		<div className="profile2">
			<div className="row">
				<div className="col-sm-6">
					<div className="inputField">Display Name:
					<span id="valueDis">{username}</span>
					</div>
				</div>			
			</div>
			<div className="row">
				<div className="col-sm-6">
					<div className="inputField">Email address: 
						<span id="valueEmail">{email}</span>
					</div>
				</div>
				<div className="col-sm-6">
					<input className="form-control" id="inputEmail" 
					name="Email Address" type="text"/>
				</div>
			</div>
			<div className="row">
				<div className="col-sm-6">
					<div className="inputField">Date of Birth: 
						<span id="valueDOB">{JSON.stringify(dob)}</span>
					</div>
				</div>
			</div>		
			<div className="row">
				<div className="col-sm-6">
					<div className="inputField">Zipcode: 
						<span id="valueZip">{zipcode}</span>
					</div>
				</div>
				<div className="col-sm-6">
					<input className="form-control" id="inputZip" 
					name="Zip Code" type="text"/>
				</div>
			</div>
			<div className="row">
				<div className="col-sm-6">
					<div className="inputField">Password: 
					</div>
				</div>
				<div className="col-sm-6">
					<input className="form-control" id="inputPass" 
					name="Password" type="password"/>
				</div>
			</div>
			<div className="row">	
				<div className="col-sm-6">
					<div className="inputField">Password confirmation: 
					</div>
				</div>
				<div className="col-sm-6">
					<input className="form-control" id="inputConf" 
					type="password"/>
				</div>
			</div>
			<div>
				<button type="button" className="btn btn-default" id="submitBtn" 
				onClick={(e) => checkAll(updateEmail, updateZipcode, updatePassword)}>Update</button>
				<span id="passconfirm"></span>
				<span id="profileMsg"></span>
			</div>
		</div>
	</div>
)}

const checkAll = (updateEmail, updateZipcode, updatePassword) => {
	let email = document.getElementById('inputEmail')
	let zipcode = document.getElementById('inputZip')
	let password = document.getElementById('inputPass')
	let conf = document.getElementById('inputConf')
	let profileMsg = document.getElementById('profileMsg')
	profileMsg.innerHTML = ''
	let list = []
	let payloadEmail = {
		'email' : document.getElementById('valueEmail').innerHTML
	}
	let payloadZip = {
		'zipcode' : document.getElementById('valueZip').innerHTML
	}
	let payloadPass = {
		'password' : ''
	}
	if (email.value != '') {
		console.log("EMAIL")
		let regexp = /[^@]+@[^@]+[.][a-zA-Z]+/
		list.push(' email')
		if (!regexp.test(email.value)) {
			profileMsg.innerHTML = "	Email format should match example@email.com"
		}
		else {
			payloadEmail = {
				"email": email.value
			}
		}
	}
	if (zipcode.value != '') {
		console.log("ZIPCODE")
		let regexp = /\d\d\d\d\d/
		list.push(' zipcode')
		if (!regexp.test(zipcode.value)) {
			profileMsg.innerHTML = "	Zipcode format should match 77005"
		}
		else {
			payloadZip = {
				"zipcode": zipcode.value
			}
		}
	}
	if (password.value != '' || conf.value != '') {
		list.push(' password')
		if (password.value != conf.value) {
			profileMsg.innerHTML = "	Passwords do not match"
		}
		else {
			payloadPass = {
				"password": password.value
			}
		}
	}
	if (profileMsg.innerHTML == '' && list.length > 0) {
		profileMsg.innerHTML = "	Updated" + list
		console.log(payloadEmail, payloadZip, payloadPass)
		return resource('PUT', 'email', payloadEmail)
		.then(r => {
			updateEmail(payloadEmail.email)
		})
		.then(r => resource('PUT', 'zipcode', payloadZip))
		.then(r => {
			updateZipcode(payloadZip.zipcode)
		})
		.then((r) => resource('PUT', 'password', payloadPass))
		.then(r => {
			updatePassword(payloadPass.password)
		})
		.catch((err) => console.log('update profile err:' + err))
	}
}

Content.propTypes = {
    avatar: PropTypes.string,
    email: PropTypes.string,
    username: PropTypes.string,
    zipcode: PropTypes.string,
    dob: PropTypes.object,
}

export default connect(
	(state) => {
		return {
			avatar: state.avatar,
			username: state.username,
			email: state.email,
			zipcode: state.zipcode,
			dob: state.dob,
		}
	}, 
	(dispatch, ownProps) => { 
	// const updateEmail = (email) => dispatch({ type: 'UPDATEEMAIL', email: email})
	// const updateZipcode = (zipcode) => dispatch({ type: 'UPDATEZIPCODE', zipcode: zipcode})
	// const updatePassword = (password) => dispatch({})
	return {
		profile: () => dispatch({ type: 'NAVIGATION', location: 'PROFILE'}),
		updateEmail: (email) => dispatch({ type: 'UPDATEEMAIL', email: email}),
		updateZipcode: (zipcode) => dispatch({ type: 'UPDATEZIPCODE', zipcode: zipcode}),
		updatePassword: (password) => dispatch({})
	}
})(Content)
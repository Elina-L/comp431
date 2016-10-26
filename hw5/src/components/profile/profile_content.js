import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'


export const Content = () => (
	<div className="container2">
		<div className="profile2">
			<div className="row">
				<div className="col-sm-6">
					<div className="inputField">Display Name:
					<span id="valueDis">Elina Liu</span>
					</div>
				</div>			
				<div className="col-sm-6">
					<input className="form-control" id="inputDis" name="Display Name" type="text"/>
				</div>
			</div>
			<div className="row">
				<div className="col-sm-6">
					<div className="inputField">Email address: 
						<span id="valueEmail">a@b.c</span>
					</div>
				</div>
				<div className="col-sm-6">
					<input className="form-control" id="inputEmail" name="Email Address" type="text"/>
				</div>
			</div>
			<div className="row">
				<div className="col-sm-6">
					<div className="inputField">Phone number: 
						<span id="valuePhone">123-456-7890</span>
					</div>
				</div>					
				<div className="col-sm-6">
					<input className="form-control" id="inputPhone" name="Phone Number" type="text"/>
				</div>
			</div>
			<div className="row">
				<div className="col-sm-6">
					<div className="inputField">Date of Birth: 
						<span id="valueEmail">01/01/1985</span>
					</div>
				</div>
			</div>		
			<div className="row">
				<div className="col-sm-6">
					<div className="inputField">Zipcode: 
						<span id="valueZip">77005</span>
					</div>
				</div>
				<div className="col-sm-6">
					<input className="form-control" id="inputZip" name="Zip Code" type="text"/>
				</div>
			</div>
			<div className="row">
				<div className="col-sm-6">
					<div className="inputField">Password: 
					</div>
				</div>
				<div className="col-sm-6">
					<input className="form-control" id="inputPass" name="Password" type="password"/>
				</div>
			</div>
			<div className="row">	
				<div className="col-sm-6">
					<div className="inputField">Password confirmation: 
					</div>
				</div>
				<div className="col-sm-6">
					<input className="form-control" id="inputConf" type="password"/>
				</div>
			</div>
			<div>
				<button type="button" className="btn btn-default" id="submitBtn" onClick={(e) => this.checkAll()}>Update</button>
				<span id="passconfirm"></span>
			</div>
		</div>
	</div>
)


Content.propTypes = {
}

export default connect(null, (dispatch) => {
	return {
		profile: () => dispatch({ type: 'NAVIGATION', location: 'PROFILE'})
	}
})(Content)
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import Header from './header.js';
import Content from './profile_content.js';
import Footer from './footer.js';

export const Profile = () => (
	<div>
		<div>
			<div className="wrapper">
				<Header />
				<Content />
			</div>
		</div>
		<Footer/>
	</div>
)


Profile.propTypes = {
}

export default connect(null, (dispatch) => {
	return {
		profile: () => dispatch({ type: 'NAVIGATION', location: 'PROFILE'})
	}
})(Profile)
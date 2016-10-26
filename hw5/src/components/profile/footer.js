import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'


export const Footer = () => (
	<div className="footer">
		<span>Contact	 |	  </span>
		<span>About    |    </span>
		<span>FAQs        </span>
	</div>
)


Footer.propTypes = {
}

export default connect(null, (dispatch) => {
	return {
		profile: () => dispatch({ type: 'NAVIGATION', location: 'PROFILE'})
	}
})(Footer)
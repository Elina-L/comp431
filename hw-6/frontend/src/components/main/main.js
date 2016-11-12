import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Header from './header.js';
import Content from './main_content.js';
import Footer from './footer.js';
import { getArticles } from '../../dummy.js'

export const Main = () => (
	<div>
		<Header />
		<Content />
		<Footer />
	</div>
)

Main.propTypes = {
}

export default connect(null, (dispatch) => {
	return {
		profile: () => dispatch({ type: 'NAVIGATION', location: 'PROFILE'})
	}
})(Main)
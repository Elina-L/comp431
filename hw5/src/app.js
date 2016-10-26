import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Landing from './components/landing/landing.js';
import Main from './components/main/main.js';
import Profile from './components/profile/profile.js';

export const App = ({location}) => {
	if (location == 'INDEX') {
		return (
			<Landing />
		)
	} else if (location == 'MAIN') {
		return (
			<Main />
		)
	} else if (location == 'PROFILE'){
		return (
			<Profile />
		)
	}
}



App.propTypes = {
	location: PropTypes.string.isRequired,
}

export default connect (
	(state) => {
		return {
			location: state.location
		}
	},
	(dispatch) => {
		return {
			index: () => dispatch({ type: 'INDEX'}),
			main: () => dispatch({ type: 'MAIN'}),
			profile: () => dispatch({ type: 'PROFILE'}),
		}
		
	}
)(App)
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Self from './self.js';
import Cards from './cards.js';
import Articles from '../article/article.js'
import Followers from './followers.js';
import {getArticles} from '../../dummy.js'


export const Content = () => (
	<div className="container" onLoad={getArticles}>
		<Self />
		<Articles />
		<Followers />
	</div>
)


Content.propTypes = {
}

export default connect(null, (dispatch) => {
	return {
		profile: () => dispatch({ type: 'NAVIGATION', location: 'PROFILE'})
	}
})(Content)
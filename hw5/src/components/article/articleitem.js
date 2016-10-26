import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'


export const ArticleItem = ({ author, date, text, id }) => (
	    <div className="row" id={id}>
	        <div className="post">
		        <span>On {date}, {author} said:</span>
		        <div className="text">{ text }</div>
		        <input onChange={(e) => this.doNothing()} type="button" 
		        className="btn btn-default" value="Comment" id="login"/>
	        </div>
	    </div>
)

ArticleItem.propTypes = {
    author: PropTypes.string.isRequired,	
    date: PropTypes.string.isRequired,
   	id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    toggle: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
}

export default connect(null, (dispatch, ownProps) => {
	return {
            remove: () => dispatch({ type: 'REMOVE_TODO', id: ownProps.id }),
            toggle: () => dispatch({ type: 'TOGGLE_TODO', id: ownProps.id })
	}
})(ArticleItem)
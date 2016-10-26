import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { getArticles } from '../../dummy.js'
import ArticleItem from './articleitem.js'
import filterArticles from './filterArticles.js'


const createArticles = () => {
	console.log("creating articles")
	// articleItems = getArticles('wel');
	// // console.log(getArticles('el'))
	// // console.log(getArticles)
	// console.log(articleItems)
	// console.log(getArticles().resolve())
	var articleList = getArticles().then(function(value) {
		return value;
	})

	console.log(value)
}


// var articleItems = getArticles();

export const Articles = ({articleItems}) => (
    <div className="first col-md-8">
        <ul className="" id="articlesHere">
	        	<ArticleItem author={'wel1'} date={'0'} id={0} text={'some text'} />
        </ul>
    </div>
)


Articles.propTypes = {
	articleItems: PropTypes.arrayOf(PropTypes.shape({
        ...ArticleItem.propTypes
    }).isRequired).isRequired,

    addTodo: PropTypes.func.isRequired
}

export default connect(
    (state) => {
        return {
            articleItems: state.articleItems
        }
    }, 
    (dispatch) => {
        return {
            addTodo: (text) => dispatch({ type: 'NAVIGATION', text })
        }
    }
)(Articles)

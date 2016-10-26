import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { getArticles } from '../../dummy.js'
import ArticleItem from './articleitem.js'


const articleItems = getArticles();
console.log()
export const Articles = () => (
    <div className="first">
        <ul className="">
            {articleItems.map(({author, date, id, text}) => (
                <ArticleItem author={'wel1'} date={'0'} id={'0'} text={'some text'} />
            ))}
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
            
        }
    }, 
    (dispatch) => {
        return {
            addTodo: (text) => dispatch({ type: 'NAVIGATION', text })
        }
    }
)(Articles)

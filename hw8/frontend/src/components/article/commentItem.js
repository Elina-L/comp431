import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { resource } from '../../dummy.js'
import Promise from 'bluebird'

export const CommentItem = ({ author, date, text, id, friendAvatars, username, tryUpdateComment2, tryUpdateComment3, testFunc}) => {
	return (    
		<div className="row" id={id}>
	        <div className="comment">
		        <span>{author} commented on {date.split('T')[0]} 
		        at {date.split('T')[1].split('.')[0]}</span>
				<div className="text">{ text }</div>
			    {author != username ? "" :
				(
					<div>
						<input onChange={(e) => this.doNothing()} type="button" 
				      	className="btn btn-default" value="Edit" 
				      	onClick={(e) => toggleEditComment(id)} id="edit"/>
			        	<textarea cols="50" id={id + 'editComment'} 
			        	style={{display: 'none'}} defaultValue={text}></textarea>
						<input onChange={(e) => this.doNothing()} type="button" 
				      	style={{display: 'none'}} className="btn btn-default" value="Update" 
				      	onClick={(e) => middleFunc(tryUpdateComment2)} id={id + 'updateComment'}/>
					</div>
				)}
	        </div>
	    </div>
	)
}


const toggleEditComment = (id) => {
	let textUpdate = document.getElementById(id + 'editComment')
	let updateBtn = document.getElementById(id + 'updateComment')
	if (textUpdate.style.display == 'block') {
		textUpdate.style.display = 'none'
		updateBtn.style.display = 'none'
	} else {
		textUpdate.style.display = 'block'
		updateBtn.style.display = 'block'

	}
}

export const updateComment = (article_id, text, {updateCommentSuccess}) => {
	let endpoint = 'articles/' + article_id
	var payload = {
		text: text
	}
	return resource("PUT", endpoint, payload)
	.then(r => {
		updateCommentSuccess(article_id, r.articles[0])
	})
	.catch((err) => {
		console.log('updateComment error: ' + err);
	})
}

const middleFunc = ({tryUpdateComment2}) => {
	tryUpdateComment2()
}

CommentItem.propTypes = {
	username: PropTypes.string.isRequired,
}

export default connect(
	(state) => {
		return {
			username: state.username
		}
	}, 
	(dispatch, ownProps) => {
		const updateCommentSuccess = (id, articles) => 
		dispatch({ type: "POSTCOMMENT", article_id: id, newArticle: articles})
		const tryUpdateComment3 = () => {
			console.log(ownProps)				
		}
		return {
			tryUpdateComment2: () => {
				console.log(ownProps)
				let text = ""
			}
		}
	}

)(CommentItem)
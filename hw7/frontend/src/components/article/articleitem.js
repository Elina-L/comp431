import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { CommentItem } from './commentItem.js'
import { resource } from '../../dummy.js'
import { updateFriendAvatar } from '../landing/login.js'
import Promise from 'bluebird'

export const ArticleItem = ({ author, date, text, id, image, comments, avatar, 
	getFriendAvatar, friendAvatars, tryUpdateArticle, trypostComment, username, tryUpdateComment}) => {
	let day = date.split('T')[0]
	let time = date.split('T')[1].split('.')[0]
	const _postComment = (id) => {
		let text = document.getElementById(id + 'text')
		if (text.value !== '') {
			trypostComment(text.value)
		}
	}

	const _updateArticle = (id) => {
		let text = document.getElementById(id + 'editText')
		tryUpdateArticle(text.value)
	}

	return (
	    <div className="row" id={id}>
	        <div className="post">
		       	<img src={image}/>
		        <span>{author} posted on {day} at {time}</span>
				<div className="articleText">{ text }</div>
				{
					author != username ? "" :
					(
					<div>
						<input onChange={(e) => this.doNothing()} type="button" 
				      	className="btn btn-default" value="Edit" 
				      	onClick={(e) => toggleEditArticle(id)} id="edit"/>
			        	<textarea cols="50" id={id + 'editText'} 
			        	style={{display: 'none'}} defaultValue={text}></textarea>
						<input onChange={(e) => this.doNothing()} type="button" 
				      	style={{display: 'none'}} className="btn btn-default" value="Update" 
				      	onClick={(e) => _updateArticle(id)} id={id + 'updateText'}/>
			      	</div>)
		        }		        
		        <input onChange={(e) => this.doNothing()} type="button" 
		        className="btn btn-default" value="Comment" onClick={(e) => addComment(id)} id="comment"/>
		        <input onChange={(e) => this.doNothing()} onClick={(e) => toggleComments(id, {comments})} type="button" 
		        className="btn btn-default" value={"Show Comments"} id={id + 'toggle'}/>
		        <textarea cols="50" id={id + 'text'} style={{display: 'none'}}></textarea>
		        <input onChange={(e) => this.doNothing()} onClick={(e) => _postComment(id)} type="button" 
		        className="btn btn-default" value="Add Comment" id={id + 'postComment'} style={{display: 'none'}}/>
		        <div className="comments" id={id + 'comment'} style={{display: 'none'}}>
		        {Object.keys(comments)
	            .map((id) => comments[id])
	            .map((comment) => 
	                (
	            <CommentItem 
	                author={ comment.author }
	                date={ comment.date }
	                text={ comment.text }                
	                id={ comment.commentId }
	                username={username}/>
	            ))
	            }
	            </div>
	        </div>
	    </div>
)}

ArticleItem.propTypes = {
    author: PropTypes.string.isRequired,	
    date: PropTypes.string.isRequired,
   	id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    image: PropTypes.string,
    comments: PropTypes.array,
    toggle: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
}

export const addComment = (id) => {
	let text = document.getElementById(id + 'text')
	let post = document.getElementById(id + 'postComment')

	if (text.style.display == 'block') {
		text.style.display = 'none'
	}
	else {
		text.style.display = 'block'
	}	
	if (post.style.display == 'block') {
		post.style.display = 'none'
	}
	else {
		post.style.display = 'block'
	}
}


export const toggleComments = (id, {cmt}) => {
	let comments = document.getElementById(id + 'comment')
	let toggleBtn = document.getElementById(id + 'toggle')
	if ( comments.style.display == 'block' ) {
		comments.style.display = 'none'
		toggleBtn.value = 'Show Comments'

	}
	else {
		comments.style.display = 'block'
		toggleBtn.value = 'Hide Comments'
	}
}

export const toggleEditArticle = (id) => {
	let textUpdate = document.getElementById(id + 'editText')
	let updateBtn = document.getElementById(id + 'updateText')
	if (textUpdate.style.display == 'block') {
		textUpdate.style.display = 'none'
		updateBtn.style.display = 'none'
	} else {
		textUpdate.style.display = 'block'
		updateBtn.style.display = 'block'

	}
}

export const updateArticle = (article_id, text, {updateArticleSuccess}) => {
	let endpoint = 'articles/' + article_id
	var payload = {
		text: text
	}
	return resource("PUT", endpoint, payload)
	.then(r => {
		updateArticleSuccess(article_id, r.articles[0])
	})
	.catch((err) => {
		console.log('updateArticle error: ' + err);
	})
}

export const postComment = (article_id, text, {postCommentSuccess}) => {
	let endpoint = 'articles/' + article_id
	var payload = {
		text: text,
		commentId: -1
	}

	console.log("posting comment, payload: " + payload)
	console.log(payload)
	return resource('PUT', endpoint, payload)
	.then(r => {
		postCommentSuccess(article_id, r.articles[0])
	})
	.catch((err) => {
		console.log('postComment error: ' + err);
	})
}

export const updateComment = (article_id, text, commentId, {updateCommentSuccess}) => {
	let endpoint = 'articles/' + article_id
	var payload = {
		text: text,
		commentId: -1
	}

	if (commentId) payload.commentId = commentId
	return resource("PUT", endpoint, payload)
	.then(r => {
		updateCommentSuccess(article_id, r.articles[0])
	})
	.catch((err) => {
		console.log('updateComment error: ' + err);
	})
}

export const editArticle = (article_id, message, commentId, {updateCommentSuccess}) => {
	let endpoint = 'articles/' + article_id
	var payload = {
		text: message,
		commentId: commentId
	}
	return resource("PUT", endpoint, payload)
	.then(r => {
		updateArticleSuccess(article_id, r.articles[0])
	})
	.catch((err) => {
		console.log('updateComment error: ' + err);
	})
}


export default connect(
	(state) => {
		return {
			friendAvatars: state.friendAvatars,
			username: state.username
		}
	}, 
	(dispatch, ownProps) => {
		const postCommentSuccess = (id, articles) => dispatch({ type: "POSTARTICLE", article_id: id, newArticle: articles})
		const updateArticleSuccess = (id, articles) => dispatch({ type: 'POSTARTICLE', article_id: id, newArticle: articles})
		const updateCommentSuccess = (id, articles) => 
		dispatch({ type: "POSTARTICLE", article_id: id, newArticle: articles})
		return {
            remove: () => dispatch({ type: 'REMOVE_TODO', id: ownProps.id }),
            toggle: () => dispatch({ type: 'TOGGLE_TODO', id: ownProps.id }),
            getFriendAvatar: (author) => {
            	const avatarName = 'avatars/' + author
            	resource('GET', avatarName)
            	.then(r => {
            		dispatch({ type: 'UPDATEFRIENDAVATARS', friendAvatars: r.avatars})
            	})
            },
            tryUpdateArticle: (text) => updateArticle(ownProps.id, text, {updateArticleSuccess}),
            trypostComment: (text) => editArticle(ownProps.id, text, -1, {postCommentSuccess}),
 			tryUpdateComment: (text) => 
			{
				updateComment(ownProps.id, text, ownProps.id, {updateCommentSuccess})
			}
       }
	}
)(ArticleItem)
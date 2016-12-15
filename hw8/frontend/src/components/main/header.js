import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { login, logout } from '../../dummy'


export const Header = ({profile, tryLogout, dispatchUpdateKeyword, tryPostArticle}) => {
	
	let fd = new FormData()
	let image = ''
	const _postArticle = () => {
		let text = document.getElementById('shareArea')

		fd.append('text', text.value)
		fd.append('image', image)
		
		if (text.value !== '') {
			tryPostArticle(fd)
		}
		fd = new FormData()

	}

	const handleImageChange = (e) => {
		image = e.target.files[0]
	}

	return (
	<div>
		<div>
		<div className="shareField">
		    <div className="row row2">
		    <div className="left">
		        <span className="title">Rice Book!</span>
		        <span className="searchbar">
		            <input type="text" className="form-control" placeholder="Search..." 
		            id="search" defaultValue="" onChange={dispatchUpdateKeyword}/>
		            <input onClick={(e) => updateKeyword()} className="btn btn-default" type="button" value="Search" 
		            id="search-btn"/>
		        </span>     
		    </div>  
		    <div className="align-right">
		        <a onClick={profile} type="button" className="btn btn-default" 
		        id="profile_btn">Profile Page</a>
		        <a onClick={tryLogout} type="button" className="btn btn-default" 
		        value="Logout" id="logout_btn">Logout</a>
		    </div>
		    </div>
		</div>
		<div className="share-container">   
		    <div id="share" style={{display: 'block'}} className="row">
		        <textarea type="text" className="form-control" 
		         id="shareArea" placeholder="Share something..."></textarea>
		        <span>Upload Image:</span>
		        <input onChange={(e) => handleImageChange(e)} type="file" accept="image/*" 
		        className="btn btn-default" value="Upload Image" 
		        id="upload-image"/>
		        <div className="right right2">
		            <input onClick={(e) => _postArticle()} className="btn btn-default" type="button" value="Post" 
		            id="post_btn"/>
		        </div>
		    </div>
		</div>	
	</div>
	</div>
)}

export const updateKeyword = () => {
	if (document.getElementById('search') !== null) {
		var kw = document.getElementById('search').value;
	}
	else {
		var kw = '';
	}
	return kw;
}

export const postArticle = (fd, {postArticleSuccess}) => {
	return fetch('https://ancient-wave-10555.herokuapp.com/article', {
		method: 'POST',
		credentials: 'include',
		body: fd
	})
	.then(r => {
		return (r.headers.get('Content-Type').indexOf('json') > 0) ? r.json() : r.text()
	})
	.then(r => {
		postArticleSuccess(r.articles[0])
	})
	.catch((err) => {
		console.log('postArticle error: ' + err);
	})		
}

Header.propTypes = {
	profile: PropTypes.func.isRequired,
	tryLogout: PropTypes.func.isRequired
}

export default connect(null, (dispatch) => {
	const postArticleSuccess = (article) => dispatch({ type: "POSTARTICLE", newArticle: article})
	return {
		profile: () => dispatch({ type: 'NAVIGATION', location: 'PROFILE'}),
		tryLogout: () => {
			logout();
			dispatch({ type: 'NAVIGATION', location: 'INDEX'});
			dispatch({ type: 'LOGOUT'})
		},
		dispatchUpdateKeyword: () => dispatch({ type: 'UPDATEKEYWORD', keyword: updateKeyword() }),
		tryPostArticle: (fd) => postArticle(fd, {postArticleSuccess})
	}
})(Header)
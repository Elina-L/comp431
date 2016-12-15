
const Reducer = (state = {
	location: "INDEX",
	username: '',
	headline: '',
	avatar: '',
	email: '',
	dob: '',
	zipcode: '',
	phone: 0,
	nextFollowerId: 0,
	followers: [],
	friendAvatars: [],
	articles: [],
	keyword: ''
}, action) => {
	switch(action.type) {
		case 'NAVIGATION':
			return { ...state, location: action.location}
		case 'GETHEADLINE':
			return { ...state, username: action.username, headline: action.headline }
		case 'UPDATEUSERNAME':
			return { ...state, username: action.username }
		case 'UPDATEHEADLINE':
			return { ...state, headline: action.headline }
		case 'UPDATEAVATAR':
			return { ...state, avatar: action.avatar }
		case 'UPDATEDOB':
			return { ...state, dob: action.dob }
		case 'UPDATEFRIENDAVATARS':
			return { ...state, friendAvatars: action.friendAvatars }
		case 'UPDATEFOLLOWERS':
			return { ...state, followers: action.followers }
		case 'ADDFOLLOWERS': {
			let newFollower = action.followers
			let origFollowers = Object.assign({}, state.followers)
			origFollowers[newFollower.username] = newFollower
			console.log(origFollowers)
			return { ...state, followers: origFollowers }
		}
		case 'DELETEFOLLOWER': {
			let follower = action.follower
			let origFollowers = Object.assign({}, state.followers)
			delete origFollowers[follower]
			return { ...state, followers: origFollowers }
		}
		case 'UPDATEEMAIL':
			return { ...state, email: action.email }
		case 'UPDATEZIPCODE':
			return { ...state, zipcode: action.zipcode }
		case 'PHONE':
			return { ...state, phone: action.phone }
		case 'ARTICLES': {
			return { ...state, articles: action.articles }
		}
		case 'UPDATEKEYWORD': {
			return { ...state, keyword: action.keyword }
		}
		case 'GETKEYWORD': {
			return { ...state, avatar: action.avatar }
		}
		case 'POSTARTICLE': {
			let newArticle = action.newArticle
			let postArticleId = action.newArticle._id
			let newArticlesPostArticle = Object.assign({}, state.articles)
			newArticlesPostArticle[postArticleId] = newArticle
			return {
				...state,
				articles: newArticlesPostArticle
			}
		}
		case 'PUTARTICLE': {
			
		}
		case 'POSTCOMMENT': {
			let postCommentArticleId = action.newArticle._id
			let newArticles = Object.assign({}, state.articles)
			newArticles[postCommentArticleId] = action.newArticle
			return {
				...state,
				articles: newArticles
			}
		}
		case 'LOGOUT':
			return {
					location: "INDEX",
					username: '',
					headline: '',
					avatar: '',
					email: '',
					zipcode: '',
					phone: 0,
					nextFriendId: 0,
					friends: [],
					friendAvatars: [],
					articles: [],
					keyword: ''
			}
		default:
			return state
	}
}

export default Reducer
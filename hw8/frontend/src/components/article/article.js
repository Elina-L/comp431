import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import ArticleItem from './articleitem.js'
import filterArticles from './filterArticles.js'
import { updateKeyword } from '../main/header.js'


export const Articles = ({ articles, avatar, img, author, date, text, 
    comments, user, keyword, friendAvatars, followers }) => {
    let followersList = Object.keys(followers)
    followersList.push(user)
    return (
    <div className="first col-md-8">
        {Object.keys(articles)
            .map((id) => articles[id])
            .filter((article) => 
                containsKeyword(article, keyword))
            .filter((article) => fromFollowers(article, followersList))
            .sort(sortDate)
            .slice(0, 10) 
            .map((article) => 
                (
            <ArticleItem 
                author={ article.author }
                image={ article.img }
                date={ article.date }
                text={ article.text }                
                id={ article._id }
                comments={ article.comments }
                avatar={ avatar } />
            ))
            }
     </div>
)}


// Compare function to sort posts by date.
const sortDate = (a, b) => {
    var dateA = new Date(a.date.split('T')[0])
    var dateB = new Date(b.date.split('T')[0])

    if (dateA < dateB) {
        return 1;
    }
    if (dateA > dateB) {
        return -1;
    } else {
        var hourA = a.date.split('T')[1].split(':')[0]
        var hourB = b.date.split('T')[1].split(':')[0]
        if ( hourA < hourB) {
            return 1
        }
        if ( hourA > hourB ) {
            return -1
        }
        else {
            var minA = a.date.split('T')[1].split(':')[1]
            var minB = b.date.split('T')[1].split(':')[1]
            if ( minA < minB) {
                return 1
            }
            if ( minA > minB ) {
                return -1
            }
            else {
                var secA = a.date.split('T')[1].split(':')[2]
                var secB = b.date.split('T')[1].split(':')[2]
                if ( secA < secB) {
                    return 1
                }
                if ( secA > secB ) {
                    return -1
                } else {
                    return 0;
                }
            }
        }
        return 0
    }
}


const containsKeyword = (article, keyword) => {
    const kw = keyword.toString().toLowerCase();
    if (kw == '') {
        return true;
    }
    if (article.text.toLowerCase().indexOf(kw) !== -1 || article.author.toLowerCase().indexOf(kw) !== -1) {
        return true;
    } else {
        return false;
    }
}

const fromFollowers = (article, followersList) => {
    for (const flw of followersList) {
        if (article.author == flw) {
            return true;
        }
    }
}

Articles.PropTypes = {
    articles: PropTypes.object,
    avatar: PropTypes.string,
    img: PropTypes.string,
    author: PropTypes.string,
    date: PropTypes.string,
    text: PropTypes.string,
    comments: PropTypes.array,
    user: PropTypes.string,
    keyword: PropTypes.string,
    friendAvatars: PropTypes.array,
}


export default connect(
    (state) => {
        return {
            user: state.username,
            articles: state.articles,
            keyword: state.keyword,
            friendAvatars: state.friendAvatars,
            followers: state.followers
       }
    }, 
)(Articles)

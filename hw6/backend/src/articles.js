"use strict";

let idNum = 4;
let newArticle = {}
let articleList = {
		'articles' :[
	{
		id: 1,
		author: "Elina",
		text: "An article by Elina",
		date: new Date().toString(),
		comments: []
	},
	{
		id: 2,
		author: "Steven",
		text: "This is Steven's article",
		date: new Date().toString(),
		comments: []
	},
	{
		id: 3,
		author: "Scott",
		text: "This is Scott's article",
		date: new Date().toString(),
		comments: []
	}]
}

const getArticles = (req, res) => {
	console.log('Payload received', req.body)
	if (req.params.id) {
		let list = articleList.articles.filter(
			function(item) {
				return item.id == req.params.id || item.author == req.params.id				
		})
		if (list.length == 0) {
			res.status(404).send("No article found with id " + req.params.id)
		}
		// Somehow more than one article with same id
		if (list.length > 1) {
			res.status(200).send(list)
		}
		else {
			res.status(200).send(list[0])
		}
	}
	res.status(200).send(articleList)
}

const putArticles = (req, res) => {
	console.log('Payload received', req.body)
	res.status(200).send(articleList)
	// Put articles to be implemented in the future
}
const postArticle = (req, res) => {
    console.log('Payload received', req.body)
    if (!req.body.text) {
		res.status(400).send("Invalid input! Post must include text.");
    }
    else {
		newArticle = { 
			id: idNum, 
			author: 'Elina', 
			text: req.body.text, 
			date: new Date().toString(),
			comments: []
	    }
	    idNum++;
	    articleList.articles.push(newArticle);
	    res.status(200).send(newArticle)
	}
}

module.exports = (app) => {
	app.get('/articles/:id*?', getArticles)
	app.put('/articles/:id', putArticles)
	app.post('/article', postArticle)
}

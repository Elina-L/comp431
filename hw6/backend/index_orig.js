
const express = require('express')
const bodyParser = require('body-parser')

let idNum = 4;
let newArticle = {}
let articleList = {
		'articles' :[
	{
		id: 1,
		author: "Scott",
		text: "This is my first article"
	},
	{
		id: 2,
		author: "Max",
		text: "This is Max's article"
	},
	{
		id: 3,
		author: "Bob",
		text: "This is Bob's article"
	}]
}
const addArticle = (req, res) => {
     console.log('Payload received', req.body)
     newArticle = { id: idNum, author: "Elina", text: req.body["body"]}
     idNum++
     articleList.articles.push(newArticle);
     res.send(newArticle)
}

const getArticle = (req, res) => {
	console.log('Payload received', req.body)
	res.send(articleList)
}

const hello = (req, res) => res.send({ hello: 'world' })

const app = express()
app.use(bodyParser.json())
app.post('/article', addArticle)
app.get('/', hello)
app.get("/articles", getArticle)
require('./src/auth')(app)

// Get the port from the environment, i.e., Heroku sets it
const port = process.env.PORT || 3000
const server = app.listen(port, () => {
     const addr = server.address()
     console.log(`Server listening at http://${addr.address}:${addr.port}`)
})


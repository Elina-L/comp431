"use strict";

const express = require('express')
const bodyParser = require('body-parser')
const logger = require('morgan')
const cookieParser = require('cookie-parser')

const app = express()
app.use(bodyParser.json())
app.use(logger('default'))
app.use(cookieParser())

const CORS = (req, res, next) => {
    res.header('Access-Control-Allow-Origin',req.headers.origin)
    res.header('Access-Control-Allow-Credentials',true)
  	res.header('Access-Control-Allow-Headers', 'Authorization, Content-Type, X-Request');
    res.header('Access-Control-Allow-Methods','GET, PUT, POST, DELETE')
  	next();
 }

require('./src/articles.js')(app)
require('./src/auth.js')(app)
require('./src/profile.js')(app)
require('./src/following.js')(app)
require('./src/hello.js')(app)


// Get the port from the environment, i.e., Heroku sets it
const port = process.env.PORT || 3000
const server = app.listen(port, () => {
     const addr = server.address()
     console.log(`Server listening at http://${addr.address}:${addr.port}`)
})

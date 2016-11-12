"use strict";

const md5 = require('md5')
const cookieKey = 'cookie'
const users = {}
const currentUser = {}

const getUser = (username) => {

}

const register = (req, res) => {
     console.log('Payload received', req.body)
     let username = req.body.username
     let password = req.body.password
     if (!username || !password) {
          res.sendStatus(400)
          return
     }
     let salt = Math.random()
     let hash = md5(password + salt)
     users[username] = { salt, hash }
     res.send({ username : username, status : 'success' })
}

const login = (req, res) => {
     console.log('Payload received', req.body)
     let username = req.body.username
     let password = req.body.password
     if (!username || !password) {
          res.sendStatus(400)
          return
     }
     const msg = { username : username, result: 'success'}
     res.send(msg)
}

module.exports = app => {
     app.post('/register', register)
     app.post('/login', login)
}
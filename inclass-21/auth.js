'use strict'

const md5 = require('md5')
const cookieKey = 'cookie'
const users = {}
const currentUser = {}

const getUser(username) {

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
     let salt = users[username].salt
     let hash = users[username].hash
     // let userObj = getUser(username)
     // if (!userObj || userObj.password !== password) {
     //      res.sendStatus(401)
     //      return
     // }

     if (md5(password + salt) === hash) {
          res.cookie(cookieKey, 0,   // generateCode(user)????????
               {maxAge: 3600*1000, httpOnly: true })
          const msg = { username : username, result: 'success'}
          res.send(msg)
     } else {
          res.sendStatus(401)
          return
     }
}

const hello = (req, res) => res.send({ hello: 'world' })

module.exports = app => {
     app.get('/', hello)
     app.post('/register', register)
     app.post('/login', login)
}

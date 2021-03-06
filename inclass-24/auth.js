'use strict'

var redis = require('redis').createClient('redis://h:pbbst43occm1rhavtq8f5e3o158@ec2-54-243-188-149.compute-1.amazonaws.com:10609')
const bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
const md5 = require('md5')


var cookieKey = 'sid'
var db = {users: []}
var pw = md5(['lets_try_this_out', 'password'].join(':'))


db.users.push({'username': 'wel1', 'password': pw, 'salt': 'lets_try_this_out'})

const register = (req, res) => {
    console.log("payload received", req.body)
    var username = req.body.username
    var password = req.body.password
    var salt = [Date.now(), username].join(':')
    if (!username || !password) {
        res.status(400).send("Invalid input")
        return
    }
    if(!getUser(username)){
        res.status(400).send("Username already exist!")
        return
    }
    var newPW = md5([salt, password].join(':'))
    db.users.push({username, 'password': newPW}, salt)
    res.status(200).send("Registration success!")
}

function getUser(name) {
    var result = db.users.filter((user)=> {
        return user.username === name
    })
    if (result.length === 1) {
        return result[0]
    } else {
        return false
    }
}


function generateCode(userObj){
    var username=userObj.username
    var code=[Date.now(),username].join(':')
    return md5(code)
}

const login = (req, res) => {
    var username = req.body.username
    var password = req.body.password
    if (!username || !password) {
        res.status(400).send("invalid input")
        return
    }
    var userObj = getUser(username)
    var userSalt = userObj.salt
    var newPW = md5([userSalt, password].join(':'))

    if (!userObj || userObj.password !== newPW) {
        res.status(401).send("wrong credentials")
        return
    }

    var sid=generateCode(userObj)

    res.cookie(
        cookieKey,
        sid,
        {maxAge: 3600 * 1000, httpOnly: true}
    )

    redis.hmset(sid, userObj)
    var msg = {username: username, result: 'Login success'}
    res.send(msg)
}


const password = (req, res)=>{
    var username = req.body.username
    if (!username || !password) {
        res.status(400).send("invalid input")
        return
    }
    var userObj = getUser(username)
    var userSalt = userObj.salt
    var newPW = md5([userSalt, password].join(':'))

    if (!userObj) {
        res.status(401).send("user does not exist")
        return
    }
    userObj.password=newPW
    var msg = {username: username, result: 'Password updated'}
    res.send(msg)
}

function isLoggedIn(req, res, next) {
    console.log("checking whether user is logged in...")
    var sid = req.cookies[cookieKey]
    if (!sid) {
        return res.status(401).send()
    }

    redis.hgetall(sid, function(err, userObj){
        console.log(sid+' mapped to ' + userObj)
        if(!userObj){
            res.status(401).send("can't find user session in redis")
        }else{
            next()
        }
    })
}

const logout = (req, res)=>{
    res.clearCookie(
        cookieKey,
        {maxAge: 0, httpOnly: true}
    )
    var sid = req.cookies[cookieKey]
    redis.del(sid)
    res.status(200).send("you are successfully logged out")
}

module.exports = app => {
    app.use(bodyParser.json())
    app.use(cookieParser())
    app.post('/login', login)
    app.post('/register', register)
    app.put('/password', isLoggedIn, password)
    app.put('/logout', isLoggedIn, logout)
}

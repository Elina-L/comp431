"use strict";

// this is profile.js which contains all user profile 
// information except passwords which is in auth.js

let profileList = {
    'profiles': [
    {
        username: 'wel1',
        headline: 'This is my headline!',
        email: 'foo@bar.com',
        zipcode: 12345,
        avatar: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4e/DWLeebron.jpg/220px-DWLeebron.jpg',
        dob: Date.parse('1995-01-01')
    },
    {
        username: 'sep1',
        headline: 'Random headline!',
        email: 'foo1@bar.com',
        zipcode: 10000,
        avatar: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4e/DWLeebron.jpg/220px-DWLeebron.jpg',
        dob: Date.parse('1995-01-01')
    },
    {
        username: 'wel1test',
        headline: 'Random headline 2!',
        email: 'foo2@bar.com',
        zipcode: 67890,
        avatar: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4e/DWLeebron.jpg/220px-DWLeebron.jpg',
        dob: Date.parse('1995-01-01')
    },
    {
        username: 'sample',
        headline: 'Default headline!',
        email: 'foo@bar.com',
        zipcode: 77005,
        avatar: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4e/DWLeebron.jpg/220px-DWLeebron.jpg',
        dob: Date.parse('1995-01-01')
    }]
}

const getHeadlines = (req, res) => {

    // we will want middleware to supply this value
    // for now we provide a default
    if (!req.user) req.user = 'wel1'

    const users = req.params.users ? req.params.users.split(',') : [req.user]
    let headlinesList = {
        headlines: []
    };
    
    // this returns only one headline, but we want to send
    // an array of all the requested user's headlines

    for (const user of users) {
        for (const profile of profileList.profiles) {
            if (profile.username == user) {
                let headline = {
                    username: user,
                    headline: profile.headline
                }
                headlinesList.headlines.push(headline)
            }
        }
    }

    res.send(headlinesList)
    // res.send({ headlines: [ 
    //     { username: users[0], headline: profileList.profiles[0].headline} 
    // ] })

    // Implement the logic to return headlines for all requested users
    // each user has a default value.  Only the "req.user" value ever changes.
}

const putHeadline = (req, res) => {

    const defaultUser = 'wel1'
    console.log('Payload received', req.body)
    if (!req.body.headline) {
        res.status(400).send("Invalid input! Post must include headline.");        
    }
    for (let profile of profileList.profiles) {
        if (profile.username == defaultUser) {
            profile.headline = req.body.headline
            const updatedHeadline = {
                username: defaultUser,
                headline: req.body.headline
            }
            res.send(updatedHeadline)
        }
    }
    res.send('to be implemented')    
}

const getEmail = (req, res) => {
    console.log('Payload received', req.body)
    res.send('to be implemented')    
}

const putEmail = (req, res) => {
    console.log('Payload received', req.body)
    res.send('to be implemented')    
}

const getDOB = (req, res) => {
    console.log('Payload received', req.body)
    res.send('to be implemented')    
}

const getZipcode = (req, res) => {
    console.log('Payload received', req.body)
    res.send('to be implemented')    
}

const putZipcode = (req, res) => {
    console.log('Payload received', req.body)
    res.send('to be implemented')    
}

const getAvatars = (req, res) => {
    console.log('Payload received', req.body)
     if (!req.user) req.user = 'wel1'
     const username = req.params.user ? req.params.user : req.user  
     res.send({ avatars: 
        [{
          username: username,
          avatar: profile.avatar
        }]
    })
}

const putAvatar = (req, res) => {
    console.log('Payload received', req.body)
     const avatar = req.fileurl
     if (!avatar) {
          res.status(400).send("Invalid: no avatar.")
          return
     }
     profile.avatar = avatar     
     res.send({
          username: 'wel1',
          avatar: avatar
     })     
}

module.exports = (app) => {
    app.get('/headlines/:users?', getHeadlines)
    app.put('/headline', putHeadline)

    app.get('/email/:user?', getEmail)
    app.put('/email', putEmail)

    app.get('/dob', getDOB)

    app.get('/zipcode/:user?', getZipcode)
    app.put('/zipcode', putZipcode)

    app.get('/avatars/:user?', getAvatars)
    app.put('/avatar', putAvatar)
}

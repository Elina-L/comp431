"use strict";

const getFollowing = (req, res) => {
	console.log('Payload received', req.body)
    res.send('to be implemented')    
}

const updateFollowing = (req, res) => {
	console.log('Payload received', req.body)
    res.send('to be implemented')    
}

const deleteFollowing = (req, res) => {
	console.log('Payload received', req.body)
    res.send('to be implemented')    
}

module.exports = (app) => {
	app.get('/following/:user?', getFollowing)
	app.put('/following/:user', updateFollowing)
    app.delete('/following/:user', deleteFollowing)
}

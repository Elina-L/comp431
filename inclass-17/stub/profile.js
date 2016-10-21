
const index = (req, res) => {
     res.send({ hello: 'world' })
}

let headlines = []
const getHeadlines = (req, res) => {
	res.send({ headlines: [
		{
			username: 'me',
			headline: headlines
		}]

	})
}

const putHeadline = (req, res) => {
	const headline = {
		username: 'wel1',
		headline: req.body.headline || 'no headline'
	}
	headlines.push(headline)

	res.send({
		headline: [ headline ]
	})
}
let email;
const getEmail = (req, res) => {
	res.send({email})
}

const putEmail = (req, res) => {
	email = {
		username: 'wel1',
		email: req.body.email || 'no email'
	}
	res.send({email})
}

let zipcode
const getZipcode = (req, res) => {
	res.send({zipcode})
}

const putZipcode = (req, res) => {
	res.send({
		username: 'wel1',
		zipcode: req.body.zipcode || 'no zipcode'
	})
}

let avatars = []
const getAvatars = (req, res) => {
	res.send({avatar: avatars})
}

const putAvatar = (req, res) => {
	const avatar = {
		username: 'wel1', 
		avatar: req.body.avatar || 'no avatar'
	}
	avatars.push(avatar)
	res.send(avatar)
}


module.exports = app => {
     app.get('/', index)
     app.get('/headlines/:user?', getHeadlines)
     app.put('/headline', putHeadlines)
     app.get('/email/:user?', getEmail)
     app.put('/email', putEmail)
     app.get('/zipcode/:user?', getZipcode)
     app.put('/zipcode', putZipcode)
     app.get('/avatars/:user?', getAvatars)
     app.put('/avatar', putAvatar)

}

"use strict";

const hello = (req, res) => {
	res.send({hello: 'world'})
}

module.exports = (app) => {
	app.get('/', hello)
}

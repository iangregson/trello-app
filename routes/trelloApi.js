var express = require('express');
var router = express.Router();
var Trello = require('node-trello');

var t = new Trello(process.env.TRELLO_KEY, "1a9cda1ae015e92a9101e0405cc9ab42df85222c17971295c9108640c77a1dec")

/* GET root. */
router.get('/', function(req, res) {
	res.json({
  		title: 'trello-api',
  		env: process.env.NODE_ENV,
  		appName: process.env.APP_NAME,
  		message: 'welcome to the trello-api'
	});
});

/* GET talk to Trello. */
router.get('/me', function(req, res) {
	t.get("/1/members/me", function(err, data) {
		if (err) throw err;
		res.json({
			title: 'me@trello',
			data: data
		});
	});
});

/* GET talk to login to Trello. */
router.get('/login', function(req, res) {
	res.redirect('https://trello.com/1/connect?key=' + process.env.TRELLO_KEY + '&name=Ian%27s%20Trello%20App&response_type=token');
});

module.exports = router;
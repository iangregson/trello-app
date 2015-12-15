var express = require('express');

module.exports = function(w) {

var router = express.Router();

// to do - make something like this work so that the user is autmatically directed to /login if there's no token
//router.use(function(req, res, next) {
//	return isLoggedIn(req, res, next);
//});

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
router.get('/me', w.invoke(function(Trello) {
	return function(req, res) {
	
		Trello.get("/1/members/me", function(err, data) {
			if (err) throw err;
			res.json({
				title: 'me@trello',
				data: data
			});
		});
	};
}));

/* GET talk to Trello. */
router.get('/me/boards', function(req, res, next) {
	if (req.cookies.token) { // do this better! Some kind of middleware on the routes
		var t = new Trello(process.env.TRELLO_KEY, req.cookies.token);
		t.get("/1/members/me", function(err, data) {
			if (err) throw err;
			res.json({
				title: 'me@trello',
				data: data
			});
		});
	} else {
		res.json({
			title: 'boards@trello'
		});
	}
});


function isLoggedIn(req, res, next) {

    if (req.cookies.token) return next();
    	
    return res.redirect('/trello-api/login');

}

	return router;

}
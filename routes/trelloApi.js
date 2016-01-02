var express = require('express');
var _ = require('underscore');

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
	
		Trello.get("/1/members/me", { boards: "all", board_fields: "name" }, function(err, data) {
			if (err) throw err;

			var feed = {
				name: data.fullName,
				username: data.username,
				url: data.url,
				boards: data.boards
			}

			res.json(feed);
		});
	};
}));

/* GET cards from Trello board. */
router.get('/me/cards/:boardID', w.invoke(function(Trello) {
		
		return function(req, res) {
	
			Trello.get("/1/boards/" + req.params.boardID + "/cards?fields=name,idList,url", function(err, data) {
				if (err) throw err;

				var feed = {
						boardID: req.params.boardID,
						cards: _.groupBy(data, 'idList')
					};
	
				res.json(feed);
			});
		};
}));

/* GET lists from Trello board. */
router.get('/me/lists/:boardID', w.invoke(function(Trello) {
		
		return function(req, res) {
		
			Trello.get("/1/boards/" + req.params.boardID + "/lists?cards=all&card_fields=name&fields=name", function(err, data) {
				if (err) throw err;
	
				var count = [];

				_.each(data, function(value, key, list) {
					count.push({
						Key: value.name,
						Y: _.size(value.cards)
					});
				});

				var feed = {
					lists: _.groupBy(data, 'name'),
					count: count
				};

				res.json(feed);
			});
		};
}));

//function isLoggedIn(req, res, next) {
//
//    if (req.cookies.token) return next();
//    	
//    return res.redirect('/trello-api/login');
//
//}

	return router;

}
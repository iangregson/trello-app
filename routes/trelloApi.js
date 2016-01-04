var express = require('express');
var _ = require('underscore');

module.exports = function(w) {

var router = express.Router();

//middleware to check whether logged in

router.use(function(req, res, next) {
	isLoggedIn(req, res, next)
});

/* GET root. */
router.get('/', function(req, res) {
	res.json(req.user);
});

/* GET talk to Trello. */
router.get('/me', function(req, res) {

	w.invoke(function(Trello) {
		
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

	}, { token: req.user.oauth.token });
});

/* GET board names. */
router.get('/me/boards', function(req, res) {

	w.invoke(function(Trello) {
		
			Trello.get("/1/members/me", { boards: "all", board_fields: "name" }, function(err, data) {
				if (err) throw err;
	
					var boards = _.groupBy(data.boards, 'id');
	
					res.json(boards);
				});

	}, { token: req.user.oauth.token });
});


/* GET lists from Trello board. */
router.get('/me/lists/:boardID', function(req, res) {

	w.invoke(function(Trello) {
		
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
	}, { token: req.cookies.token });
});

	return router;

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the login
    res.redirect('/login');
}

}
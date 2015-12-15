//auth.js - do the authentication with trello

function setupAuth(TrelloOAuth, app) {


var oauth_secrets = {}; // to do - make this more permanent with Redis? Cookies?

	/* GET talk to login to Trello. */
	app.get('/login', function(req, res) {
		TrelloOAuth.getRequestToken(function(err, callback) {
			oauth_secrets['token'] = callback.oauth_token;
			oauth_secrets[callback.oauth_token] = callback.oauth_token_secret;
			res.redirect(callback.redirect);
		});	
	});

	app.get('/cb', function(req, res) {
		var bag = {
			oauth_token: req.query.oauth_token,
			oauth_token_secret: oauth_secrets[oauth_secrets.token],
			oauth_verifier: req.query.oauth_verifier
		};

		TrelloOAuth.getAccessToken(bag, function(err, callback) {
			res.cookie('token', callback.oauth_access_token);
			res.json(callback);
			//res.redirect('/trello-api/me');
		});

	});

	app.get('/logout', function(req, res) {
		res.clearCookie('token');
		console.log('Cookie cleared');
		res.redirect('/');
	});

}

module.exports = setupAuth
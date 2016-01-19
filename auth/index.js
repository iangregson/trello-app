//auth.js - do the authentication with trello

function setupAuth(User, app) {

	var passport = require('passport');
	var TrelloStrategy = require('passport-trello').Strategy;

	// High level serialize/de-serialize configuration for passport
	passport.serializeUser(function(user, done) {
		done(null, user._id);
	});

 	passport.deserializeUser(function(id, done) {
    	User.
    		findOne({ _id : id }).
    		exec(done);
		});

 	passport.use(new TrelloStrategy(
 		{
			consumerKey: process.env.TRELLO_KEY,
    		consumerSecret: process.env.TRELLO_SECRET,
    		callbackURL: process.env.HOSTNAME + "/cb",
    		passReqToCallback: true,
    		trelloParams: {
    		    scope: "read,write",
    		    name: process.env.APP_NAME,
    		    expiration: "never"
    		},
 		},
 		function(req, token, tokenSecret, profile, done) {
 			User.findOneAndUpdate(
 				{ 'profile.username': profile.id },
 				{
 					$set: {
 						'profile.username': profile.id,
 						'profile.displayName': profile.displayName,
 						'oauth.token': token
 					}
 				},
 				{ 'new': true, upsert: true, runValidators: true },
 				function(error, user) {
 					done(error, user);
 				});
 		}));

 	// Express middlewares
	app.use(require('express-session')({
    	secret: 'this is a secret'
  	}));
	app.use(passport.initialize());
	app.use(passport.session());

	// Express routes for auth
	app.get('/login',
    	passport.authenticate('trello'));

	app.get('/cb',
    	passport.authenticate('trello', { failureRedirect: '/fail' }),
    	function(req, res) {
    		res.cookie('token', req.user.oauth.token);
      		res.redirect('/#/');
    });

}

/* var oauth_secrets = {}; // to do - make this more permanent with Redis? Cookies?

	// GET talk to login to Trello. 
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

} */

module.exports = setupAuth
//passportConfig.trello.index.js

// load OAuth strategy
var OAuthStrategy = require('passport-oauth').OAuthStrategy;

// expose to the app

module.exports = funciton(passport) {

	passport.use('trello', new OAuthStrategy({
		requestTokenURL : "https://trello.com/1/OAuthGetRequestToken";
	  	accessTokenURL : options.accessTokenURL "https://trello.com/1/OAuthGetAccessToken";
	  	userAuthorizationURL : options.userAuthorizationURL "https://trello.com/1/OAuthAuthorizeToken";
		consumerKey: process.env.TRELLO_KEY,
		consumerSecret: process.env.TRELLO_SECRET,
		callbackURL: process.env.HOSTNAME + "/trello-api/cb",
		passReqToCallback: true,
	    userAuthorizationParams: {
	    	scope: "read,write",
	    	name: "MyApp",
	    	expiration: "never"
	    	},
	    },
		function(req, token, tokenSecret, profile, done) {
			
			process.nextTick(function() {

				if (err) return done(err);

				if (!req.user) {
					//login via trello or something
					return done(null, false, req.flash('failureMessage' 'Could not log in'));
				} else {
					//do something else
					console.log(req.user);
					return (done, token);
				}

			});
		};
	));
};
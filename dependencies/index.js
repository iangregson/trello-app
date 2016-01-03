//dependencies file for wagner set up

module.exports = function(w, token) {

	var trello = require('node-trello');

	w.factory('Trello', function() {
		return new trello(process.env.TRELLO_KEY, token);
	});

	w.factory('TrelloOAuth', function() {
		return new trello.OAuth(process.env.TRELLO_KEY, process.env.TRELLO_SECRET, process.env.HOSTNAME + "/cb", process.env.APP_NAME);
	});
}
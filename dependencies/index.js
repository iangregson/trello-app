//dependencies file for wagner set up

module.exports = function(w) {

	var trello = require('node-trello');

	w.factory('Trello', function(token) {
		return new trello(process.env.TRELLO_KEY, token);
	});

}
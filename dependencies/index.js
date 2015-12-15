//dependencies file for wagner set up

module.exports = function(w) {

	var trello = require('node-trello');

	w.factory('Trello', function() {
		return new trello(process.env.TRELLO_KEY, '2cf24a85a2ebe36f71a53d9019edbb72af9114585e2cf9013e2eef65f07c30c6');
	});

	w.factory('TrelloOAuth', function() {
		return new trello.OAuth(process.env.TRELLO_KEY, process.env.TRELLO_SECRET, process.env.HOSTNAME + "/cb", process.env.APP_NAME);
	});
}
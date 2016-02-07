//index of models

var mongoose = require('mongoose');
var _ = require('underscore');

module.exports = function(w) {
	w.invoke(function(Config) {
		mongoose.connect(Config.db);
	});

	w.factory('db', function() {
		return mongoose;
	});

	var User = mongoose.model('User', require('./user'), 'users');

	w.factory('User', function() {
		return User;
	});

	return User;
};
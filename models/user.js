//user model
var mongoose = require('mongoose');

module.exports = new mongoose.Schema({
	profile: {
		username: {
			type: String,
			required: true,
			lowercase: true
		},
		displayName: {
			type: String,
			required: true
		}
	},
	oauth: {
		token: {
			type: String,
			required: true
		}
	}
});

module.exports.set('toObject', { virtuals: true });
module.exports.set('toJSON', { virtuals: true });
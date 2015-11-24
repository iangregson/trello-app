var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	res.render('index', {
  		title: 'my-seed-app',
  		env: process.env.NODE_ENV,
  		appName: process.env.APP_NAME
	});
});

module.exports = router;

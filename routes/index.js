var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	res.render('index', {
  		title: 'trelloApp',
  		env: process.env.NODE_ENV,
  		appName: process.env.APP_NAME
	});
});

router.get('/config', function(req, res) {
	res.json({
  		title: 'trelloApp',
  		env: process.env.NODE_ENV,
  		appName: process.env.APP_NAME,
      hostname: process.env.HOSTNAME
	});
});

module.exports = router;
var assert = require('assert');
var express = require('express');
var superagent = require('superagent');
var wagner = require('wagner-core');
var path = require('path');

var URL_ROOT = 'http://dev.ian:5000';

describe('/ main routes', function() {
  var server;
  var app;
  var succeeded = 0;

  var Config;
  var User;

  before(function() {
    app = express();

    // Bootstrap server
    dependencies = require('../dependencies')(wagner);
    models = require('../models')(wagner);

    // Make models available in tests
    var deps = wagner.invoke(function(User, Config) {
      return {
        User: User,
        Config: Config
      };
    });

    Config = deps.Config;
    User = deps.User;

    app.use(function(req, res, next) {
      User.findOne({}, function(error, user) {
        assert.ifError(error);
        req.user = user;
        next();
      });
    });

    // view engine setup
    app.set('views', path.join(__dirname, '../views'));
    app.set('view engine', 'ejs');

    app.use('/', require('../routes'));
    app.use('/trello-api/', require('../routes/trelloApi'));

    server = app.listen(5000);
  });

  after(function() {
    // Shut the server down when we're done
    server.close();
  });

  beforeEach(function(done) {
    User.remove({}, function(error) {
      assert.ifError(error);
      done();
    });
  });

  beforeEach(function(done) {  

    var users = [{
      profile: {
        username: 'test-user',
        displayName: 'Test User'
      },
      oauth: {
          token: '1a9cda1ae015e92a9101e0405cc9ab42df85222c17971295c9108640c77a1dec'
      }
    }];


    User.create(users, function(error) {
      assert.ifError(error);
      done();
    });
  });

  it('can get a JSON response form /config', function(done) {

    var url = URL_ROOT + '/config';

    superagent.
      get(url).
      end(function(error, res) {
        if (error) {
          return done(error);
        }

        assert.equal(res.status, 200);
        //Response has a body
        assert.ok(res.body);

        var result;
        assert.doesNotThrow(function() {
          result = JSON.parse(res.text);
        });

        ++succeeded;
        done();
      });
  });

  it('can get a response form /', function(done) {

    var url = URL_ROOT + '/';

    superagent.
      get(url).
      end(function(error, res) {
        if (error) {
          return done(error);
        }

        assert.equal(res.status, 200);
        //Response has a body
        assert.ok(res.body);

        ++succeeded;
        done();
      });
  });

  after(function(done) {
    if (succeeded >= 3) {
      console.log("Success!!!");
      done();
    } else {
      done();
    }
  });

});
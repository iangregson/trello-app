var assert = require('assert');
var express = require('express');
var superagent = require('superagent');
var wagner = require('wagner-core');
var path = require('path');

var URL_ROOT = 'http://dev.ian:5000';

describe('/ main routes', function() {
  var server;
  var app;

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

    // view engine setup
    app.set('views', path.join(__dirname, '../views'));
    app.set('view engine', 'ejs');

    app.use('/', require('../routes'));

    server = app.listen(5000);
  });

  after(function() {
    // Shut the server down when we're done
    server.close();
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

        done();
      });
  });

});
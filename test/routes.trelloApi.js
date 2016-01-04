var supertest = require("supertest");
var should = require("should");
var cookieParser = require('cookie-parser');
var mongoose = require('mongoose');

// This agent refers to PORT where program is runninng.

var server = supertest.agent("http://dev.ian:5000");

// UNIT test begin

describe("Routes.trelloApi", function() {

  // within before() you can run all the operations that are needed to setup your tests. In this case
  // I want to create a connection with the database, and when I'm done, I call done().
  before(function(done) {
    // In our tests we use the test db
    mongoose.connect('mongodb://trelloapp2016:2016trelloapp4509@ds037195.mongolab.com:37195/trelloapp');
    server.get("/cb?oauth_token=2a9c2143473b08f93b3e585ae0df03e2&oauth_verifier=e701f2d28b5762e66201f4c49436b08b");
    done();
  });
  // #1 should return home page

  it("/trello-api/ should return json message",function(done){

    // calling home page api
    server
    .get("/trello-api/")
    .expect("Content-type",/json/)
    .expect(200) // THis is HTTP response
    .end(function(err,res){
      // HTTP status should be 200
      res.status.should.equal(200);
      // Error key should be false.
      res.body.id.should.be.ok;
      done();
    });
  });

  // #1 should return home page

  it("/trello-api/me should return json message",function(done){

    // calling home page api
    server
    .get("/trello-api/me")
    .expect("Content-type",/json/)
    .expect(200) // THis is HTTP response
    .end(function(err,res){
      // HTTP status should be 200
      res.status.should.equal(200);
      // Error key should be false.
      res.body.boards.should.be.ok;
      done();
    });
  });

  // #2 should return json info about my trello boards

  it("/trello-api/me/boards should return json message with a boards object",function(done){

    // calling home page api
    server
    .get("/trello-api/me/boards")
    .expect("Content-type",/json/)
    .expect(200) // THis is HTTP response
    .end(function(err,res){
      // HTTP status should be 200
      res.status.should.equal(200);
      // Error key should be false.
      res.body.boards.should.be.ok;
      done();
    });
  });

  // #3 should return json info about my trello lists

  it("/trello-api/me/lists/:boardID should return json message with a lists object and a count object",function(done){

    // calling home page api
    server
    .get("/trello-api/me/lists/55a24b0e333f1efad9f26073")
    .expect("Content-type",/json/)
    .expect(200) // THis is HTTP response
    .end(function(err,res){
      // HTTP status should be 200
      res.status.should.equal(200);
      // Error key should be false.
      res.body.lists.should.be.ok;
      res.body.count.should.be.ok
      done();
    });
  });

});


  // GET Login test
  // it should redirect to trello auth URL

describe("Authentication unit tests",function(){

  it("/login should redirect to the trello authorization page",function(done){

    // calling home page api
    server
    .get("/login")
    .expect("Content-type",/html/)
    .expect(302) // THis is HTTP response
    .end(function(err,res){
      done();
    });
  });

  //2 it should set a cookie with the token

  it("/cb mochashould set a cookie with the access token",function(done){

    // calling home page api
    server
    .get("/cb?oauth_token=2a9c2143473b08f93b3e585ae0df03e2&oauth_verifier=e701f2d28b5762e66201f4c49436b08b")
    .expect("Content-type",/json/)
    .expect(200) // THis is HTTP response
    .expect("set-cookie", "token")
    .end(function(err,res){
      err.should.not.be.ok;
      done();
    });
  });
});
var supertest = require("supertest");
var should = require("should");
var cookieParser = require('cookie-parser');

// This agent refers to PORT where program is runninng.

var server = supertest.agent("http://dev.ian:5000");

// UNIT test begin

describe("Routes.trelloApi GET root unit test",function(){

  // #1 should return home page

  it("should return json message",function(done){

    // calling home page api
    server
    .get("/trello-api/")
    .expect("Content-type",/json/)
    .expect(200) // THis is HTTP response
    .end(function(err,res){
      // HTTP status should be 200
      res.status.should.equal(200);
      // Error key should be false.
      res.body.title.should.equal("trello-api");
      done();
    });
  });

});

describe("Routes.trelloApi GET me unit test",function(){

  // #1 should return home page

  it("should return json message",function(done){

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
});

describe("Routes.trelloApi GET cards unit test",function(){

  // #1 should return json info about my trello boards

  it("should return json message with a cards object",function(done){

    // calling home page api
    server
    .get("/trello-api/me/cards/55a24b0e333f1efad9f26073")
    .expect("Content-type",/json/)
    .expect(200) // THis is HTTP response
    .end(function(err,res){
      // HTTP status should be 200
      res.status.should.equal(200);
      // Error key should be false.
      res.body.cards.should.be.ok;
      done();
    });
  });
});

// get lists from trello

describe("Routes.trelloApi GET lists unit test",function(){

  // #1 should return json info about my trello lists

  it("should return json message with a lists object and a count object",function(done){

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

describe("Routes.trelloApi GET login unit test",function(){

  it("should redirect to the trello authorization page",function(done){

    // calling home page api
    server
    .get("/login")
    .expect("Content-type",/html/)
    .expect(302) // THis is HTTP response
    .end(function(err,res){
      done();
    });
  });
});

  //GET Login cb test
  // it should set a cookie with the token

//describe("Routes.trelloApi GET login callback unit test",function(){
//
//  it("should set a cookie with the access token",function(done){
//
//    // calling home page api
//    server
//    .get("/cb?oauth_token=2a9c2143473b08f93b3e585ae0df03e2&oauth_verifier=e701f2d28b5762e66201f4c49436b08b")
//    .expect("Content-type",/json/)
//    .expect(200) // THis is HTTP response
//    .expect("set-cookie", "token")
//    .end(function(err,res){
//      err.should.not.be.ok;
//      done();
//    });
//  });
//});

  //Get Logout test
  // it should clear the cookie with the token
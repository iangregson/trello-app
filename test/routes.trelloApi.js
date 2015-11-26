var supertest = require("supertest");
var should = require("should");

// This agent refers to PORT where program is runninng.

var server = supertest.agent("http://dev.ian:5000/trello-api/");

// UNIT test begin

describe("Routes.trelloApi GET root unit test",function(){

  // #1 should return home page

  it("should return json message",function(done){

    // calling home page api
    server
    .get("/")
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
    .get("/me")
    .expect("Content-type",/json/)
    .expect(200) // THis is HTTP response
    .end(function(err,res){
      // HTTP status should be 200
      res.status.should.equal(200);
      // Error key should be false.
      res.body.title.should.equal("me@trello");
      done();
    });
  });

});
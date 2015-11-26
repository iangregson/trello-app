"use strict";
describe("trelloApp.version module", function() {
	beforeEach(module("trelloApp.version"));
	describe("version service",function() { 
		it("should return current version", inject(function(version) {
			expect(version).toEqual("0.1")
		}))
	})
});
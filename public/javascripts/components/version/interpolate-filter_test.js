"use strict";
describe("trelloApp.version module", function() {
	beforeEach(module("trelloApp.version"));
	describe("interpolate filter", function() {
		beforeEach(module(function($provide) {
			$provide.value("version","TEST_VER")
		}));
		it("should replace VERSION", inject(function(interpolateFilter) {
			expect(interpolateFilter("before %VERSION% after")).toEqual("before TEST_VER after")
		}))
	})
});
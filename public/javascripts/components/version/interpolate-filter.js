"use strict";
angular.module("trelloApp.version.interpolate-filter",[])
	.filter("interpolate", ["version", function(version) {
		return function(text){
			return String(text).replace(/\%VERSION\%/gm,version)
		}
	}]);
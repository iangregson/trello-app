"use strict";
angular.module("trelloApp.version", [
	"trelloApp.version.interpolate-filter",
	"trelloApp.version.version-directive"
	])
	.value("version","0.1");
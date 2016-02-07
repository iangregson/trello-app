var controllers = require('./components/controllers');
var directives = require('./components/directives');
var filters = require('./components/filters');
var services = require('./components/services');

// dependencies
var _ = require('lodash');
var angular = require('angular');
var d3 = require('d3');
var nv = require('nvd3');
require('angular-ui-router');
require('angular-nvd3');
require('./components/templates');
// put d3.js in here

var components = angular.module('trelloApp.components', ['trelloApp.templates', 'ng']);

_.forEach(controllers, function(controller, name) {
  components.controller(name, controller);
});

_.forEach(directives, function(directive, name) {
  components.directive(name, directive);
});

_.forEach(filters, function(filter, name) {
  components.filter(name, filter);
});

_.forEach(services, function(service, name) {
  components.factory(name, service);
});

var app = angular.module('trelloApp', ['trelloApp.components', 'ui.router', 'nvd3']);

app.config(require('./states'));
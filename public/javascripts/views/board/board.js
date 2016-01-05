"use strict";
var trelloAppBoard = angular.module("trelloApp.board", [ "ngAnimate", "ui.router", "trelloApp.services", "nvd3" ] );
trelloAppBoard.config( ["$stateProvider", function($stateProvider, $stateParams, trelloApiService) {
		
		$stateProvider

		.state("board", {
			url: "/board/:boardID",
			templateUrl:"javascripts/views/board/board.html",
			controller: "boardCtrl as vm"
		})
	}]);

trelloAppBoard.controller("boardCtrl", [ "$stateParams", "$scope", "trelloApiService", function($stateParams, $scope, trelloApiService) {
      			
      			var vm = this;

      			vm.boardID = $stateParams.boardID;

      			trelloApiService.lists($stateParams.boardID).success(function(data) {
      				vm.lists = data.count;
      			});

      			trelloApiService.boards().success(function(data) {
      				vm.boardNames = data;
      			});

				vm.options = {
					chart: {
			                type: 'pieChart',
			                height: 500,
			                x: function(d){return d.Key;},
			                y: function(d){return d.Y;},
			                showLabels: true,
			                transitionDuration: 500,
			                labelThreshold: 0.01,
			                legend: {
			                    margin: {
			                        top: 5,
			                        right: 35,
			                        bottom: 5,
			                        left: 0
			                    }
			                }
			            }
				};
   			}]);
"use strict";
angular.module("trelloApp.board", [ "ngAnimate", "ui.router", "trelloApp.services", "nvd3" ] )
	.config( ["$stateProvider", function($stateProvider, $stateParams, trelloApiService) {
		
		$stateProvider

		.state("board", {
			url: "/board/:boardID",
			templateUrl:"javascripts/views/board/board.html",
			controller: function($stateParams, $scope, trelloApiService) {
      			
      			$scope.boardID = $stateParams.boardID;

      			trelloApiService.lists($stateParams.boardID).success(function(data) {
      				$scope.lists = data.count;
      			});

				$scope.options = {
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
   			}	
		})
	}])
	.controller("boardCtrl", function() {

	});
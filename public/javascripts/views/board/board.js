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
      				console.log(data);
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

				$scope.data = [
			            {
			                Key: "One",
			                Y: 5
			            },
			            {
			                Key: "Two",
			                Y: 2
			            },
			            {
			                Key: "Three",
			                Y: 9
			            },
			            {
			                Key: "Four",
			                Y: 7
			            },
			            {
			                Key: "Five",
			                Y: 4
			            },
			            {
			                Key: "Six",
			                Y: 3
			            },
			            {
			                Key: "Seven",
			                Y: 0.5
			            }
			        ];
   			}	
		})
	}])
	.controller("boardCtrl", function() {

	});
'use strict';

/**
 * @ngdoc function
 * @name photoPortfolioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the photoPortfolioApp
 */
angular.module('photoPortfolioApp')
  .controller('MainCtrl', function ($scope, $http) {

	$http.get('data/photos.json')
		.then(function(res){
				$scope.photodata = res.data;
				console.log($scope.photodata);
			});
  });

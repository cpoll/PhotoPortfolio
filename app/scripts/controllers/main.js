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
			});	
  })
  
  .directive('applyPhotowallDirective', function(){
	 return function applyPhotowall(scope, element, attrs){
		if (scope.$last){
		    var wall = new freewall("#container");
			wall.fitWidth();
		}
	 };  
  });

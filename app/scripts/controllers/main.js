'use strict';

/**
 * @ngdoc function
 * @name photoPortfolioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the photoPortfolioApp
 */
angular.module('photoPortfolioApp')
  .controller('MainCtrl', function ($scope) {
	$scope.photos= ["1", "2", "3"];
  });

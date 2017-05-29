angular.module('EmeraldApp')

	.controller('HomeCtrl', ['$scope', '$location', function($scope, $location){
		
		$scope.tab = 1;

	    $scope.setTab = function(newTab){
	      $scope.tab = newTab;
	    };

	    $scope.isSet = function(tabNum){
	      return $scope.tab === tabNum;
	    };

	    $scope.goTo= function(id){
	    	$location.url(id);
	    };
		
  	}]);
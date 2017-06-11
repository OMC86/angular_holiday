angular.module('EmeraldApp')

	.controller('BookingCtrl', ['$scope', function($scope) {
		
		$scope.visible = false;
		$scope.visibleCalc = false;

		$scope.showForm = function(){
			$scope.visible = $scope.visible ? false : true; 
		};

		$scope.showCalc = function(){
			$scope.visibleCalc = $scope.visibleCalc ? false : true; 
		};
		
	}]);
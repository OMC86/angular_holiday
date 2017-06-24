angular.module('EmeraldApp')

	.controller('BookingCtrl', ['$scope', function($scope) {

		// Show and hide forms
		
		$scope.visible = 0;
		$scope.visibleCalc = 0;

		$scope.showForm = function(){
			$scope.visible = !$scope.visible; 
			if($scope.visibleCalc = $scope.visibleCalc){
				$scope.visibleCalc = !$scope.visibleCalc;
			}
		};

		$scope.showCalc = function(){
			$scope.visibleCalc = !$scope.visibleCalc;
			if($scope.visible = $scope.visible){
				$scope.visible = !$scope.visible;
			} 
		};
		
	}]);
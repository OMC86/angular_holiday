angular.module('EmeraldApp')

	.controller('FooterCtrl', ['$scope', function($scope) {

		$scope.emails = true;
		$scope.emailed = false;
		
		$scope.submitEmail = function(){
			$scope.emails = $scope.emails ? false : true;
			$scope.emailed = $scope.emailed ? false : true;

			$scope.message = 'You have successfuly joined our mailing list with the e-mail '
			 + $scope.user.email + ". If this is incorrect please refresh the page and enter you're e-mail again.";
		}		
	}]);  
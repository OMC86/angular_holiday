angular.module('EmeraldApp')

	.controller('FooterCtrl', ['$scope', function($scope) {

		$scope.emails = 1;
		$scope.emailed = 0;
		
		$scope.submitEmail = function(){
			$scope.emails = !$scope.emails;
			$scope.emailed = !$scope.emailed;

			$scope.message = 'You have successfuly joined our mailing list with the e-mail '
			 + $scope.user.emailHome + ". If this is incorrect please refresh the page and enter you're e-mail again.";
		}		
	}]);  
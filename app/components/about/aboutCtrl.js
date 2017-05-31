angular.module('EmeraldApp')

	.controller('AboutCtrl', ['$scope', function($scope) {

		$scope.emappPageTitle = {
			h1:'About',
			img: {path:'/assets/mont-sunset.jpg', name: 'beach sunset'}
		};
		
	}]);
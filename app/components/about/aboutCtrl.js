angular.module('EmeraldApp')

	.controller('AboutCtrl', ['$scope', function($scope) {

		// Bind image to scope for title display

		$scope.emappPageTitle = {
			h1:'About',
			img: {path:'/assets/mont-sunset.jpg', name: 'beach sunset'}
		};
		
	}]);
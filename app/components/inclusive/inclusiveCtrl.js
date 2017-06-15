angular.module('EmeraldApp')

	.controller('InclusiveCtrl', ['$scope', function($scope) {
		
		// Bind image to scope for title display

		$scope.emappPageTitle = {
			h1:'Montserrat',
			h2:'Accommodation',
			img: {path:'assets/mont-villa-seaview.JPG', name: 'ocean view from viranda'}

		};
		
	}]);
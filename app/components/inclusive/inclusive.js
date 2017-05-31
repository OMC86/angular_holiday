angular.module('EmeraldApp')

	.controller('InclusiveCtrl', ['$scope', function($scope) {
		
		$scope.emappPageTitle = {
			h1:'Montserrat',
			h2:'Accomodation',
			img: {path:'/assets/mont-villa-seaview.jpg', name: 'ocean view from viranda'}

		};
		
	}]);
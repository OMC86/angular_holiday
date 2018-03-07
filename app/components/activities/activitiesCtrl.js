angular.module('EmeraldApp')

	.controller('ActivitiesCtrl', ['$scope', function($scope) {
		
		// Bind image to scope for title display

		$scope.emappPageTitle = {
			h1:'Montserrat',
			h2:'Activities',
			img: {path:'/assets/caribbean-kids.jpg', name: 'kids in the surf'}

		};
		
	}]);
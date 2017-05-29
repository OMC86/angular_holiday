angular.module('EmeraldApp')

	.controller('GeneralInfoCtrl', ['$scope', function($scope) {
		
		$scope.emappPageTitle = {
			h1:'Montserrat',
			h2:'The Island',
			img: {path:'/assets/mont-beach.jpg', name: 'black sand beach'}

		};
		
	}]);
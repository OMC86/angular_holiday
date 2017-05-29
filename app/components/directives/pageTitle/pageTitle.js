angular.module('EmeraldApp')

	.directive('emappPageTitle', function(){
		return{
			restrict: 'E',
			scope: {
				title: '='
			},
			templateUrl: 'app/components/directives/pageTitle/pageTitle.html'
		};
	});
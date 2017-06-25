angular.module('EmeraldApp')

	.directive('navBar', function(){
		return{
			restrict: 'EA',
			templateUrl: 'app/components/directives/nav/nav.html'
		};
	});
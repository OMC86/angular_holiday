angular.module('EmeraldApp')

	.directive('calculator', function(){
		return{
			restrict: 'EA',
			templateUrl: 'app/components/directives/calculator/calculator.html'
		};
	});
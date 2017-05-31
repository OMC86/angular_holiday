angular.module('EmeraldApp')

	.directive('instruction', function(){
		return{
			restrict: 'EA',
			templateUrl: 'app/components/directives/instructions/instructions.html'
		};
	});
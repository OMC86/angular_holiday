angular.module('EmeraldApp')

	.directive('foot', function(){
		return{
			restrict: 'E',
			templateUrl: 'app/components/directives/footer/footer.html',
			controller: 'FooterCtrl'
			
		};
	});
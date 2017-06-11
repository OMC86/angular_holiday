angular.module('EmeraldApp')

	.directive('contact', function(){
		return{
			restrict: 'EA',
			templateUrl: 'app/components/directives/contact/contact.html',
			controller: 'ContactCtrl'
		};
	});
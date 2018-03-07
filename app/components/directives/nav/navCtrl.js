/**
 * Created by Chris on 03/03/2018.
 */
angular.module('EmeraldApp')

	.controller('NavCtrl', ['$scope', '$location', function($scope, $location){

		$scope.goTo= function(id){
	    	$location.url(id);
	    };

	}]);

angular.module('EmeraldApp', [
	'ngRoute',
	'RouteControllers'
	]);

angular.module('EmeraldApp').config(function($locationProvider, $routeProvider){
	$locationProvider.html5Mode(true);  // Enable href routing without hashes
})


$routeProvider.when('/', {
        templateUrl: 'app/components/home/home.html',
        controller: 'homeCtrl'
    })
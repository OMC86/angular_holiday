angular.module('EmeraldApp', [
	'ngRoute',
	])

.config(function($locationProvider, $routeProvider){
	$locationProvider.html5Mode(true);  // Enable href routing without hashes

	$routeProvider

	.when('/', {
        templateUrl: 'app/components/home/home.html',
	    controller: 'HomeCtrl'
	})

	.when('/general', {
		templateUrl: 'app/components/generalInfo/generalInfo.html',
		controller: 'GeneralInfoCtrl'
	})

	.when('/activities', {
		templateUrl: 'app/components/activities/activities.html',
		controller: 'ActivitiesCtrl'
	})

	.when('/inclusive', {
		templateUrl: 'app/components/inclusive/inclusive.html',
		controller: 'InclusiveCtrl'
	})

	.when('/about', {
		templateUrl: 'app/components/about/about.html',
		controller: 'AboutCtrl'
	})

	.when('/booking', {
		templateUrl: 'app/components/booking/booking.html',
		controller: 'BookingCtrl'
	})

})
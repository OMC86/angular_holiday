angular.module('EmeraldApp')

	.controller('ContactCtrl', ['$scope', 'store', '$rootScope', function($scope, store, $rootScope) {


		//Hide contact form and validation message

		$scope.visible = false;
		$scope.message = false;

		//create an empty user object
		$scope.userInfo = {};


		//Once form is submitted get user info and display validation message
		$rootScope.$on('showMessage', function(){
		var title = store.get('title');
		var lastName = store.get('lastName');
		var subject = store.get('subject');

		if(title){
			$scope.validation = 'Thank you ' + title + '.' + lastName + '. A memeber of our team will be in touch shortly to discuss ' + subject + '.'
			$scope.message = $scope.message ? false : true;
		}
	});
	
		//Check form is valid
		$scope.submitForm = function(){

			if($scope.contactForm.$valid){
				$scope.userInfo.title = $scope.user.selectedTitle;
				$scope.userInfo.lastName = $scope.user.lastName;
				$scope.userInfo.subject = $scope.user.subject;
			}
		//store user info in browser
			store.set('title', $scope.userInfo.title);
			store.set('lastName', $scope.userInfo.lastName);
			store.set('subject', $scope.userInfo.subject);
		//Hide contact form
			$scope.visible = $scope.visible ? false : true;
		//call show message
			$rootScope.$broadcast('showMessage')
			
		};			

	}]);

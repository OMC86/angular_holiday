/* The contact form uses submitForm() to check if the form is valid. If it is valid the userInfo object is
populated with the title, first name and last name of the user and angular-storage saves the users information
in the browsers local storage. After that $scope.visible is triggered which hides the contact form and rootScope then
broadcasts 'showMessage'. The 'showMessage' listener function is then called which retrives the information stored in 
the browser. Only if the users information is stored in the browser will the personal message be displayed for the user. */

angular.module('EmeraldApp')

	.controller('ContactCtrl', ['$scope', 'store', '$rootScope', function($scope, store, $rootScope) {


		//Hide contact form and validation message
		$scope.visible = 0;
		$scope.message = 0;

		//create an empty user object
		$scope.userInfo = {};


		//Once form is submitted get user info and display validation message
		$rootScope.$on('showMessage', function(){
		var title = store.get('title');
		var lastName = store.get('lastName');
		var subject = store.get('subject');

		if(title){
			$scope.validation = 'Thank you ' + title + '.' + lastName + '. A memeber of our team will be in touch shortly to discuss ' + subject + '.';
			$scope.message = !$scope.message;
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
			$scope.visible = !$scope.visible;
		//call show message
			$rootScope.$broadcast('showMessage')
			
		};			

	}]);

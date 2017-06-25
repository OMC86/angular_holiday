angular.module('EmeraldApp')

	.controller('ActivitiesCtrl', ['$scope', function($scope) {
		
		// Bind image to scope for title display

		$scope.emappPageTitle = {
			h1:'Montserrat',
			h2:'Activities',
			img: {path:'assets/caribbean-kids.jpg', name: 'kids in the surf'}

		};

		$scope.birds = 0;
		$scope.bats = 0;
		$scope.fish = 0;

		$scope.showBirds = function(){
			$scope.birds = !$scope.birds;
			if($scope.birds = 1){
				$scope.bats = 0;
				$scope.fish = 0;
			}
		}

		$scope.showBats = function(){
			$scope.bats = !$scope.bats;
			if($scope.bats = 1){
				$scope.birds = 0;
				$scope.fish = 0;
			}
		}

		$scope.showFish = function(){
			$scope.fish = !$scope.fish;
			if($scope.fish = 1){
				$scope.bats = 0;
				$scope.birds = 0;
			}
		}
		
	}]);
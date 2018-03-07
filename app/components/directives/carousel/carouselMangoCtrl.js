// To build the carousel I used this tutorial http://onehungrymind.com/build-sweet-photo-slider-angularjs-animate/

angular.module('EmeraldApp')

	.controller('MangoCtrl', ['$scope', function($scope){

		$scope.setInterval = 2000;
		$scope.slides = [
		{id: 0, image: '/assets/Mango-Falls-diner.jpg', caption: 'Open plan kitchen diner'},
		{id: 1, image: '/assets/Mango-Falls-kitchen.jpg', caption: 'Kitchen bar'},
		{id: 2, image: '/assets/Mango-Falls-terrace.jpg', caption: 'Ocean views from terrace'},
		{id: 3, image: '/assets/Mango-Falls-pool.jpg', caption: 'Swimming pool'},
		{id: 4, image: '/assets/Mango-Falls-steps.jpg', caption: 'Steps down to beach'}
		];

		$scope.currentIndex = 0;

		$scope.setCurrentIndex = function(index){
			$scope.currentIndex = index;
		};

		$scope.isCurrentIndex = function(index){
			return $scope.currentIndex === index;
		};

		$scope.prevSlide = function () {
        $scope.currentIndex = ($scope.currentIndex < $scope.slides.length - 1) ? ++$scope.currentIndex : 0;
    	};

    	$scope.nextSlide = function () {
        $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.slides.length - 1;
    	};

	}]);

angular.module('EmeraldApp')

	.controller('WingCtrl', ['$scope', function($scope){

		$scope.setInterval = 2000;
		$scope.slides = [
		{id: 0, image: 'assets/wing-song-living.jpg', caption: 'Open plan kitchen diner'},
		{id: 1, image: 'assets/wing-song-double.jpg', caption: 'Kitchen bar'},
		{id: 2, image: 'assets/wing-song-ensuit.jpg', caption: 'Ocean views from terrace'},
		{id: 3, image: 'assets/wing-song-single.jpg', caption: 'Swimming pool'},
		{id: 4, image: 'assets/wingsong-pool.jpg', caption: 'Steps down to beach'},
		{id: 4, image: 'assets/wingsong-pool3.jpg', caption: 'Steps down to beach'}
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

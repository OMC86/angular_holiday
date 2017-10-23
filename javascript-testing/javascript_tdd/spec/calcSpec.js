describe("Calculator", function(){

	beforeEach(function(){
		calc = new Calculator();
	});

	describe('Addition function', function(){
		it('should add two numbers and return result', function(){
			calc.add(4);
			calc.add(4);
			expect(calc.value).toBe(8);
		});

		it("shoud not return 8 if parameters don't add up to 8", function(){
			calc.add(8);
			calc.add(15);
			expect(calc.value).toBe(23);
		});
		it("should call the alert function if either number is undefined", function(){
			spyOn(window, "alert");
			calc.add('a');
			expect(window.alert).toHaveBeenCalledWith("Argument must be a number");
		});
	});
});


describe("CalculatorCtrl", function(){

	beforeEach(angular.mock.module('EmeraldApp'));

    var $controller;
    beforeEach(angular.mock.inject(function(_$controller_){
        $controller = _$controller_;
    }));

    describe('getTicketPrice', function(){
    	it('should multiply two numbers and return the result', function(){
    		var $scope = {};
			var controller = $controller('CalculatorCtrl', {$scope: $scope});
			$scope.selectedAirport.value = 2;
			$scope.passengers = 2;
			$scope.getTicketPrice();
			expect($scope.price).toBe(4);
		});

		it('should call alert function if either number is not a number', function(){
    		var $scope = {};
			var controller = $controller('CalculatorCtrl', {$scope: $scope});
			spyOn(window, "alert");
			$scope.selectedAirport.value = 2;
			$scope.passengers = 'a';
			$scope.getTicketPrice();
			expect(window.alert).toHaveBeenCalledWith("Both arguments must be numbers");
    	});
	});

	describe('getStyle', function(){
		it('should multiply a number by 1550', function(){
			var $scope = {};
			var controller = $controller('CalculatorCtrl', {$scope: $scope});
			$scope.passengers = 2
			$scope.selectedClass = 'first'
			$scope.getStyle();
			expect($scope.class).toBe(3100)
		});
		it('should call alert function if number is not a number', function(){
    		var $scope = {};
			var controller = $controller('CalculatorCtrl', {$scope: $scope});
			spyOn(window, "alert");
			$scope.passengers = 'a';
			$scope.getStyle();
			expect(window.alert).toHaveBeenCalledWith("Argument must be a number");
    	});
	})
});

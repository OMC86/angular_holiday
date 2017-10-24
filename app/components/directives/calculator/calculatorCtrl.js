/*CalculatorCtrl contains all the logic for the calculator on the booking page. 
There are two main features here that control the behaviour of the calculator.

1) getTotal() is called each time the user makes a selection on the calculator. This in turn calls
getTicketPrice() + getStyle() + getAccom() + getBoard() and then binds the total to the template.

Each function called by getTotal() returns the int value associated with the users selection (stored in the
corresponding JSON array), and finds the total of that value when multiplied by various factors.
For example, getTicketPrice() multiplies the selected value by the number of passengers to get the total price of plane tickets.

Initially the selection is set to 0 by $scope.selectedVariable[0]. When the user makes a selection, it is stored in $scope.selectedVariable.
Therefore $scope.selectedVariable.value will contain the correct value associated with the users selection.

2) The second feature of the calculator is the show functions. These are used to show the next (hidden) section of
the calculator once a selection has been made. The show functions get called at the same time as getTotal().
 */

angular.module('EmeraldApp')

	.controller('CalculatorCtrl', ['$scope', function($scope) {

		// Airport JSON to store and access airport values
		$scope.airports = [
			{id: 0, label: 'Select Airport', value: 0},
			{id: 1, label: 'Gatwick', value: 550, country: 'England'},
			{id: 2, label: 'Edinburgh', value: 650, country: 'Scotland'},
			{id: 3, label: 'Glasgow', value: 650, country: 'Scotland'},
			{id: 4, label: 'Train to Gatwick', value: 610, country: 'Wales'},
			{id: 5, label: 'Coach to Gatwick', value: 600, country: 'Wales'},
			{id: 6, label: 'Belfast', value: 650, country: 'Ireland'},
			{id: 7, label: 'Cork', value: 650, country: 'Ireland'},
			{id: 8, label: 'Dublin', value: 650, country: 'Ireland'}			
			];

		// Make id: 0 default value and sore user selection
		$scope.selectedAirport = $scope.airports[0];

		// Accomodation JSON
		$scope.accommodation = [
			{id: 0, label: 'Select Accomodation', value: 0},
			{id: 1, label: 'Shared Villa', value: 1000},
			{id: 2, label: 'Private Villa', value: 4500}
			];

		// Make id: 0 default value and store user selection
		$scope.selectedAccom = $scope.accommodation[0];

		// Board JSON
		$scope.board = [
			{id: 0, label: 'Select Board', value: 0},
			{id: 1, label: 'Breakfast', value: 50},
			{id: 2, label: 'Half Board', value: 150},
			{id: 3, label: 'Self Catering', value: 0}
			];
		// Make id: 0 default value and sore user selection
		$scope.selectedBoard = $scope.board[0];


		// Price of plane tickts * the number of passengers
		$scope.getTicketPrice = function(passengers, airport){
			passengers = $scope.passengers;
			airport = $scope.selectedAirport.value;
			if(typeof($scope.selectedAirport.value, $scope.passengers) == "number"){
				return $scope.price = airport * passengers;
			}else{
				alert("Both arguments must be numbers");
			}
		};


		// The price of flight class * number of passengers
		$scope.getStyle = function(passengers){
			passengers = $scope.passengers;
			if(typeof($scope.passengers) == "number"){
				if($scope.selectedClass === 'first'){
					return $scope.class = 1550 * passengers;
				}else if($scope.selectedClass === 'second'){
					return $scope.class = 1000 * passengers;
				}else if($scope.selectedClass === 'third'){
					return $scope.class = 550 * passengers;
				}else{
					return $scope.class = 0;
				}
			}else{
				alert("Argument must be a number");
			}
		};
			
		
		// The price of accomodation
		$scope.getAccom = function(bedroom, accomType, id){
			bedroom = $scope.bedrooms;
			accomType = $scope.selectedAccom.value;
			id = $scope.selectedAccom.id;
			if(typeof($scope.bedrooms, $scope.selectedAccom.value, $scope.selectedAccom.id) == "number"){
				if(id === 0){
					return 0;
				}else if(id === 1){
					return accomType * bedroom;
				}else if(id === 2){
					return accomType;
				}else if(id === 3){
					return accomType * bedroom;
				}
			}else{
				alert('Arguments must be numbers');
			}
		};
				

		// The price of board options
		$scope.getBoard = function(pass, boardVal){
			pass = $scope.passengers;
			boardVal = $scope.selectedBoard.value;
			if(typeof($scope.passengers, $scope.selectedBoard.value) == "number"){
				return boardVal * pass;
			}else{
				alert('Arguments must be numbers');
			}
		};

		// Find the sum of the holiday and turn to string for angular currency filter
		$scope.getTotal = function(){
			total = ($scope.getTicketPrice() + $scope.getStyle() + $scope.getAccom() + $scope.getBoard());
			$scope.total = total.toString();

		};

		// Show number of passengers input once airport is selected
		$scope.showPass = function(){
			return $scope.selectedAirport !== 0;
		};

		// Show number of bedrooms and accom type once passenger class has been selected
		$scope.showAccom = function(){
			if($scope.selectedClass === undefined){
				return 0;
			}else{
				return 1;
			}
		};

		// Show board options once accomodation type has been selected
		$scope.showBoard = function(){
			return $scope.selectedAccom.id !== 0;
		};

	
	}]);


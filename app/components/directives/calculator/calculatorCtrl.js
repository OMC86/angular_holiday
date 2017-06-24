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
		// Make id: 0 default value and sore user selection
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
		function getTicketPrice(tix, pass){
			var tickets = $scope.selectedAirport.value;
			var pass = $scope.passengers;
			var price = tickets * pass;
			return price;
		};


		// The price of flight class * number of passengers
		function getStyle(){
			var pass = $scope.passengers;

			if($scope.selectedClass === 'first'){
				return 1550 * pass;
			}else if($scope.selectedClass === 'second'){
				return 1000 * pass;
			}else if($scope.selectedClass === 'third'){
				return 550 * pass;
			}else{
				return 0;
			}
		}
			
		
		// The price of accomodation
		function getAccom(){
			var bedroom = $scope.bedrooms;
			var accomType = $scope.selectedAccom.value;
			var id = $scope.selectedAccom.id;

			if(id === 0){
				return 0;
			}else if(id === 1){
				return accomType * bedroom;
			}else if(id === 2){
				return accomType;
			}else if(id === 3){
				return accomType * bedroom;
			}
		}
				

		// The price of board options
		function getBoard(){
			var pass = $scope.passengers;
			var boardVal = $scope.selectedBoard.value;

			return boardVal * pass;
		}

		// Find the sum of the holiday and turn to string for angular currency filter
		$scope.getTotal = function(){
			total = (getTicketPrice() + getStyle() + getAccom() + getBoard());
			$scope.total = total.toString();

		}

		// Show number of passengers input once airport is selected
		$scope.showPass = function(){
			return $scope.selectedAirport !== 0;
		}

		// Show number of bedrooms and accom type once passenger class has been selected
		$scope.showAccom = function(){
			if($scope.selectedClass === undefined){
				return 0;
			}else{
				return 1;
			}
		}

		// Show board options once accomodation type has been selected
		$scope.showBoard = function(){
			return $scope.selectedAccom.id !== 0;
		}

	
	}]);


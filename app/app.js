angular.module('app', [])

.config([function () {

}])

.run([function (){

}])

.controller('mainController', ['$scope', function($scope){

	var gridHeight = 16;
	var gridWidth = 16;

	var plants = {
		leaf: 'design/images/leaf.png'
	};

	$scope.gridSize = {
		height: 16,
		width: 16
	};

	$scope.rackSize = {
		height: 10,
		width: 10
	}

	$scope.grid = {
		rows: []
	};

	$scope.placePlant = function(x,y){
		//plants
		$scope.grid.rows[y][x].plant = plants.leaf;
		console.log($scope.grid.rows);
		//$scope.$apply();
	};

	$scope.draw = function(){
		$scope.grid.rows = [];
		var rackIndex = {
			x1: Math.floor(($scope.gridSize.width - $scope.rackSize.width)/2),
			y1: $scope.gridSize.height - $scope.rackSize.height
		};
		rackIndex.x2 = rackIndex.x1 + $scope.rackSize.width;
		rackIndex.y2 = rackIndex.y1 + $scope.rackSize.height;

		console.log(rackIndex);


		for (var y = 0; y < $scope.gridSize.height; y++) {
			var row = [];
			for (var x = 0; x < $scope.gridSize.width; x++) {
				row.push({
					x: x,
					y: y,
					plant: null,
					box: (rackIndex.x1 <= x && rackIndex.y1 <= y && rackIndex.x2 > x && rackIndex.y2 > y)
				});
			}
			$scope.grid.rows.push(row);
		}
	}

	$scope.draw();

}])

;
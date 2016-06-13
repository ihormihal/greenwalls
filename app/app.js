angular.module('app', [])

.config([function () {

}])

.run([function (){

}])

.controller('mainController', ['$scope', function($scope){

	var config = {
		minSize: {
			y: 5,
			x: 6
		},
		maxSize: {
			y: 15,
			x: 30
		}
	};

	$scope.width = 100;

	$scope.plants = [
		{
			title: 'Aglaonema',
			price: 120,
			image: 'design/images/plants/Aglaonema.png',
			over: true
		},
		{
			title: 'Anthurium',
			price: 120,
			image: 'design/images/plants/Anthurium.png',
			over: true
		},
		{
			title: 'Asplenium',
			price: 120,
			image: 'design/images/plants/Asplenium.png',
			over: true
		},
		{
			title: 'Dieffenbachia',
			price: 120,
			image: 'design/images/plants/Dieffenbachia.png',
			over: true
		},
		{
			title: 'Epipremnum aureum Neon',
			price: 120,
			image: 'design/images/plants/Epipremnum-aureum-Neon.png',
			over: true
		},
		{
			title: 'Epipremnum aureus',
			price: 120,
			image: 'design/images/plants/Epipremnum-aureus.png',
			over: true
		},
		{
			title: 'Maranta',
			price: 120,
			image: 'design/images/plants/Maranta.png',
			over: true
		},
		{
			title: 'Monstera',
			price: 120,
			image: 'design/images/plants/Monstera.png',
			over: true
		},
		{
			title: 'Nefrolepis',
			price: 120,
			image: 'design/images/plants/Nefrolepis.png',
			over: true
		},
		{
			title: 'Peperomia',
			price: 120,
			image: 'design/images/plants/Peperomia.png',
			over: true
		},
		{
			title: 'Philodendron Brasil',
			price: 120,
			image: 'design/images/plants/Philodendron-Brasil.png',
			over: true
		},
		{
			title: 'Philodendron scandens',
			price: 120,
			image: 'design/images/plants/Philodendron-scandens.png',
			over: true
		},
		{
			title: 'Scindapsus Aureus Pictus',
			price: 120,
			image: 'design/images/plants/Scindapsus-Aureus-Pictus.png',
			over: true
		},
		{
			title: 'Syngonium',
			price: 120,
			image: 'design/images/plants/Syngonium.png',
			over: true
		}
	];

	$scope.price = 0;

	$scope.boxSize = {
		height: 16.6,
		width: 20
	};

	$scope.gridSize = {
		height: 12,
		width: 12
	};

	$scope.rackSize = {
		height: config.minSize.y,
		width: config.minSize.x
	};

	$scope.rackIndex = {
		x1: 0,
		x2: $scope.gridSize.width,
		y1: 0,
		y2: $scope.gridSize.height
	};

	$scope.plusRackHeight = function(){
		if($scope.rackSize.height < $scope.gridSize.height){
			$scope.rackSize.height++;
		}
	};
	$scope.minusRackHeight = function(){
		if($scope.rackSize.height > config.minSize.y){
			$scope.rackSize.height--;
		}
	};
	$scope.plusRackWidth = function(){
		if($scope.rackSize.width < $scope.gridSize.width){
			$scope.rackSize.width++;
		}
	};
	$scope.minusRackWidth = function(){
		if($scope.rackSize.width > config.minSize.x){
			$scope.rackSize.width--;
		}
	};

	$scope.grid = {
		rows: []
	};

	$scope.placePlant = function(index){
		for (var y = 0; y < $scope.gridSize.height; y++) {
			for (var x = 0; x < $scope.gridSize.width; x++) {
				if($scope.grid.rows[y][x].selected){
					$scope.grid.rows[y][x].plant = $scope.plants[index];
					$scope.grid.rows[y][x].selected = false;
				}
			}
		}
		$scope.calcPrice();
	};

	$scope.selectRow = function(index){
		var selected = [];
		for (var x = 0; x < $scope.gridSize.width; x++) {
			if($scope.grid.rows[index][x].box){
				if($scope.grid.rows[index][x].selected){
					selected.push($scope.grid.rows[index][x]);
				}
			}
		}

		if(selected.length > 0){
			for (var x = 0; x < $scope.gridSize.width; x++) {
				$scope.grid.rows[index][x].selected = false;
			}
		}else{
			for (var x = 0; x < $scope.gridSize.width; x++) {
				$scope.grid.rows[index][x].selected = true;
			}
		}
	};

	$scope.selectCell = function(x,y){
		if($scope.grid.rows[y][x].box){
			if($scope.grid.rows[y][x].selected){
				$scope.grid.rows[y][x].selected = false;
			}else{
				$scope.grid.rows[y][x].selected = true;
			}
		}
	};

	$scope.calcPrice = function(){
		var price = 0;
		for (var y = 0; y < $scope.gridSize.height; y++) {
			for (var x = 0; x < $scope.gridSize.width; x++) {
				if($scope.grid.rows[y][x].box){
					price += 100;
					if($scope.grid.rows[y][x].plant){
						price += $scope.grid.rows[y][x].plant.price;
					}
				}
			}
		}
		$scope.price = price;
	};

	$scope.drawGrid = function(){
		$scope.grid.rows = [];
		for (var y = 0; y < $scope.gridSize.height; y++) {
			var row = [];
			for (var x = 0; x < $scope.gridSize.width; x++) {
				row.push({
					x: x,
					y: y,
					selected: false,
					plant: null,
					box: false
				});
			}
			$scope.grid.rows.push(row);
		}
	};

	$scope.drawRack = function(){
		$scope.rackIndex = {
			x1: Math.floor(($scope.gridSize.width - $scope.rackSize.width)/2),
			y1: $scope.gridSize.height - $scope.rackSize.height
		};
		$scope.rackIndex.x2 = $scope.rackIndex.x1 + $scope.rackSize.width;
		$scope.rackIndex.y2 = $scope.rackIndex.y1 + $scope.rackSize.height;

		for (var y = 0; y < $scope.gridSize.height; y++) {
			for (var x = 0; x < $scope.gridSize.width; x++) {
				$scope.grid.rows[y][x].box = false;
			}
		}

		for (var y = $scope.rackIndex.y1; y < $scope.rackIndex.y2; y++) {
			var row = [];
			for (var x = $scope.rackIndex.x1; x < $scope.rackIndex.x2; x++) {
				$scope.grid.rows[y][x].box = true;
			}
		}
	};

	$scope.drawGrid();

	$scope.$watch('rackSize', function(){
		$scope.width = $scope.rackSize.width * 40;
		$scope.drawRack();
		$scope.calcPrice();
	}, true)

}])

;
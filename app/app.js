var composition_1 = '{"grid":{"size":{"x":12,"y":10}},"area":{"size":{"x":6,"y":5},"offset":{"x":3,"y":5}},"cells":[{"x":4,"y":5,"plant":7},{"x":5,"y":5,"plant":1},{"x":6,"y":5,"plant":1},{"x":7,"y":5,"plant":7},{"x":3,"y":6,"plant":7},{"x":4,"y":6,"plant":7},{"x":5,"y":6,"plant":1},{"x":6,"y":6,"plant":1},{"x":7,"y":6,"plant":7},{"x":8,"y":6,"plant":7},{"x":3,"y":7,"plant":7},{"x":4,"y":7,"plant":7},{"x":5,"y":7,"plant":1},{"x":6,"y":7,"plant":1},{"x":7,"y":7,"plant":7},{"x":8,"y":7,"plant":7},{"x":3,"y":8,"plant":7},{"x":4,"y":8,"plant":7},{"x":5,"y":8,"plant":1},{"x":6,"y":8,"plant":1},{"x":7,"y":8,"plant":7},{"x":8,"y":8,"plant":7},{"x":3,"y":9,"plant":0},{"x":4,"y":9,"plant":0},{"x":5,"y":9,"plant":0},{"x":6,"y":9,"plant":0},{"x":7,"y":9,"plant":0},{"x":8,"y":9,"plant":0}]}';
var composition_2 = '{"grid":{"size":{"x":12,"y":10}},"area":{"size":{"x":8,"y":6},"offset":{"x":2,"y":4}},"cells":[{"x":2,"y":4,"plant":6},{"x":3,"y":4,"plant":0},{"x":4,"y":4,"plant":0},{"x":5,"y":4,"plant":0},{"x":6,"y":4,"plant":0},{"x":7,"y":4,"plant":0},{"x":8,"y":4,"plant":0},{"x":9,"y":4,"plant":6},{"x":2,"y":5,"plant":8},{"x":3,"y":5,"plant":6},{"x":4,"y":5,"plant":4},{"x":5,"y":5,"plant":4},{"x":6,"y":5,"plant":4},{"x":7,"y":5,"plant":4},{"x":8,"y":5,"plant":6},{"x":9,"y":5,"plant":8},{"x":2,"y":6,"plant":8},{"x":4,"y":6,"plant":6},{"x":5,"y":6,"plant":4},{"x":6,"y":6,"plant":4},{"x":7,"y":6,"plant":6},{"x":9,"y":6,"plant":8},{"x":2,"y":7,"plant":8},{"x":3,"y":7,"plant":6},{"x":5,"y":7,"plant":6},{"x":6,"y":7,"plant":6},{"x":8,"y":7,"plant":6},{"x":9,"y":7,"plant":8},{"x":2,"y":8,"plant":10},{"x":3,"y":8,"plant":10},{"x":4,"y":8,"plant":6},{"x":7,"y":8,"plant":6},{"x":8,"y":8,"plant":10},{"x":9,"y":8,"plant":10},{"x":2,"y":9,"plant":12},{"x":3,"y":9,"plant":12},{"x":4,"y":9,"plant":12},{"x":5,"y":9,"plant":12},{"x":6,"y":9,"plant":12},{"x":7,"y":9,"plant":12},{"x":8,"y":9,"plant":12},{"x":9,"y":9,"plant":12}]}';


angular.module('app', [])

.config([function () {

}])

.run([function (){

}])

.controller('mainController', ['$scope', function($scope){

	$scope.config = {
		box: {
			realSize: {
				width: 200,
				height: 166
			},
			size: {
				width: 48,
				height: 40
			}
		},
		area: {
			minWidth: 6,
			minHeight: 5,
			maxWidth: 12,
			maxHeight: 10,
		}
	};

	$scope.price = 0;

	$scope.grid = {
		rows: [],
		size: {
			x: $scope.config.area.maxWidth,
			y: $scope.config.area.maxHeight
		}
	};

	$scope.area = {
		size: {
			x: $scope.config.area.minWidth,
			y: $scope.config.area.minHeight
		},
		offset: {
			x: Math.floor(($scope.config.area.maxWidth - $scope.config.area.minWidth/2)),
			y: $scope.config.area.maxHeight - $scope.config.area.minHeight
		}
	};

	$scope.compositions = [
		{
			id: 0,
			title: 'Composition #1',
			image: 'design/images/compositions/comp-1.png',
			json: composition_1
		},
		{
			id: 1,
			title: 'Composition #2',
			image: 'design/images/compositions/comp-2.png',
			json: composition_2
		}
	];

	$scope.plants = [
		{
			id: 0,
			title: 'Aglaonema',
			price: 120,
			image: 'design/images/plants/Aglaonema.png',
			over: true
		},
		{
			id: 1,
			title: 'Anthurium',
			price: 120,
			image: 'design/images/plants/Anthurium.png',
			over: true
		},
		{
			id: 2,
			title: 'Asplenium',
			price: 120,
			image: 'design/images/plants/Asplenium.png',
			over: true
		},
		{
			id: 3,
			title: 'Dieffenbachia',
			price: 120,
			image: 'design/images/plants/Dieffenbachia.png',
			over: true
		},
		{
			id: 4,
			title: 'Epipremnum aureum Neon',
			price: 120,
			image: 'design/images/plants/Epipremnum-aureum-Neon.png',
			over: true
		},
		{
			id: 5,
			title: 'Epipremnum aureus',
			price: 120,
			image: 'design/images/plants/Epipremnum-aureus.png',
			over: true
		},
		{
			id: 6,
			title: 'Maranta',
			price: 120,
			image: 'design/images/plants/Maranta.png',
			over: true
		},
		{
			id: 7,
			title: 'Monstera',
			price: 120,
			image: 'design/images/plants/Monstera.png',
			over: true
		},
		{
			id: 8,
			title: 'Nefrolepis',
			price: 120,
			image: 'design/images/plants/Nefrolepis.png',
			over: true
		},
		{
			id: 9,
			title: 'Peperomia',
			price: 120,
			image: 'design/images/plants/Peperomia.png',
			over: true
		},
		{
			id: 10,
			title: 'Philodendron Brasil',
			price: 120,
			image: 'design/images/plants/Philodendron-Brasil.png',
			over: true
		},
		{
			id: 11,
			title: 'Philodendron scandens',
			price: 120,
			image: 'design/images/plants/Philodendron-scandens.png',
			over: true
		},
		{
			id: 12,
			title: 'Scindapsus Aureus Pictus',
			price: 120,
			image: 'design/images/plants/Scindapsus-Aureus-Pictus.png',
			over: true
		},
		{
			id: 13,
			title: 'Spathiphyllum',
			price: 120,
			image: 'design/images/plants/Spathiphyllum.png',
			over: true
		},
		{
			id: 14,
			title: 'Syngonium',
			price: 120,
			image: 'design/images/plants/Syngonium.png',
			over: true
		}
	];

	$scope.plusAreaHeight = function(){
		if($scope.area.size.y < $scope.grid.size.y){
			$scope.area.size.y++;
		}
	};
	$scope.minusAreaHeight = function(){
		if($scope.area.size.y > $scope.config.area.minHeight){
			$scope.area.size.y--;
		}
	};
	$scope.plusAreaWidth = function(){
		if($scope.area.size.x < $scope.grid.size.x){
			$scope.area.size.x++;
		}
	};
	$scope.minusAreaWidth = function(){
		if($scope.area.size.x > $scope.config.area.minWidth){
			$scope.area.size.x--;
		}
	};

	$scope.placePlant = function(index){
		for (var y = 0; y < $scope.grid.size.y; y++) {
			for (var x = 0; x < $scope.grid.size.x; x++) {
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
		for (var x = 0; x < $scope.grid.size.x; x++) {
			if($scope.grid.rows[index][x].selected){
				selected.push($scope.grid.rows[index][x]);
			}
		}

		if(selected.length > 0){
			for (var x = 0; x < $scope.grid.size.x; x++) {
				$scope.grid.rows[index][x].selected = false;
			}
		}else{
			for (var x = 0; x < $scope.grid.size.x; x++) {
				if($scope.grid.rows[index][x].area){
					$scope.grid.rows[index][x].selected = true;
				}
			}
		}
	};

	$scope.selectCell = function(x,y){
		if($scope.grid.rows[y][x].area){
			$scope.grid.rows[y][x].selected = !$scope.grid.rows[y][x].selected;
		}
	};

	$scope.calcPrice = function(){
		var price = 0;
		for (var y = 0; y < $scope.grid.size.y; y++) {
			for (var x = 0; x < $scope.grid.size.x; x++) {
				if($scope.grid.rows[y][x].area){
					//price += 100;
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
		for (var y = 0; y < $scope.grid.size.y; y++) {
			var row = [];
			for (var x = 0; x < $scope.grid.size.x; x++) {
				row.push({
					selected: false,
					plant: null,
					area: false
				});
			}
			$scope.grid.rows.push(row);
		}
	};

	$scope.drawArea = function(){
		$scope.area.offset = {
			x: Math.floor(($scope.grid.size.x - $scope.area.size.x)/2),
			y: $scope.grid.size.y - $scope.area.size.y
		};

		//remove area fill
		for (var y = 0; y < $scope.grid.size.y; y++) {
			for (var x = 0; x < $scope.grid.size.x; x++) {
				$scope.grid.rows[y][x].area = false;
			}
		}

		for (var y = $scope.area.offset.y; y < $scope.grid.size.y; y++) {
			var row = [];
			for (var x = $scope.area.offset.x; x < $scope.area.offset.x + $scope.area.size.x; x++) {
				$scope.grid.rows[y][x].area = true;
			}
		}
	};


	$scope.saveComposition = function(){
		var output = {
			grid: {
				size: $scope.grid.size
			},
			area: {
				size: $scope.area.size,
				offset: $scope.area.offset
			},
			cells: []
		};
		for (var y = 0; y < $scope.grid.size.y; y++) {
			for (var x = 0; x < $scope.grid.size.x; x++) {
				if($scope.grid.rows[y][x].plant){
					output.cells.push({
						x: x,
						y: y,
						plant: $scope.grid.rows[y][x].plant.id
					});
				}
			}
		}
		console.log(angular.toJson(output));
	};

	$scope.clearArea = function(){
		for (var y = 0; y < $scope.grid.size.y; y++) {
			for (var x = 0; x < $scope.grid.size.x; x++) {
				$scope.grid.rows[y][x].plant = null;
			}
		}
	};

	$scope.selectComposition = function(index){
		var data = angular.fromJson($scope.compositions[index].json);
		$scope.grid.size = data.grid.size;
		$scope.area.size = data.area.size;
		$scope.area.offset = data.area.offset;

		$scope.drawGrid();
		$scope.drawArea();
		for (var i = 0; i < data.cells.length; i++) {
			var cell = data.cells[i];
			for (var j = 0; j < $scope.plants.length; j++) {
				if($scope.plants[j].id == cell.plant){
					$scope.grid.rows[cell.y][cell.x].plant = $scope.plants[j];
				}
			}
		}
	};

	$scope.deleteSelected = function(){
		for (var y = 0; y < $scope.grid.size.y; y++) {
			for (var x = 0; x < $scope.grid.size.x; x++) {
				if($scope.grid.rows[y][x].selected){
					$scope.grid.rows[y][x].selected = false;
					$scope.grid.rows[y][x].plant = null;
				}
			}
		}
		$scope.calcPrice();
		$scope.$apply();
	};

	document.onkeyup = function(event){
		event.preventDefault();
		console.log(event.keyCode);
		if(event.keyCode == 100 || event.keyCode == 68 || event.keyCode == 46 || event.keyCode == 8) //"D" or "Delete" or "BackSpase"
		{
			$scope.deleteSelected();
		}
	};

	$scope.drawGrid();

	$scope.$watch('area', function(){
		$scope.drawArea();
		$scope.calcPrice();
	}, true);

}])

.directive('carousel', function() {
	return {
		restrict: 'E',
		scope: {
			items: '=',
			action: '&'
		},
		templateUrl: 'app/templates/carousel.html',
		controller: ['$scope', '$element', '$attrs', function($scope, $element, $attrs) {

			var carouselWrapper = $element[0].querySelector('.carousel-wrapper');
			var carouselContent = $element[0].querySelector('.carousel-content');

			$scope.config = {
				items: 8,
				itemWidth: 100
			};
			$scope.carousel = {
				from: 0,
				left: 0,
				allowPrev: false,
				allowNext: false,
				prev: function(){
					$scope.carousel.from--;
					$scope.carousel.move();
				},
				next: function(){
					$scope.carousel.from++;
					$scope.carousel.move();
				},
				move: function(){
					if($scope.carousel.from < 0){
						$scope.carousel.from = 0;
					}
					if($scope.carousel.from + $scope.config.items > $scope.items.length){
						$scope.carousel.from = $scope.items.length - $scope.config.items;
					}
					$scope.carousel.left = - ($scope.carousel.from * $scope.config.itemWidth);
					carouselContent.style.left = $scope.carousel.left +'px';

					checkNav();
				}
			};

			checkNav();

			function checkNav(){
				if($scope.carousel.from <= 0){
					$scope.carousel.allowPrev = false;
				}else{
					$scope.carousel.allowPrev = true;
				}
				if($scope.carousel.from + $scope.config.items >= $scope.items.length){
					$scope.carousel.allowNext = false;
				}else{
					$scope.carousel.allowNext = true;
				}
			};

			carouselWrapper.style.width = $scope.config.itemWidth * $scope.config.items +'px';
			carouselContent.style.width = $scope.config.itemWidth * $scope.items.length +'px';

			$scope.select = function(index){
				$scope.action({index:index});
			};

			//swipe
			var swipe = {
				moving: false,
				startClick: 0,
				startPosition: $scope.carousel.left
			};
			carouselContent.addEventListener('mousedown', function(event){
				swipe.moving = true;
				swipe.startClick = event.screenX;
				swipe.startPosition = $scope.carousel.left;
				carouselContent.classList.remove('static');
			});
			document.addEventListener('mouseup', function(event){
				swipe.moving = false;
				carouselContent.classList.add('static');
				//rounded position
				var offset = Math.round($scope.carousel.left/$scope.config.itemWidth);
				if(offset > 0){
					$scope.carousel.from = 0;
				}else{
					$scope.carousel.from = Math.abs(offset);
				}
				$scope.carousel.move();
			});
			document.addEventListener('mousemove', function(event){
				if(swipe.moving){
					$scope.carousel.left = swipe.startPosition + event.screenX - swipe.startClick;
					carouselContent.style.left = $scope.carousel.left +'px';
				}
				
			});

		}]
	}
})

;
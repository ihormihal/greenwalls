var composition_1 = '{"bak": 0, "grid":{"size":{"x":30,"y":15}},"area":{"size":{"x":6,"y":5},"offset":{"x":12,"y":10}},"cells":[{"x":12,"y":10,"plant":2},{"x":13,"y":10,"plant":2},{"x":14,"y":10,"plant":2},{"x":15,"y":10,"plant":2},{"x":16,"y":10,"plant":2},{"x":17,"y":10,"plant":2},{"x":12,"y":11,"plant":6},{"x":13,"y":11,"plant":6},{"x":14,"y":11,"plant":6},{"x":15,"y":11,"plant":6},{"x":16,"y":11,"plant":6},{"x":17,"y":11,"plant":6},{"x":12,"y":12,"plant":2},{"x":13,"y":12,"plant":2},{"x":14,"y":12,"plant":2},{"x":15,"y":12,"plant":2},{"x":16,"y":12,"plant":2},{"x":17,"y":12,"plant":2},{"x":12,"y":13,"plant":9},{"x":13,"y":13,"plant":9},{"x":14,"y":13,"plant":9},{"x":15,"y":13,"plant":9},{"x":16,"y":13,"plant":9},{"x":17,"y":13,"plant":9},{"x":12,"y":14,"plant":2},{"x":13,"y":14,"plant":2},{"x":14,"y":14,"plant":2},{"x":15,"y":14,"plant":2},{"x":16,"y":14,"plant":2},{"x":17,"y":14,"plant":2}]}';
var composition_2 = '{"bak": 1, "grid":{"size":{"x":30,"y":15}},"area":{"size":{"x":8,"y":6},"offset":{"x":11,"y":9}},"cells":[{"x":11,"y":9,"plant":13},{"x":12,"y":9,"plant":13},{"x":13,"y":9,"plant":13},{"x":14,"y":9,"plant":13},{"x":15,"y":9,"plant":13},{"x":16,"y":9,"plant":13},{"x":17,"y":9,"plant":13},{"x":18,"y":9,"plant":13},{"x":11,"y":10,"plant":9},{"x":12,"y":10,"plant":9},{"x":13,"y":10,"plant":9},{"x":14,"y":10,"plant":9},{"x":15,"y":10,"plant":9},{"x":16,"y":10,"plant":9},{"x":17,"y":10,"plant":9},{"x":18,"y":10,"plant":9},{"x":11,"y":11,"plant":11},{"x":12,"y":11,"plant":11},{"x":13,"y":11,"plant":12},{"x":14,"y":11,"plant":12},{"x":15,"y":11,"plant":12},{"x":16,"y":11,"plant":12},{"x":17,"y":11,"plant":11},{"x":18,"y":11,"plant":11},{"x":11,"y":12,"plant":11},{"x":12,"y":12,"plant":11},{"x":13,"y":12,"plant":12},{"x":14,"y":12,"plant":12},{"x":15,"y":12,"plant":12},{"x":16,"y":12,"plant":12},{"x":17,"y":12,"plant":11},{"x":18,"y":12,"plant":11},{"x":11,"y":13,"plant":11},{"x":12,"y":13,"plant":11},{"x":13,"y":13,"plant":12},{"x":14,"y":13,"plant":12},{"x":15,"y":13,"plant":12},{"x":16,"y":13,"plant":12},{"x":17,"y":13,"plant":11},{"x":18,"y":13,"plant":11},{"x":11,"y":14,"plant":11},{"x":12,"y":14,"plant":11},{"x":13,"y":14,"plant":11},{"x":14,"y":14,"plant":11},{"x":15,"y":14,"plant":11},{"x":16,"y":14,"plant":11},{"x":17,"y":14,"plant":11},{"x":18,"y":14,"plant":11}]}';

var price = 12500/30;

angular.module('app', [])

.config([function () {

}])

.run([function (){

}])

.controller('mainController', ['$scope', function($scope){

	$scope.config = {
		box: {
			realSize: {
				width: 166,
				height: 200
			},
			size: {
				width: 29,
				height: 35
			}
		},
		area: {
			minWidth: 6,
			minHeight: 5,
			maxWidth: 30,
			maxHeight: 15,
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

	$scope.rooms = [
		{
			id: 0,
			title: 'White Room',
			icon: 'design/images/rooms/white-room-icon.png',
			image: 'design/images/rooms/white-room_lux.jpg'
		},
		{
			id: 1,
			title: 'Green Room',
			icon: 'design/images/rooms/green-room-icon.png',
			image: 'design/images/rooms/green-room_lux.jpg'
		},
		{
			id: 2,
			title: 'Blue Room',
			icon: 'design/images/rooms/blue-room-icon.png',
			image: 'design/images/rooms/blue-room_lux.jpg'
		}
	];

	$scope.baks = [
		{
			id: 0,
			title: 'Stone',
			img: 'design/images/baks/bak-stone.png',
			image: 'design/images/baks/bak-stone-icon.png',
			price: price
		},
		{
			id: 1,
			title: 'Light stone',
			img: 'design/images/baks/bak-stone-light.png',
			image: 'design/images/baks/bak-stone-light-icon.png',
			price: price
		},
		{
			id: 2,
			title: 'Wood',
			img: 'design/images/baks/bak-wood.png',
			image: 'design/images/baks/bak-wood-icon.png',
			price: price
		},
		{
			id: 3,
			title: 'Light wood',
			img: 'design/images/baks/bak-wood-light.png',
			image: 'design/images/baks/bak-wood-light-icon.png',
			price: price
		},
		{
			id: 4,
			title: 'Plastik',
			img: 'design/images/baks/bak-plastik.png',
			image: 'design/images/baks/bak-plastik-icon.png',
			price: price
		},
		{
			id: 5,
			title: 'Light plastik',
			img: 'design/images/baks/bak-plastik-light.png',
			image: 'design/images/baks/bak-plastik-light-icon.png',
			price: price
		}
	];

	$scope.plants = [
		{
			id: 0,
			title: 'Spathiphyllum',
			price: price,
			image: 'design/images/plants/00.png',
			over: true
		},
		{
			id: 1,
			title: 'Syngonium',
			price: price,
			image: 'design/images/plants/01.png',
			over: true
		},
		{
			id: 2,
			title: 'Dieffenbachia',
			price: price,
			image: 'design/images/plants/02.png',
			over: true
		},
		{
			id: 3,
			title: 'Nephrolepis',
			price: price,
			image: 'design/images/plants/03.png',
			over: true
		},
		{
			id: 4,
			title: 'Philodendron Scandens',
			price: price,
			image: 'design/images/plants/04.png',
			over: true
		},
		{
			id: 5,
			title: 'Asplenium',
			price: price,
			image: 'design/images/plants/05.png',
			over: true
		},
		{
			id: 6,
			title: 'Ficus',
			price: price,
			image: 'design/images/plants/06.png',
			over: true
		},
		{
			id: 7,
			title: 'Maranta',
			price: price,
			image: 'design/images/plants/07.png',
			over: true
		},
		{
			id: 8,
			title: 'Alocasia',
			price: price,
			image: 'design/images/plants/08.png',
			over: true
		},
		{
			id: 9,
			title: 'Maranta',
			price: price,
			image: 'design/images/plants/09.png',
			over: true
		},
		{
			id: 10,
			title: 'Ficus',
			price: price,
			image: 'design/images/plants/10.png',
			over: true
		},
		{
			id: 11,
			title: 'Chlorophytum',
			price: price,
			image: 'design/images/plants/11.png',
			over: true
		},
		{
			id: 12,
			title: 'Scindapsus',
			price: price,
			image: 'design/images/plants/12.png',
			over: true
		},
		{
			id: 13,
			title: 'Anturium',
			price: price,
			image: 'design/images/plants/13.png',
			over: true
		},
		{
			id: 14,
			title: 'Aglaonema',
			price: price,
			image: 'design/images/plants/14.png',
			over: true
		}
	];

	$scope.room = $scope.rooms[0];
	$scope.bak = {image: ''};

	$scope.plantsShowed = false;
	$scope.baksShowed = false;

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

	$scope.placeBack = function(index){
		$scope.bak = $scope.baks[index];
	};

	$scope.removeBack = function(index){
		$scope.bak = null;
	};

	$scope.selectRoom = function(index){
		$scope.room = $scope.rooms[index];
		movingAreaParams = movingAreaParamsDefaults;
		$('#canvas').removeClass('custom-bg');
		$('#custom-room').val('');
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
		for (var i = 0; i < $scope.plants.length; i++) {
			$scope.plants[i].count = 0;
		}
		var price = 0;
		for (var y = 0; y < $scope.grid.size.y; y++) {
			for (var x = 0; x < $scope.grid.size.x; x++) {
				if($scope.grid.rows[y][x].area){
					//price += 100;
					if($scope.grid.rows[y][x].plant){
						price += $scope.grid.rows[y][x].plant.price;
						$scope.grid.rows[y][x].plant.count++;
					}
				}
			}
		}
		$scope.price = Math.round(price);
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
			bak: $scope.bak.id,
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
		//set bak
		for (var i = 0; i < $scope.baks.length; i++) {
			if($scope.baks[i].id == data.bak){
				$scope.bak = $scope.baks[i];
			}
		}
		$scope.calcPrice();
		//$scope.$apply();
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
		window.resizeBak();
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
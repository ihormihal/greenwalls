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
				width: 40,
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

	$scope.bak = {
		width: 0,
		left: 0
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
		if(event.keyCode == 100 || event.keyCode == 46 || event.keyCode == 8) //"D" or "Delete" or "BackSpase"
		{
			$scope.deleteSelected();
		}
	};

	$scope.drawGrid();

	$scope.$watch('area', function(){
		$scope.bak.width = $scope.area.size.x * $scope.config.box.size.width + $scope.area.size.x;
		$scope.bak.left = $scope.area.offset.x * $scope.config.box.size.width + $scope.area.offset.x;
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
				prev: function(){
					$scope.carousel.from--;
					$scope.carousel.move();
				},
				next: function(){
					$scope.carousel.from++;
					$scope.carousel.move();
				},
				move: function(){
					console.log($scope.carousel.from);
					if($scope.carousel.from < 0){
						$scope.carousel.from = 0;
					}
					if($scope.carousel.from + $scope.config.items > $scope.items.length){
						$scope.carousel.from = $scope.items.length - $scope.config.items;
					}
					$scope.carousel.left = - ($scope.carousel.from * $scope.config.itemWidth);
					carouselContent.style.left = $scope.carousel.left +'px';
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
			carouselContent.addEventListener('mouseup', function(event){
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
			carouselContent.addEventListener('mousemove', function(event){
				if(swipe.moving){
					$scope.carousel.left = swipe.startPosition + event.screenX - swipe.startClick;
					carouselContent.style.left = $scope.carousel.left +'px';
				}
				
			});

		}]
	}
})

;
<!DOCTYPE html>
<html lang="en">
		<head>
		<?php include 'components/head.php'; ?>
		</head>
		<body ng-app="app">
				<header>
					<?php include 'components/info.php'; ?>
				</header>
				<main ng-controller="mainController">
					<section class="pt3">
						<div class="container text-center">
							<h2 class="green mb1"><span class="black bold">Ваша</span> Зеленая Стена</h2>
							<p class="h4">Удобный конструктор для Вашего индивидуального проекта GreenWalls.</p>
						</div>
					</section>

					<section id="canvas" class="canvas mt2 mb2">
						<div id="picture" class="picture">
							<img ng-src="{{room.image}}" alt="" class="bg">
							<div class="grid">
								<!-- <div class="table">
									<div class="row" ng-repeat="(y, row) in grid.rows">
										<div ng-click="selectRow(y)" class="cell plus">+</div>
										<div 
										class="cell"
										ng-repeat="(x, cell) in row"
										ng-class="{'area': cell.area, 'selected': cell.selected, 'plant': cell.plant}"
										ng-click="selectCell(x, y)"
										>
											<img ng-show="cell.plant" ng-src="{{cell.plant.image}}" alt="">
										</div>
										<div ng-click="selectRow(y)" class="cell plus">+</div>
									</div>
								</div> -->
								<table>
									<tr ng-repeat="(y, row) in grid.rows">
										<td ng-click="selectRow(y)" class="plus">+</td>
										<td class="td"
										ng-repeat="(x, cell) in row"
										ng-class="{'area': cell.area, 'selected': cell.selected, 'plant': cell.plant}"
										ng-click="selectCell(x, y)">
											<div class="cell cell-x-{{x}} cell-y-{{y}}" title="{{x}}:{{y}}">
												<img ng-show="cell.plant" ng-src="{{cell.plant.image}}" alt="">
											</div>
										</td>
										<td ng-click="selectRow(y)" class="plus">+</td>
									</tr>
								</table>
								<div id="bottom-bak" class="bottom-bak offset-{{area.offset.x}} width-{{area.size.x}}">
									<div ng-show="bak.img" class="back-image" style="background-image: url({{bak.img}});"></div>
								</div>
							</div>
						</div>
						<div class="container controls">
							<div class="control-top">
								<a id="capture" href="#" class="btn-fl c-red-bg hover-bg-darken"><i class="fa fa-camera"></i></a>
								<a id="hide-grid" href="#" class="btn-fl c-red-bg hover-bg-darken"><i class="fa fa-eye-slash"></i></a>
								<!-- <a ng-click="saveComposition();" class="btn-fl c-red-bg hover-bg-darken"><i class="fa fa-floppy-o"></i></a> -->
								<a ng-click="clearArea();" class="btn-fl c-red-bg hover-bg-darken"><i class="fa fa-eraser"></i></a>
							</div>
							<div class="control control-left">
								<div class="inner">
									<div class="title">Выбор композиции</div>
									<div class="presets">
										<div
										class="item"
										ng-repeat="composition in compositions"
										ng-click="selectComposition($index)"
										>
											<img ng-src="{{composition.image}}" alt="">
											<div class="item-title">{{composition.title}}</div>
										</div>
										<div class="divider"></div>
										<div class="item">
											<div class="img" ng-click="plantsShowed = !plantsShowed">
												<img src="design/images/plants.jpg" alt="">
												<div class="icon"><i class="fa" ng-class="{'fa-angle-right': !plantsShowed, 'fa-angle-left': plantsShowed}"></i></div>
											</div>
											<div class="item-title">Растения</div>
										</div>
									</div>
								</div>
							</div>
							<div class="control control-right">
								<div class="inner">
									<div class="title">Выбор интерьера</div>
									<div class="presets">
										<div
										class="item"
										ng-repeat="room in rooms"
										ng-click="selectRoom($index)"
										>
											<img ng-src="{{room.icon}}" alt="">
											<div class="item-title">{{room.title}}</div>
										</div>
										<div class="divider"></div>
										<div class="item">
											<div class="img" ng-click="baksShowed = !baksShowed">
												<img src="design/images/bak.jpg" alt="">
												<div class="icon"><i class="fa" ng-class="{'fa-angle-left': !baksShowed, 'fa-angle-right': baksShowed}"></i></div>
											</div>
											<div class="item-title">Разиестить бак</div>
										</div>
									</div>
								</div>
							</div>

							<div class="bottom-control slide-right" ng-class="{'active': plantsShowed}">
								<div class="control-horizontal">
									<carousel items="plants" action="placePlant(index)">
									</carousel>
								</div>
							</div>

							<div class="bottom-control slide-left" ng-class="{'active': baksShowed}">
								<div class="control-horizontal">
									<carousel items="baks" action="placeBack(index)">
									</carousel>
								</div>
							</div>


						</div>
					</section>



					<section class="size-control pt2 pb2">
						<div class="container">
							<div class="row">
								<div class="col-md-10 col-md-offset-1">
									<div class="box shadow-2">
										<div class="row">
											<div class="col-md-3">
												<div class="green up bold">размер зеленой стены</div>
											</div>
											<div class="col-md-3">
												<div class="left bold up">высота</div>
												<div class="number">
													<div class="value">{{area.size.y * config.box.realSize.height}}</div>
													<div class="controls">
														<div class="plus" ng-click="plusAreaHeight()"></div>
														<div class="minus" ng-click="minusAreaHeight()"></div>
													</div>
												</div>
												<div class="up">см</div>
											</div>
											<div class="col-md-3">
												<div class="left bold up">ширина</div>
												<div class="number">
													<div class="value">{{area.size.x * config.box.realSize.width}}</div>
													<div class="controls">
														<div class="plus" ng-click="plusAreaWidth()"></div>
														<div class="minus" ng-click="minusAreaWidth()"></div>
													</div>
												</div>
												<div class="up">см</div>
											</div>
											<div class="col-md-3 border-left">
												<div class="left green up bold">цена</div>
												<div class="price right">{{price}} грн</div>
											</div>
										</div>
									</div>
								</div>
							</div>

						</div>
					</section>
					<section class="form pt3 pb3">
						<div class="container text-center">
							<div class="row">
								<div class="col-md-6 col-md-offset-3">
									<div class="text-center">
										<h2 class="green mb1">Закажи <span class="black bold">Себе</span></h2>
										<p class="h4">Вертикальное озеленение - это неизменный атрибут офисов ведущих мировых компаний и жилищ успешных людей всего мира</p>
									</div>
									<form action="#" class="mt2">
										<div class="form-group">
											<div class="input-icon default">
												<input type="text" class="full default" placeholder="Ваше имя">
												<i class="fa fa-user"></i>
											</div>
										</div>
										<div class="form-group">
											<div class="input-icon default">
												<input type="text" class="full default" placeholder="Ваш номер">
												<i class="fa fa-phone"></i>
											</div>
										</div>
										<div class="form-group">
											<div class="input-icon default">
												<input type="text" class="full default" placeholder="Ваш e-mail">
												<i class="fa fa-envelope-o"></i>
											</div>
										</div>
										<div class="text-center">
											<button class="btn btn-red">
												Получить консультацию
											</button>
											<div class="small light mt1">Обработка Ваших персональных данных <br><i class="fa fa-lock"></i> строго конфиденциальна.</div>
										</div>
									</form>
								</div>
							</div>

						</div>
					</section>
				</main>
				<footer>
					<?php include 'components/info.php'; ?>
				</footer>
		</body>
</html>
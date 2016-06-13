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
					<section class="pt3 pb3">
						<div class="container text-center">
							<h2 class="green"><span class="black bold">Ваша</span> Зеленая Стена</h2>
							<p class="h4">Удобный конструктор для Вашего индивидуального проекта GreenWalls.</p>
						</div>
					</section>
					
					<section class="canvas mt2 mb2">
						<div class="picture">
							<img class="background" src="design/images/room-1.jpg" alt="">
							<div class="grid">
								<table>
									<tr ng-repeat="row in grid.rows">
										<td class="plus" ng-click="selectRow($index)">+</td>
										<td ng-repeat="cell in row" ng-class="{'box': cell.box, 'selected': cell.selected}" ng-click="selectCell(cell.x, cell.y)">
											<div class="cell" title="{{cell.x}}:{{cell.y}}">
												<img ng-show="cell.plant" ng-src="{{cell.plant.image}}" alt="">
											</div>
										</td>
										<td class="plus" ng-click="selectRow($index)">+</td>
									</tr>
								</table>
								<div class="bottom-bak" style="width: {{width}}px; left: {{(rackIndex.x1 + 1) * 40}}px"></div>
							</div>
						</div>
						<div class="container controls">
							<div class="control control-left">
								<div class="inner">
									<div class="title">Выбор композиции</div>
									<div class="presets">
										<div class="item">
											<img src="http://placehold.it/100x100" alt="">
											<div class="item-title">Композиция 10x30</div>
										</div>
										<div class="item">
											<img src="http://placehold.it/100x100" alt="">
											<div class="item-title">Композиция 10x30</div>
										</div>
										<div class="item">
											<img src="http://placehold.it/100x100" alt="">
											<div class="item-title">Композиция 10x30</div>
										</div>
										<div class="item" ng-click="showPlants()">
											<img src="http://placehold.it/100x100" alt="">
											<div class="item-title">More</div>
										</div>
									</div>
								</div>
							</div>
							<div class="control control-right">
								<div class="inner">
									<div class="title">Выбор интерьера</div>
									<div class="presets">
										<div class="item">
											<img src="http://placehold.it/100x100" alt="">
											<div class="item-title">Modern room</div>
										</div>
										<div class="item">
											<img src="http://placehold.it/100x100" alt="">
											<div class="item-title">Classic room</div>
										</div>
										<div class="item">
											<img src="http://placehold.it/100x100" alt="">
											<div class="item-title">Electric room</div>
										</div>
										<div class="item">
											<img src="http://placehold.it/100x100" alt="">
											<div class="item-title">Ваш интерьер</div>
										</div>
									</div>
								</div>
							</div>

							<div class="control-horizontal">
								<div class="inner">
									<div class="presets plants">
										<div class="item" ng-repeat="plant in plants" ng-click="placePlant($index)">
											<img ng-src="{{plant.image}}" alt="">
											<div class="item-title">{{plant.title}}</div>
										</div>
									</div>
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
													<div class="value">{{rackSize.height * boxSize.height}}</div>
													<div class="controls">
														<div class="plus" ng-click="plusRackHeight()"></div>
														<div class="minus" ng-click="minusRackHeight()"></div>
													</div>
												</div>
												<div class="up">см</div>
											</div>
											<div class="col-md-3">
												<div class="left bold up">ширина</div>
												<div class="number">
													<div class="value">{{rackSize.width * boxSize.width}}</div>
													<div class="controls">
														<div class="plus" ng-click="plusRackWidth()"></div>
														<div class="minus" ng-click="minusRackWidth()"></div>
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
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
							<img src="design/images/rooms/room-1.jpg" alt="" class="bg">
							<div class="grid">
								<table>
									<tr ng-repeat="(y, row) in grid.rows">
										<td ng-click="selectRow(y)"><div class="plus">+</div></td>
										<td 
										ng-repeat="(x, cell) in row" 
										ng-class="{'area': cell.area, 'selected': cell.selected, 'plant': cell.plant}" 
										ng-click="selectCell(x, y)">
											<div class="cell cell-x-{{x}} cell-y-{{y}}" title="{{x}}:{{y}}">
												<img ng-show="cell.plant" ng-src="{{cell.plant.image}}" alt="">
											</div>
										</td>
										<td ng-click="selectRow(y)"><div class="plus">+</div></td>
									</tr>
								</table>
								<div class="bottom-bak offset-{{area.offset.x}} width-{{area.size.x}}"></div>
							</div>
						</div>
						<div class="container controls">
							<div class="control-top">
								<a href="#" class="btn" id="capture">Capture</a>
								<a href="#" class="btn" id="hide-grid">Hide grid</a>
								<div class="btn" ng-click="saveComposition();">Save</div>
								<div class="btn" ng-click="clearArea();">Clear</div>
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

							<div class="bottom">
								<div class="control-horizontal">
									<carousel items="plants" action="placePlant(index)">
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
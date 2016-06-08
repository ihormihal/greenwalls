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
							<img class="background" src="http://placehold.it/1920x1000" alt="">
							<div class="grid">
								<table>
									<tr ng-repeat="row in grid.rows">
										<td ng-repeat="cell in row" ng-class="{'box': cell.box}" ng-click="placePlant(cell.x, cell.y)">
											{{cell.x}},{{cell.y}}
											<img ng-show="cell.plant" ng-src="{{cell.plant}}" alt="">
										</td>
									</tr>
								</table>
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
										<div class="item">
											<img src="http://placehold.it/100x100" alt="">
											<div class="item-title">Композиция 10x30</div>
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
						</div>
					</section>


					<section class="size-control pt2 pb2">
						<div class="container">
							<div class="box shadow-2">
								<div class="row">
									<div class="col-md-4">
										<div class="green up">размер зеленой стены</div>
									</div>
									<div class="col-md-2">
										<div class="left bold up">высота</div>
										<div class="number">
											<div class="value">180</div>
											<div class="controls">
												<div class="plus"></div>
												<div class="minus"></div>
											</div>
										</div>
										<div class="up">см</div>
									</div>
									<div class="col-md-2">
										<div class="left bold up">ширина</div>
										<div class="number">
											<div class="value">180</div>
											<div class="controls">
												<div class="plus"></div>
												<div class="minus"></div>
											</div>
										</div>
										<div class="up">см</div>
									</div>
									<div class="col-md-4">
										<div class="left green up">цена</div>
										<div class="price right">12 600 грн</div>
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
										<h2 class="green">Закажи <span class="black bold">Себе</span></h2>
										<p class="h4">Вертикальное озеленение - это неизменный атрибут офисов ведущих мировых компаний и жилищ успешных людей всего мира</p>
									</div>
									<form action="#" class="mt2">
										<div class="form-group">
											<input type="text" class="full" placeholder="Ваше имя">
										</div>
										<div class="form-group">
											<input type="text" class="full" placeholder="Ваш номер">
										</div>
										<div class="form-group">
											<input type="text" class="full" placeholder="Ваш e-mail">
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
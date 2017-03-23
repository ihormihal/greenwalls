var cssTransitionEnd = 'transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd';

var movingAreaParamsDefaults = {
	moving: false,
	clickPosition: {
		x: 0,
		y: 0
	},
	startPosition: {
		x: 0,
		y: 0
	},
	position: {
		x: 0,
		y: 0
	},
	zoom: 1
};
var movingAreaParams = movingAreaParamsDefaults;

window.resizeBak = function(){
	// var first = $('#picture table tr td.area').first();
	// var last = $('#picture table tr td.area').last();
	// console.log(last);
	// var bak = document.getElementById('bottom-bak');
	// bak.style.width = (last[0].offsetLeft + last[0].offsetWidth) + 'px';
	// bak.style.left = first[0].offsetLeft;
};

$(function() {

	//getArea();

	var download = document.createElement("a");
	document.body.appendChild(download);
	download.style = "display: none";

	$('#hide-grid').click(function(event){
		event.preventDefault();
		var icon = $(this).find('i');
		if($('#canvas').hasClass('plain')){
			$('#canvas').removeClass('plain');
			$('.control-left, .control-right').removeClass('invisible');
			icon.removeClass('fa-eye').addClass('fa-eye-slash');
		}else{
			$('#canvas').addClass('plain');
			$('.control-left, .control-right').addClass('invisible');
			icon.removeClass('fa-eye-slash').addClass('fa-eye');
		}
	});


	// $('#capture').click(function(event){
	// 	event.preventDefault();
	// 	var gridHidden = $('#canvas').hasClass('plain');
	// 	var pictureEl = $('#picture')[0];
	// 	//console.log(pictureEl);

	// 	$('#canvas').addClass('plain');
	// 	html2canvas(pictureEl, {
	// 		onrendered: function(canvas) {
	// 			if(!gridHidden){
	// 				$('#canvas').removeClass('plain');
	// 			}
	// 			var dataURL = canvas.toDataURL();
	// 			var blobBin = atob(dataURL.split(',')[1]);
	// 			var array = [];
	// 			for (var i = 0; i < blobBin.length; i++) {
	// 				array.push(blobBin.charCodeAt(i));
	// 			}
	// 			var file = new Blob([new Uint8Array(array)], { type: 'image/png' });
	// 			url = window.URL.createObjectURL(file);

	// 			download.href = url;
	// 			download.download = 'image.png';
	// 			download.click();
	// 			window.URL.revokeObjectURL(url);

	// 		}
	// 	});

	// });



	$('#capture').click(function(event){
		event.preventDefault();
		var gridHidden = $('#canvas').hasClass('plain');
		var pictureEl = document.getElementById('picture');

		$('#canvas').addClass('plain');
		//console.log(pictureEl);

		var offset = $('#picture').offset().top;
		var w = pictureEl.clientWidth;
		var h = pictureEl.clientHeight;

		var scale = 4;
		var canvas = document.createElement('canvas');
		canvas.width = scale*w;
		canvas.height = scale*(h + offset);

		canvas.style.width = w + 'px';
		canvas.style.height = h + 'px';
		canvas.getContext('2d').scale(scale,scale);

		html2canvas(pictureEl, { 
			canvas: canvas,
			onrendered: function(canv) {
				if(!gridHidden){
					$('#canvas').removeClass('plain');
				}

				var newCanvas = document.createElement('canvas');
				newCanvas.height = scale*h;
				newCanvas.width = scale*w;
				newCanvas.getContext("2d").drawImage(canv, 0, -offset*scale);

				var dataURL = newCanvas.toDataURL();


				// var image = document.createElement('img');
				// image.src = dataURL;
				// document.body.appendChild(image);

				var blobBin = atob(dataURL.split(',')[1]);
				var array = [];
				for (var i = 0; i < blobBin.length; i++) {
					array.push(blobBin.charCodeAt(i));
				}
				var file = new Blob([new Uint8Array(array)], { type: 'image/png' });
				var url = window.URL.createObjectURL(file);

				download.href = url;
				download.download = 'image.png';
				download.click();
				window.URL.revokeObjectURL(url);


			}
		});

		


	});


	var movingArea = $('#picture .bg.custom')[0];
	var movingImage = $('#picture .bg.custom');
	
	$('#custom-room').on('change', function(){
		movingAreaParams = movingAreaParamsDefaults;
		if (this.files && this.files[0]) {
			var reader = new FileReader();
			reader.onload = function(e) {
				movingImage.attr('src', e.target.result);
				movingAreaParams.custom = true;
				$('#canvas').addClass('custom-bg');
			}
			reader.readAsDataURL(this.files[0]);
		} else {
			//alert("Sorry - you're browser doesn't support the FileReader API");
		}
	});

	movingArea.addEventListener('mousedown', function(event) {
		movingAreaParams.moving = true;
		movingAreaParams.clickPosition = {
			x: event.screenX,
			y: event.screenY
		};
		var transform = movingImage.css('transform').split(',');
		if(transform.length == 6){
			movingAreaParams.startPosition = {x: parseInt(transform[4]), y: parseInt(transform[5])};
		}
	});
	document.addEventListener('mouseup', function(event) {
		movingAreaParams.moving = false;
	});
	document.addEventListener('mousemove', function(event) {
		if (movingAreaParams.moving && movingAreaParams.custom) {
			movingAreaParams.position = {
				x: movingAreaParams.startPosition.x + event.screenX - movingAreaParams.clickPosition.x,
				y: movingAreaParams.startPosition.y + event.screenY - movingAreaParams.clickPosition.y
			};
			
			movingImage.css('transform','translate('+movingAreaParams.position.x+'px, '+movingAreaParams.position.y+'px) scale('+movingAreaParams.zoom+')');
		}

	});

	$('#zoom').on('input change', function(){
		movingAreaParams.zoom = parseInt($(this).val())/100;
		movingImage.css('transform','translate('+movingAreaParams.position.x+'px, '+movingAreaParams.position.y+'px) scale('+movingAreaParams.zoom+')');
	});



});



$(window).resize(function(){
	resizeBak();
});
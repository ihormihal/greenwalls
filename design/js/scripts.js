var cssTransitionEnd = 'transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd';

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

	$('#capture').click(function(event){
		event.preventDefault();
		var gridHidden = $('#canvas').hasClass('plain');
		var pictureEl = $('#picture')[0];
		//console.log(pictureEl);

		$('#canvas').addClass('plain');
		html2canvas(pictureEl, {
			onrendered: function(canvas) {
				if(!gridHidden){
					$('#canvas').removeClass('plain');
				}
				var dataURL = canvas.toDataURL();
				var blobBin = atob(dataURL.split(',')[1]);
				var array = [];
				for (var i = 0; i < blobBin.length; i++) {
					array.push(blobBin.charCodeAt(i));
				}
				var file = new Blob([new Uint8Array(array)], { type: 'image/png' });
				url = window.URL.createObjectURL(file);

				download.href = url;
				download.download = 'image.png';
				download.click();
				window.URL.revokeObjectURL(url);

			}
		});

	});

});



$(window).resize(function(){
	resizeBak();
});
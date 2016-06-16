var cssTransitionEnd = 'transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd';

$(function() {

	var download = document.createElement("a");
	document.body.appendChild(download);
	download.style = "display: none";

	$('#hide-grid').click(function(event){
		event.preventDefault();
		if($('#canvas').hasClass('plain')){
			$('#canvas').removeClass('plain');
			//$('.control').removeClass('hidden');
		}else{
			$('#canvas').addClass('plain');
			//$('.control').addClass('hidden');
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
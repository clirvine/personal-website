$(function(){
	var balloon = $(".balloon");
	var counter = 0;
	var colors = ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b", "#e377c2", "#7f7f7f", "#bcbd22", "#17becf"]
	function start(){
		for(var i=0; i<20; i++){
			var balloonColor
			var balloonCopy = balloon.clone();
			balloonCopy.css({
				left: i * 100
			});
			balloonCopy.appendTo("body");

			var inflatable = balloonCopy.find(".inflatable");

			var randomPosition = Math.floor(Math.random() * colors.length);
			balloonColor = colors[randomPosition];
			
			inflatable.css({
				"background-color": balloonColor
			});

			balloonCopy.click(function(){
				pop_sound.play();
				$(this).remove();
				counter = counter + 1;
				$(".counter").html(counter);
			});
			balloonCopy.animate({bottom: "100%", left: Math.random() * 100 + "%" }, 16000 - Math.random() * 4000);
    };

		window.setTimeout(function() {
			$(".scoreboard").addClass("ready");
			$(".replay").bind("click", function(e) {
				e.preventDefault();
				window.location.reload();
			});
		}, 12000);

		balloon.remove();
	}

	function preloadPopSound(){
		var audio = new Audio("balloon-pop.mp3");
		audio.preload = "auto";
		$(audio).on("loadeddata", start);
		return audio;
	}

	var pop_sound = preloadPopSound();
});


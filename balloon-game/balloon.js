var balloon = $(".balloon");
	for(var i=0; i<10; i++){
	  var balloonCopy = balloon.clone();
	  balloonCopy.css({
	  	left: i * 200
	  })
	  balloonCopy.appendTo("body");
	  balloonCopy.click(function(){
	  	$(this).remove();
	  	counter = counter + 1;
	  	$(".counter").html(counter);
	  });
	  balloonCopy.animate({bottom: "100%"}, 15000);
	};
	balloon.remove();

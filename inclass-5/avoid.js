window.onload = function() {

	var congrats = document.getElementById("congratulations");
	var button = document.getElementById("clickMe");
	button.onclick = function () {
		var w = window.innerWidth;
		var h = window.innerHeight;

		if (button.innerHTML == "Click me!") {
			congrats.style.display = "block";
			button.innerHTML = "Play Again";
		} else {
			congrats.style.display = "none";
			button.innerHTML = "Click me!";
			var newW = Math.floor(Math.random() * w * 0.9);
			var newH = Math.floor(Math.random() * h * 0.9);

			button.style.top = newH + "px";
			button.style.left = newW + "px";


		}
	}
	button.onmouseover = function() {
		var w = window.innerWidth;
		var h = window.innerHeight;

		if (event.shiftKey || button.innerHTML == "Play Again") {
			// Do Nothing
		} else {
			var newW = Math.floor(Math.random() * w * 0.9);
			var newH = Math.floor(Math.random() * h * 0.9);

			button.style.top = newH + "px";
			button.style.left = newW + "px";
		}
	}

}

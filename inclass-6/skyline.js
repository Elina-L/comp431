'use strict'
var buildList = [];
var buildIndividual;


var createApp = function(canvas) { 
	var c = canvas.getContext("2d");

	// Create the ground
	var floor = canvas.height/2
	var grad = c.createLinearGradient(0,floor,0,canvas.height)
	grad.addColorStop(0, "green")
	grad.addColorStop(1, "black")
	c.fillStyle=grad
	c.fillRect(0, floor, canvas.width, canvas.height)

	// common size for windows
	var windowSpacing = 2, floorSpacing = 3
	var windowHeight = 5, windowWidth = 3

	// colors of buildings
	var blgColors = [ 'red', 'blue', 'gray', 'orange'] 

	//build a building
	var build = function() { 
		var x0 = Math.random()*canvas.width
		var blgWidth = (windowWidth+windowSpacing) * Math.floor(Math.random()*10)
		var blgHeight = Math.random()*canvas.height/2
		
		var blg = [];

		var color = blgColors[ Math.floor(Math.random()*blgColors.length)];
		c.fillStyle= color;
		blg.push(x0);
		blg.push(blgWidth);
		blg.push(blgHeight);
		blg.push(color);
		console.log(blg);
		c.fillRect(x0, floor - blgHeight, blgWidth, blgHeight)
		for (var y = floor - floorSpacing; y > floor - blgHeight; y -= floorSpacing + windowHeight) {
			for (var x = windowSpacing; x < blgWidth - windowWidth; x += windowSpacing + windowWidth) {
				var num = Math.random();
				if (num > 0.5) {
					c.fillStyle="yellow"					
					c.fillRect(x0 + x, y - windowHeight, windowWidth, windowHeight)
				} else {
					c.fillStyle = "black";
					c.fillRect(x0 + x, y - windowHeight, windowWidth, windowHeight)				
				}
			}
		}
		c.save();
		buildList.push(blg);
	}

	return {
		build: build
	}

}

window.onload = function() {
	var canvas = document.querySelector("canvas");	
	var app = createApp(canvas)
	document.getElementById("build").onclick = app.build
	var c = canvas.getContext("2d");
	document.addEventListener("click", growBuilding);


	// Create the ground
	var floor = canvas.height/2
	var grad = c.createLinearGradient(0,floor,0,canvas.height)
	grad.addColorStop(0, "green")
	grad.addColorStop(1, "black")
	c.fillStyle=grad
	c.fillRect(0, floor, canvas.width, canvas.height)

	// common size for windows
	var windowSpacing = 2, floorSpacing = 3
	var windowHeight = 5, windowWidth = 3

	// colors of buildings
	var blgColors = [ 'red', 'blue', 'gray', 'orange'] 

	function growBuilding(event) {
		var x = event.clientX;
		var y = event.clientY;
		console.log(x, y)
		Array.prototype.forEach.call(buildList, function(blg) {
			// console.log(blg[0], " - ", blg[1], " - ", blg[2], " - ", blg[3])
			var x1 = blg[0];
			var x2 = blg[1] + x1;
			// console.log("x1 ", x1, " x2 ", x2);

			if (x >= x1 && x <= x2) {
				// console.log("clicking on ", blg);

				var y1 = floor;
				var y2 = y1 - blg[2];
				console.log("y1 ", y1, " y2 ", y2);

				if (y <= y1 && y >= y2) {
					// console.log("clicking on ", blg);
					blg[2] += 10;
				}
			}
		})
	}

	var arc = 0;

	// Start moving the sun
	updateCanvas();

	// Move the sun using an interval
	function updateCanvas() {
		console.log("Sun moving");
		var interval = 50; 
		var myInterval = setInterval(
			function() {
				c.clearRect(0, 0, canvas.width, canvas.height);		
				arc = arc + 1;
				if (arc > canvas.width) {
					arc = 0;
				}
				fillCircle(arc, 
					Math.cos(arc/200) * 70 + 100, 50, "orange")

				// Draw Buildings
				Array.prototype.forEach.call(buildList, function(blg) {
					// console.log("in buildIndividual", blg);	
					buildIndividual(blg);	
				})

				// Draw Ground
				grad.addColorStop(0, "green")
				grad.addColorStop(1, "black")
				c.fillStyle=grad
				c.fillRect(0, floor, canvas.width, canvas.height)

				// Draw car
				c.fillStyle = "blue";
				c.fillRect(arc, floor-10, 40, 15);
				fillCircle(arc+10, floor+2, 5, "black");
				fillCircle(arc + 30, floor+2, 5, "black");

			}, interval
		);
	}

	function buildIndividual(blg) {
		var x0 = blg[0];
		var blgWidth = blg[1];
		var blgHeight = blg[2];
		var color = blg[3];

		c.fillStyle= color;
		// console.log("in buildIndividual", blg);
		c.fillRect(x0, floor - blgHeight, blgWidth, blgHeight)
		for (var y = floor - floorSpacing; y > floor - blgHeight; y -= floorSpacing + windowHeight) {
			for (var x = windowSpacing; x < blgWidth - windowWidth; x += windowSpacing + windowWidth) {
				var num = Math.random();
				if (num > 0.5) {
					c.fillStyle="yellow"					
					c.fillRect(x0 + x, y - windowHeight, windowWidth, windowHeight)
				} else {
					c.fillStyle = "black";
					c.fillRect(x0 + x, y - windowHeight, windowWidth, windowHeight)				
				}
			}
		}

	}

	function fillCircle(x, y, r, color) {
		c.fillStyle = color;
		c.beginPath();
		c.arc(x, y, r, 0, 2 * Math.PI, false);
		c.fill();
		c.restore();

	}

}

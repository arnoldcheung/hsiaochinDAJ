function setupPunto(){
	puntoGraphics = createGraphics(width, height);
	initial_punto_r = puntoGraphics.min(width, height) * 0.2;
	punto_r = initial_punto_r;
	drawPunto();
}

function drawPunto(){
	puntoGraphics.fill(colorList[2]);
	puntoGraphics.noStroke();	
	puntoGraphics.ellipse(puntoGraphics.width / 2, puntoGraphics.height / 2, punto_r)
}
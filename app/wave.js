function setupWaves(){
	waveGraphics = createGraphics(width, height);
}

function drawWave(){
	waveGraphics.fill(colorList[7]);
	waveGraphics.noStroke();
	waveGraphics.beginShape();
	waveGraphics.vertex(0, waveGraphics.height * 0.25);
	waveGraphics.vertex(0, 0);
	waveGraphics.vertex(width, 0);
	waveGraphics.vertex(width, 200);
	
	for(var i=waveGraphics.width; i >= 0; i-=waveGraphics.width / 50){
		let y = 200 * map(noise(frameCount * 0.005, i * waveFrequency), 0, 1, 0.4, 1.6);
		waveGraphics.curveVertex(i, y);
	}
	waveGraphics.endShape(CLOSE);
}
function setupEnergy(){
	energyGraphics = createGraphics(min(width, height), min(width, height));
	growSize = 0;
	layerSize = 20;
}

function drawEnergy(){
	energyGraphics.rectMode(CENTER);

	growSize+=1;

	energyGraphics.fill(colorList[3]);
	energyGraphics.stroke(colorList[4]);
	energyGraphics.strokeWeight(layerSize);

	for(var i = energyGraphics.width; i > - layerSize * 4; i-=layerSize * 4){
		energyGraphics.rect(energyGraphics.width / 2, energyGraphics.height / 2, i + 1 + growSize);
	} 

	if(growSize >= layerSize * 4){
			growSize = 0;
	} 

	energyGraphics.rect( energyGraphics.width / 2, energyGraphics.height / 2, layerSize * 0.5);
}
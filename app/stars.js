function setupStars(){
	starsGraphics = createGraphics(width, height);
	drawStars(3000, {minSize: 1, maxSize: 5, canvas: starsGraphics});
}

function drawStars(numEllipses, options={}){
	
	const defaults = {
    minSize: 5,
    maxSize: 20,
    canvas: null
  };
	
  const { minSize, maxSize, canvas } = { ...defaults, ...options };
	
	canvas.fill('#FFFFFF');
	
	for (let i = 0; i < numEllipses; i++) {
    let x = random(0, width);
    let y = random(0, height);
    let ellipseSize = random(minSize, maxSize);
		
		if(canvas){
			canvas.noStroke();
    	canvas.ellipse(x, y, ellipseSize, ellipseSize);
		} else {
			noStroke();
			ellipse(x, y, ellipseSize, ellipseSize);
		}	
  }
}
function setupRadiation(){
	radiationGraphics = createGraphics(max(width, height), max(width, height));
}

function drawRadiation(){
	let widthFactor = map(sin(frameCount), -1, 1, 1, 3); 

  // Calculate the length of the triangle's base and height
  let baseLength = radiationSize * Math.min(width, height) / (widthFactor); // Increased base length for even thicker triangles
  let heightLength = Math.sqrt(width * width + height * height);

  radiationGraphics.fill(colorList[6]); // Fill the triangles with color (black in this case)
  radiationGraphics.noStroke();
  
	// Draw the four narrow triangles radiating from the center with pointy part aiming at the center
  for (let i = 0; i < 4; i++) {
    radiationGraphics.push(); // Save current drawing style and transformation
    radiationGraphics.translate(radiationGraphics.width / 2, radiationGraphics.height / 2); // Move the origin to the center of the canvas
    radiationGraphics.rotate((PI / 4) + (PI / 2) * i); // Rotate by 45 degrees + i * 90 degrees
    radiationGraphics.triangle(-baseLength / 2, -heightLength, baseLength / 2, -heightLength, 0, 0);
    radiationGraphics.pop(); // Restore the original drawing style and transformation
  }
}
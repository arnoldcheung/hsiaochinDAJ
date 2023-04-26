function setupOrbit(){  
	orbitGraphics = createGraphics(width, height);

	orbitGraphics.noStroke();
	for (let i = 0; i < numCircles; i++) {
			let orbitRadius = random(min(width, height) / 16, min(width, height) / 2);
			let circleRadius = random(1, 4);
			let angle = random(360);
			let v = random(0.1, 0.4);
			let r = random(255);
			let g = random(255);
			let b = random(255);

			circleData.push({ orbitRadius, circleRadius, angle, v, r, g, b });
	}
}

function drawOrbit(){
  for (let i = 0; i < numCircles; i++) {
    let { orbitRadius, circleRadius, angle, v, r, g, b } = circleData[i];

    // Calculate circle position
    let x = width / 2 + orbitRadius * cos(angle) * orbit_speed * 2;
    let y = height / 2 + orbitRadius * sin(angle) * orbit_speed * 2;

    // Draw circle
    orbitGraphics.fill(r, g, b);
    orbitGraphics.ellipse(x, y, circleRadius * 2);

    // Update angle based on speed
    circleData[i].angle = (angle + v * orbit_speed) % 360;
  }
}
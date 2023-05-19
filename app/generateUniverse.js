// Main Generate Universe Function ----------------------------------------------------------------------------------------

function generateUniverse(){
	
	// resetUniverse();
			
	let inputNumber = numberInput.value();

	if(inputNumber == 'Create your universe with 8 Numbers ...'){
		return;
	}


	if(inputNumber.length < 8){
		let numNeeded = 8 - inputNumber.length;
		for(let i=0; i < numNeeded; i++){
			inputNumber = inputNumber + '0';
		}
	}
	
	numberInput.value(inputNumber);
	inputNumber = str(inputNumber);
	
	universeNumber = inputNumber;
		
	const numberArray = inputNumber.split('');
	
	generateSpace(numberArray);
	generateStars(numberArray);
	generatePunto(numberArray);
	generateEnergy(numberArray);
	generateRadiation(numberArray);
	generateOrbit(numberArray);
	// generateWave(numberArray);
	
	generated = true;
	
	return;
}

// Generate Space Function ----------------------------------------------------------------------------------------
function generateSpace(numberArray){
	
	let hexColor = numArrayToHex(numberArray, [2, 3, 4, 5, 0, 1]);
	hexColor = modifyRGBwithHSB(hexColor, [0, 360], [50, 100], [0, 50]);
	colorList[0] = hexColor;
}

// Generate Stars Function ----------------------------------------------------------------------------------------
function generateStars(numberArray){
	let hexColor = numArrayToHex(numberArray, [5, 4, 3, 1, 7, 6]);
	hexColor = modifyRGBwithHSB(hexColor, [0, 360], [50, 100], [0, 100]);
	colorList[1] = hexColor;
}

// Generate Punto Function ----------------------------------------------------------------------------------------
function generatePunto(numberArray){
	
	// puntoCheckbox.checked(true);
	
	// Punto layer 1 ----------------------------------------------------------------------------------------
	// punto color
	let hexColor = numArrayToHex(numberArray, [2, 7, 3, 5, 1, 4]);
	hexColor = modifyRGBwithHSB(hexColor, [0, 360], [50, 100], [0, 100]);
	colorList[2] = hexColor;
	
	// Punto Size
	let puntoSizePair = parseInt(numberArray[0] + numberArray[3], 10);
	punto_r = map(puntoSizePair, 0, 99, 50, min(width, height) * 0.6);
	
	// draw Punto
	drawPunto();
	
	// Punto layer 2 ----------------------------------------------------------------------------------------
	// punto color 2
	hexColor = numArrayToHex(numberArray, [0, 2, 5, 1, 7, 6]);
	hexColor = modifyRGBwithHSB(hexColor, [360, 0], [100, 70], [100, 0]);
	colorList[2] = hexColor;
	
	punto_r = punto_r * map(numberArray[1], 0, 9, 0.7, 0.95);
	
	// draw Punto
	drawPunto();
	
	// Punto layer 3 ----------------------------------------------------------------------------------------
	// punto color 3
	hexColor = numArrayToHex(numberArray, [7, 1, 6, 2, 3, 4]);
	hexColor = modifyRGBwithHSB(hexColor, [0, 360], [50, 100], [0, 100]);
	colorList[2] = hexColor;
	
	punto_r = punto_r * map(numberArray[3], 0, 9, 0.6, 0.9);
	// draw Punto
	drawPunto();
	
	// Punto layer 4 ----------------------------------------------------------------------------------------
	// punto color 4
	hexColor = numArrayToHex(numberArray, [3, 2, 4, 1, 0, 6]);
	hexColor = modifyRGBwithHSB(hexColor, [360, 0], [100, 50], [100, 0]);
	colorList[2] = hexColor;
	
	punto_r = punto_r * map(numberArray[5], 0, 9, 0.6, 0.9);
	
	// draw Punto
	drawPunto();
}


// Generate Energy Function ----------------------------------------------------------------------------------------
function generateEnergy(numberArray){
	
	// if(parseInt(numberArray[1] + numberArray[3], 10) < 30){
	// 	energyCheckbox.checked(false);
	// 	return;
	// }
	
	// energyCheckbox.checked(true);
	
	// energy one
	let hexColor = numArrayToHex(numberArray, [1, 0, 7, 6, 2, 3]);
	hexColor = modifyRGBwithHSB(hexColor, [0, 360], [50, 100], [50, 100]);
	colorList[3] = hexColor;
	
	// energy two
	hexColor = numArrayToHex(numberArray, [7, 3, 6, 0, 5, 1]);
	hexColor = modifyRGBwithHSB(hexColor, [360, 0], [100, 70], [100, 0]);
	colorList[4] = hexColor;
	
	// energySize
	let energySizePair = parseInt(numberArray[7] + numberArray[1], 10);
	energySizeSlider.value(map(energySizePair, 0, 99, 5, 50));
	
	// energyHeight
	let energyHeightPair = parseInt(numberArray[4] + numberArray[3], 10);
	energyHeightSlider.value(map(energyHeightPair, 0, 99, -300, 0));
}

// Generate Radiation Function ----------------------------------------------------------------------------------------
function generateRadiation(numberArray){
	
	// if(parseInt(numberArray[7] + numberArray[0], 10) < 20){
	// 	radiationCheckbox.checked(false);
	// 	return;
	// }
	
	// radiationCheckbox.checked(true);
	
	// radiation color
	let hexColor = numArrayToHex(numberArray, [3, 7, 2, 6, 1, 0]);
	hexColor = modifyRGBwithHSB(hexColor, [0, 360], [70, 100], [50, 100]);
	colorList[6] = hexColor;
	
	// radiation size
	let radiationSizePair = parseInt(numberArray[3] + numberArray[4], 10);
	radiationSizeSlider.value(map(radiationSizePair, 0, 99, 0.1, 1));
}

// Generate Orbit Function ----------------------------------------------------------------------------------------
function generateOrbit(numberArray){
	
	// if(parseInt(numberArray[6] + numberArray[2], 10) < 20){
	// 	orbitCheckbox.checked(false);
	// 	return;
	// }
	
	// orbitCheckbox.checked(true);
	
	// orbit color
	let hexColor = numArrayToHex(numberArray, [4, 1, 0, 2, 3, 5]);
	hexColor = modifyRGBwithHSB(hexColor, [360, 0], [100, 50], [100, 50]);
	colorList[5] = hexColor;
	
	// orbitSpeed
	let orbitSpeedPair = parseInt(numberArray[1] + numberArray[2], 10);
	orbit_speed_slider.value(map(orbitSpeedPair, 0, 99, -5, 5));
}

// Generate Wave Function ----------------------------------------------------------------------------------------
// function generateWave(numberArray){
	
// 	if(parseInt(numberArray[1] + numberArray[3], 10) > 20){
// 		waveCheckbox.checked(false);
// 		return;
// 	}
	
// waveCheckbox.checked(true);
	
// 	// wave color
// 	let hexColor = numArrayToHex(numberArray, [5, 0, 4, 2, 6, 7]);
// 	// hexColor = modifyRGBwithHSB(hexColor, [0, 360], [0, 100], [0, 100]);
// 	colorList[7] = hexColor;
	
// 	// wave frequency
// 	let waveFrequencyPair = parseInt(numberArray[0] + numberArray[3], 10);
// 	waveFrequencySlider.value(map(waveFrequencyPair, 0, 99, 0.00001, 0.005));
// }

// num input to hex color helper function ----------------------------------------------------------------------------------------
function numArrayToHex(numberArray, numChoice){
	
// first 6 numbers into background color	
	const rPair = parseInt(numberArray[numChoice[0]] + numberArray[numChoice[1]], 10);
	const gPair = parseInt(numberArray[numChoice[2]] + numberArray[numChoice[3]], 10);
	const bPair = parseInt(numberArray[numChoice[4]] + numberArray[numChoice[5]], 10);
	
	// Map the combined integers (0-99) to the RGB color space (0-255)
	const r = floor(map(rPair, 0, 99, 0, 255));
	const g = floor(map(gPair, 0, 99, 0, 255));
	const b = floor(map(bPair, 0, 99, 0, 255));

	// Convert the RGB values to a hex color code
	const hexColor = '#' + hex(r, 2) + hex(g, 2) + hex(b, 2);

	return hexColor;
}

// Modify rgb hex with hsb helper function ----------------------------------------------------------------------------------------
function modifyRGBwithHSB(inputRgbHex, hRange, sRange, vRange){
	// Convert the input RGB hex code to a p5.Color object
	const inputColor = color(inputRgbHex);

	// Change the color mode to HSB
	colorMode(HSB, 360, 100, 100);

	// Extract the HSB values from the input p5.Color object
	let h = hue(inputColor);
	let s = saturation(inputColor);
	let v = brightness(inputColor);
		
	// hsb remap
	h = map(h, 0, 360, hRange[0], hRange[1]);
	s = map(s, 0, 100, sRange[0], sRange[1]);
	v = map(v, 0, 100, vRange[0], vRange[1]);
	
	// Create a new p5.Color object with the modified HSB values
	const modifiedColor = color(h, s, v);

	// Change the color mode back to RGB
	colorMode(RGB, 255, 255, 255);
	
	// Extract the RGB values from the modified p5.Color object
	const r = floor(red(modifiedColor));
	const g = floor(green(modifiedColor));
	const b = floor(blue(modifiedColor));

	// Convert the RGB values to an RGB hex code
	const outputRgbHex = '#' + hex(r, 2) + hex(g, 2) + hex(b, 2);
	
	return outputRgbHex;
}
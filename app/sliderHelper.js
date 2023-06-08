function sliderSetup(){
	//slider definition
	size_slider = createSlider(10, min(width, height) * 0.8, 10, 1);
	energySizeSlider = createSlider(5, 50, 20, 1);
	// waveFrequencySlider = createSlider(0.00001, 0.005, 0.001, 0.00001);
	energyHeightSlider = createSlider(-600, 1600, 0, 1);
	orbit_speed_slider = createSlider(-5, 5, 0.5, 0.0001);
	radiationSizeSlider = createSlider(0.1, 1, 0.5, 0.01);
	
	// set slider parent and classes
	size_slider.parent(controlPanel);
	energySizeSlider.parent(controlPanel);
	// waveFrequencySlider.parent(controlPanel);
	energyHeightSlider.parent(controlPanel);
	orbit_speed_slider.parent(controlPanel);
	radiationSizeSlider.parent(controlPanel);

	size_slider.class('custom-slider');
	energySizeSlider.class('custom-slider');
	// waveFrequencySlider.class('custom-slider');
	energyHeightSlider.class('custom-slider');
	orbit_speed_slider.class('custom-slider');
	radiationSizeSlider.class('custom-slider');

	resetSliders();
	
	
	// slider events
	size_slider.mouseReleased(resetSizeSlider);
	size_slider.touchEnded(resetSizeSlider);
	
	size_slider.touchStarted(puntoSliderEvent);
	size_slider.mousePressed(puntoSliderEvent);

	// size_slider.touchStarted(puntoSliderEvent);
	// size_slider.mousePressed(puntoSliderEvent);
	
	energySizeSlider.touchStarted(energySliderEvent);
	energySizeSlider.mousePressed(energySliderEvent);
	
	energyHeightSlider.touchStarted(energySliderEvent);
	energyHeightSlider.mousePressed(energySliderEvent);
	
	orbit_speed_slider.touchStarted(orbitSliderEvent);
	orbit_speed_slider.mousePressed(orbitSliderEvent);
	
	radiationSizeSlider.touchStarted(radiationSliderEvent);
	radiationSizeSlider.mousePressed(radiationSliderEvent);
	
	// waveFrequencySlider.touchStarted(WaveSliderEvent);
	// waveFrequencySlider.mousePressed(WaveSliderEvent);

	
}

function resetSliders(){

	let longestName;
	if(currentLanguage == 'en'){
		longestName = movementCheckbox;
	} else if (currentLanguage == 'zh'){
		longestName = orbitCheckbox;
	}

	size_slider.position(longestName.x + parseFloat(longestName.style('width')) + 10, puntoCheckbox.y);
	energyHeightSlider.position(size_slider.x, energyCheckbox.y);
	energySizeSlider.position(size_slider.x, movementCheckbox.y);
	orbit_speed_slider.position(size_slider.x, orbitCheckbox.y);
	radiationSizeSlider.position(size_slider.x, radiationCheckbox.y);
	// waveFrequencySlider.position(size_slider.x, waveCheckbox.y);

	// slider style
	size_slider.style('width', controlPanel.width * 0.95 - size_slider.x + 'px');
	energySizeSlider.style('width', size_slider.style('width'));
	// waveFrequencySlider.style('width', size_slider.style('width'));
	energyHeightSlider.style('width', size_slider.style('width'));
	orbit_speed_slider.style('width', size_slider.style('width'));
	radiationSizeSlider.style('width', size_slider.style('width'));

	// reset slider values

	size_slider.value(10);
	energySizeSlider.value(20);
	// waveFrequencySlider.value(0.001);
	energyHeightSlider.value(0);
	orbit_speed_slider.value(0.5);
	radiationSizeSlider.value(0.5);	
}

function resetSizeSlider(){
	size_slider.value(10);
	// punto_r = 10;
}

function puntoSliderEvent(){
	currentColorSelectionIndex = 2;

	// Map the combined integers (0-99) to the RGB color space (0-255)
	let r = floor(random(0, 255));
	let g = floor(random(0, 255));
	let b = floor(random(0, 255));

	// Convert the RGB values to a hex color code
	const hexColor = '#' + hex(r, 2) + hex(g, 2) + hex(b, 2);

	colorList[currentColorSelectionIndex] = hexColor;

	elementName.html(getTranslation('colorNameList')[currentColorSelectionIndex]);
	elementName.style('color', colorList[currentColorSelectionIndex]);
	// puntoCheckbox.checked(true);
	generated = false;
}

// function updatePuntoSize(){
// 	punto_r = size_slider.value();
// }

function energySliderEvent(){
	currentColorSelectionIndex = 3;
	elementName.html(getTranslation('colorNameList')[currentColorSelectionIndex]);
	elementName.style('color', colorList[currentColorSelectionIndex]);
	// energyCheckbox.checked(true);
	generated = false;
}

function orbitSliderEvent(){
	currentColorSelectionIndex = 5;
	elementName.html(getTranslation('colorNameList')[currentColorSelectionIndex]);
	elementName.style('color', colorList[currentColorSelectionIndex]);
	// orbitCheckbox.checked(true);
	generated = false;
}

function radiationSliderEvent(){
	currentColorSelectionIndex = 6;
	elementName.html(getTranslation('colorNameList')[currentColorSelectionIndex]);
	elementName.style('color', colorList[currentColorSelectionIndex]);
	// radiationCheckbox.checked(true);
	generated = false;
}

// function WaveSliderEvent(){
// 	currentColorSelectionIndex = 7;
// 	elementName.html(colorNameList[currentColorSelectionIndex]);
// 	elementName.style('color', colorList[currentColorSelectionIndex]);
// 	waveCheckbox.checked(true);
// 	generated = false;
// }
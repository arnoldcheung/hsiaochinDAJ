function sliderSetup(){
	//slider definition

	backgroundSlider = createSlider(0, 255, 255, 1);
	chiSlider = createSlider(0, 255, 80, 1);


	size_slider = createSlider(10, min(width, height) * 0.65, 10, 1);
	energySizeSlider = createSlider(5, 50, 20, 1);
	// waveFrequencySlider = createSlider(0.00001, 0.005, 0.001, 0.00001);
	energyHeightSlider = createSlider(-600, 1600, 0, 1);
	orbit_speed_slider = createSlider(-5, 5, 0.5, 0.0001);
	radiationSizeSlider = createSlider(0.1, 1, 0.5, 0.01);
	
	// set slider parent and classes
	backgroundSlider.parent(controlPanel);
	chiSlider.parent(controlPanel);


	size_slider.parent(controlPanel);
	energySizeSlider.parent(controlPanel);
	// waveFrequencySlider.parent(controlPanel);
	energyHeightSlider.parent(controlPanel);
	orbit_speed_slider.parent(controlPanel);
	radiationSizeSlider.parent(controlPanel);


	backgroundSlider.class('custom-slider');
	chiSlider.class('custom-slider');

	size_slider.class('custom-slider');
	energySizeSlider.class('custom-slider');
	// waveFrequencySlider.class('custom-slider');
	energyHeightSlider.class('custom-slider');
	orbit_speed_slider.class('custom-slider');
	radiationSizeSlider.class('custom-slider');

	resetSliders();
	
	
	// slider events

	backgroundSlider.touchStarted(backgroundSliderEvent);
	backgroundSlider.mousePressed(backgroundSliderEvent);

	chiSlider.touchStarted(chiSliderEvent);
	chiSlider.mousePressed(chiSliderEvent);


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

	backgroundSlider.position(longestName.x + parseFloat(longestName.style('width')) + 10, backgroundCheckbox.y);
	chiSlider.position(backgroundSlider.x, chiCheckbox.y);
	

	size_slider.position(backgroundSlider.x, puntoCheckbox.y);
	energyHeightSlider.position(backgroundSlider.x, energyCheckbox.y);
	energySizeSlider.position(backgroundSlider.x, movementCheckbox.y);
	orbit_speed_slider.position(backgroundSlider.x, orbitCheckbox.y);
	radiationSizeSlider.position(backgroundSlider.x, radiationCheckbox.y);
	// waveFrequencySlider.position(size_slider.x, waveCheckbox.y);

	// slider style


	backgroundSlider.style('width', controlPanel.width * 0.9 - backgroundSlider.x + 'px');
	chiSlider.style('width', backgroundSlider.style('width'));

	size_slider.style('width', controlPanel.width * 0.9 - size_slider.x + 'px');
	energySizeSlider.style('width', size_slider.style('width'));
	// waveFrequencySlider.style('width', size_slider.style('width'));
	energyHeightSlider.style('width', size_slider.style('width'));
	orbit_speed_slider.style('width', size_slider.style('width'));
	radiationSizeSlider.style('width', size_slider.style('width'));

	// reset slider values

	backgroundSlider.value(255);
	chiSlider.value(80);

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

function backgroundSliderEvent(){
	currentColorSelectionIndex = 0;
	elementName.html(getTranslation('colorNameList')[currentColorSelectionIndex]);
	elementName.style('color', colorList[currentColorSelectionIndex]);
	// energyCheckbox.checked(true);
	generated = false;

	resetCurrentSelected();
	backgroundSlider.addClass('current-selected');
}

function chiSliderEvent(){
	currentColorSelectionIndex = 1;
	elementName.html(getTranslation('colorNameList')[currentColorSelectionIndex]);
	elementName.style('color', colorList[currentColorSelectionIndex]);
	// energyCheckbox.checked(true);
	generated = false;

	resetCurrentSelected();
	chiSlider.addClass('current-selected');
}



function puntoSliderEvent(){
	currentColorSelectionIndex = 2;

	punto_r = 10;

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

	resetCurrentSelected();
	size_slider.addClass('current-selected');
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

	resetCurrentSelected();
	energyHeightSlider.addClass('current-selected');
	energySizeSlider.addClass('current-selected');
}

function orbitSliderEvent(){
	currentColorSelectionIndex = 4;
	elementName.html(getTranslation('colorNameList')[currentColorSelectionIndex]);
	elementName.style('color', colorList[currentColorSelectionIndex]);
	// orbitCheckbox.checked(true);
	generated = false;

	resetCurrentSelected();
	orbit_speed_slider.addClass('current-selected');
}

function radiationSliderEvent(){
	currentColorSelectionIndex = 5;
	elementName.html(getTranslation('colorNameList')[currentColorSelectionIndex]);
	elementName.style('color', colorList[currentColorSelectionIndex]);
	// radiationCheckbox.checked(true);
	generated = false;

	resetCurrentSelected();
	radiationSizeSlider.addClass('current-selected');
}

// function WaveSliderEvent(){
// 	currentColorSelectionIndex = 7;
// 	elementName.html(colorNameList[currentColorSelectionIndex]);
// 	elementName.style('color', colorList[currentColorSelectionIndex]);
// 	waveCheckbox.checked(true);
// 	generated = false;
// }
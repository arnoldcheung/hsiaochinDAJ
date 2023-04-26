function togglePanel() {
  panelVisible = !panelVisible;
  controlPanel.style('display', panelVisible ? 'block' : 'none');
  hideShowButton.html(panelVisible ? 'Hide Control' : 'Show Control');
}

function toggleColorSelection() {
  currentColorSelectionIndex = (currentColorSelectionIndex + 1) % numSelectableColors;
	elementName.html(colorNameList[currentColorSelectionIndex]);
	elementName.style('color', colorList[currentColorSelectionIndex]);
	
	if(currentColorSelectionIndex == 2){
		puntoCheckbox.checked(true);
  } else if(currentColorSelectionIndex == 3){
		energyCheckbox.checked(true);
	} else if (currentColorSelectionIndex == 5){
		orbitCheckbox.checked(true); 
	} else if (currentColorSelectionIndex == 6){
		radiationCheckbox.checked(true); 
	} else if (currentColorSelectionIndex == 7){
		waveCheckbox.checked(true);
	} else if (currentColorSelectionIndex == 8){
		signatureCheckbox.checked(true);
	}
}

// function toggleFontSelection() {
//   currentFontIndex = (currentFontIndex + 1) % numSelectableFonts;
// 	// elementName.html(colorNameList[currentColorSelectionIndex]);
// 	currentFont = fonts[currentFontIndex];
// }

function setColor(){
	colorList[currentColorSelectionIndex] = iroP.color.hexString;
	elementName.style('color', colorList[currentColorSelectionIndex]);
	punto_r = 10;
	
	// not set generated flag to false if it is for signature
	if(currentColorSelectionIndex != 8) { 
		generated = false;
	}
}

function windowResized() {
  resetUniverse();
}

function validateNumberInput() {
  let currentValue = numberInput.value();
  let sanitizedValue = currentValue.replace(/[^0-9]/g, '');
	
  numberInput.value(sanitizedValue);
}

function sanitizeNameInput(inputText) {
	const currentNameInput = nameInput.value();
	const sanitizedName = currentNameInput
		.replace(/</g, '')
    .replace(/>/g, '')
    .replace(/&/g, '');
	nameInput.value(sanitizedName);
}



function createMetaTag() {
	let meta = createElement('meta');
	meta.attribute('name', 'viewport');
	meta.attribute('content', 'user-scalable=no,initial-scale=1,maximum-scale=1,minimum-scale=1,width=device-width,height=device-height');

	let head = select('head');
	meta.parent(head);
}

function captureCanvas(){
	mainCanvas.save('universe.png');
}

function resetPunto(){
	puntoGraphics.clear();
	punto_r = initial_punto_r;
}

function resetUniverse() {
 	resizeCanvas(window.innerWidth, window.innerHeight);
	puntoGraphics.resizeCanvas(width, height);
	orbitGraphics.resizeCanvas(width, height);
	energyGraphics.resizeCanvas(min(width, height), min(width, height));
	radiationGraphics.resizeCanvas(max(width, height), max(width, height));
	waveGraphics.resizeCanvas(width, height);
	
	clear();
	mainCanvas.clear();
	orbitGraphics.clear();
	radiationGraphics.clear();
	puntoGraphics.clear();
	waveGraphics.clear();
	
	punto_r = initial_punto_r;
	
	controlPanel.position(0, 0);
	controlPanel.style('width', str(width * 0.4) + 'px');
    controlPanel.style('height', str(height) + 'px');
	controlPanel.style('background-color', 'rgba(255,255,255,0.75)');

  hideShowButton.position(10, height - 30);
  captureButton.position(hideShowButton.x + hideShowButton.width + 10, height - 30);
  resetButton.position(captureButton.x + captureButton.width + 10, height - 30);
	
	// reset colors
	
let colorList = ['#021E3A', // bg
								 '#FFFFFF', // stars
								 '#FF6400', // Punto
								 '#DBFF26', // energy 1
								 '#3DE049', // energy 2
								 '#FFFFFF', // orbit
								 '#AEF064', // radiation
								 '#FF8AFF', // wave
								 '#FFFFFF'] // signature

	currentColorSelectionIndex = 0;
	
	// reset checkbox

	puntoCheckbox.checked(false);
	orbitCheckbox.checked(false);
	energyCheckbox.checked(false);
	radiationCheckbox.checked(false);
	waveCheckbox.checked(false);
	signatureCheckbox.checked(false);
	
	// reset sliders
	
	size_slider.value(10);
	
	energySizeSlider.value(20);
	
	waveFrequencySlider.value(0.001);
	energyHeightSlider.value(0);
	
	orbit_speed_slider.value(0.5);
	
	radiationSizeSlider.value(0.5);	
}
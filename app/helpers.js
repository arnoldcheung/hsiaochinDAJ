// function that toggles on and off the control panel ----------------------------------------------------------------------------------------

function togglePanel() {
  panelVisible = !panelVisible;
  controlPanel.style('display', panelVisible ? 'block' : 'none');
  hideShowButton.html(panelVisible ? 'Hide Control' : 'Show Control');
}

// function that toggles the color selection cycle ----------------------------------------------------------------------------------------

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

// Event for when a new color is selected ----------------------------------------------------------------------------------------

function setColor(){
	colorList[currentColorSelectionIndex] = iroP.color.hexString;
	elementName.style('color', colorList[currentColorSelectionIndex]);
	punto_r = 10;
	
	// not set generated flag to false if it is for signature
	if(currentColorSelectionIndex != 8) { 
		generated = false;
	}
}

// function that resets the sketch when screen is resized ----------------------------------------------------------------------------------------

function windowResized() {
  resetUniverse();
}

// Event function for number input, allow only numbers ----------------------------------------------------------------------------------------

function validateNumberInput() {
  let currentValue = numberInput.value();
  let sanitizedValue = currentValue.replace(/[^0-9]/g, '');
	
  numberInput.value(sanitizedValue);
}

// Event function for number input, sanitises input ----------------------------------------------------------------------------------------

function sanitizeNameInput(inputText) {
	signature = true;
	const currentNameInput = nameInput.value();
	const sanitizedName = currentNameInput
	.replace(/</g, '')
    .replace(/>/g, '')
    .replace(/&/g, '');
	nameInput.value(sanitizedName);
}


// function that adds metatag ----------------------------------------------------------------------------------------

function createMetaTag() {
	let meta = createElement('meta');
	meta.attribute('name', 'viewport');
	meta.attribute('content', 'user-scalable=no,initial-scale=1,maximum-scale=1,minimum-scale=1,width=device-width,height=device-height');

	let head = select('head');
	meta.parent(head);
}

// Event function for capturing the canvas, to be added with qr code function ----------------------------------------------------------------------------------------

function captureCanvas(){
	mainCanvas.save('universe.png');
}

// resets punto, (can remove) ----------------------------------------------------------------------------------------

function resetPunto(){
	puntoGraphics.clear();
	punto_r = initial_punto_r;
}

// resets the entire sketch ----------------------------------------------------------------------------------------

function resetUniverse() {

	// reset colors

	colorList = [
		'#021E3A', // bg
		'#FFFFFF', // stars
		'#FF6400', // Punto
		'#DBFF26', // energy 1
		'#3DE049', // energy 2
		'#FFFFFF', // orbit
		'#AEF064', // radiation
		'#FF8AFF', // wave
		'#FFFFFF'] // signature

	currentColorSelectionIndex = 0;

	// resets flags
	generated = false;
	signature = false;

	// clears all the canvas and graphics
	clear();
	mainCanvas.background(colorList[0]);
	starsGraphics.clear();
	puntoGraphics.clear();
	orbitGraphics.clear();
	energyGraphics.clear();
	radiationGraphics.clear();
	waveGraphics.clear();

	// resize the canvas, incase of device rotation / screensize change
	resizeCanvas(windowWidth, windowHeight);
	mainCanvas.resizeCanvas(width, height);
	starsGraphics.resizeCanvas(width, height);
	puntoGraphics.resizeCanvas(width, height);
	orbitGraphics.resizeCanvas(width, height);
	energyGraphics.resizeCanvas(min(width, height), min(width, height));
	radiationGraphics.resizeCanvas(max(width, height), max(width, height));
	waveGraphics.resizeCanvas(width, height);

	// re-setup the star graphics
	drawStars(3000, {minSize: 1, maxSize: 5, canvas: starsGraphics});

	// reset the control panels and their buttons / sliders
	resetControlPanel();
	resetNumberInput();
	resetColorPicker();
	resetCheckboxes();
	resetSliders();
	resetNameInput();
	resetButtonMenu();

	// change element name back to space (colorList[0])
	elementName.html(colorNameList[currentColorSelectionIndex]);
}

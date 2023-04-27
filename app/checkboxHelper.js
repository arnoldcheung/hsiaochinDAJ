function checkboxSetup(){
	//checkbox definition
	puntoCheckbox = createCheckbox('Punto', false);
	orbitCheckbox = createCheckbox('Orbit', false);
	energyCheckbox = createCheckbox('Energy', false);
	radiationCheckbox = createCheckbox('Radiation', false);
	waveCheckbox = createCheckbox('Wave', false);
	signatureCheckbox = createCheckbox('Signature', false);
	
	// checkbox parent
	puntoCheckbox.parent(controlPanel);
	orbitCheckbox.parent(controlPanel);
	energyCheckbox.parent(controlPanel);
	radiationCheckbox.parent(controlPanel);
	waveCheckbox.parent(controlPanel);
	signatureCheckbox.parent(controlPanel);
	
	// puntoCheckbox.position(10, iroPickerDiv.y + parseFloat(iroPickerDiv.style('height')) * 1.1);	
	// energyCheckbox.position(puntoCheckbox.x, puntoCheckbox.y + sliderSpacing);
	// orbitCheckbox.position(energyCheckbox.x, puntoCheckbox.y + 3 * sliderSpacing);
	// radiationCheckbox.position(energyCheckbox.x, puntoCheckbox.y + 4 * sliderSpacing);
	// waveCheckbox.position(energyCheckbox.x, puntoCheckbox.y + 5 * sliderSpacing);
	// signatureCheckbox.position(energyCheckbox.x, puntoCheckbox.y + 6 * sliderSpacing);

	resetCheckboxes();

	// checkbox events
	puntoCheckbox.touchStarted(puntoEvent);
	puntoCheckbox.mouseClicked(puntoEvent);
	
	energyCheckbox.touchStarted(energyEvent);
	energyCheckbox.mouseClicked(energyEvent);
	
	orbitCheckbox.touchStarted(orbitEvent);
	orbitCheckbox.mouseClicked(orbitEvent);
	
	radiationCheckbox.touchStarted(radiationEvent);
	radiationCheckbox.mouseClicked(radiationEvent);
	
	waveCheckbox.touchStarted(WaveEvent);
	waveCheckbox.mouseClicked(WaveEvent);
	
	signatureCheckbox.touchStarted(signatureEvent);
	signatureCheckbox.mouseClicked(signatureEvent);
}

function resetCheckboxes(){

	// if(width > height) {
	// 	puntoCheckbox.position(iroPickerDiv.x + parseFloat(iroPickerDiv.style('width')) + 10, iroPickerDiv.y);	


	// } else {
	// 	puntoCheckbox.position(10, iroPickerDiv.y + parseFloat(iroPickerDiv.style('height')) * 1.1);	
	// }

	puntoCheckbox.position(iroPickerDiv.x, iroPickerDiv.y + parseFloat(iroPickerDiv.style('height')) * 1.1);	
	energyCheckbox.position(puntoCheckbox.x, puntoCheckbox.y + sliderSpacing);
	orbitCheckbox.position(energyCheckbox.x, puntoCheckbox.y + 3 * sliderSpacing);
	radiationCheckbox.position(energyCheckbox.x, puntoCheckbox.y + 4 * sliderSpacing);
	waveCheckbox.position(energyCheckbox.x, puntoCheckbox.y + 5 * sliderSpacing);
	// signatureCheckbox.position(energyCheckbox.x, puntoCheckbox.y + 6 * sliderSpacing);

	signatureCheckbox.position(energyCheckbox.x, 30);


	// reset checkbox values

	puntoCheckbox.checked(false);
	orbitCheckbox.checked(false);
	energyCheckbox.checked(false);
	radiationCheckbox.checked(false);
	waveCheckbox.checked(false);
	signatureCheckbox.checked(false);
}

function puntoEvent(){
	currentColorSelectionIndex = 2;
	elementName.html(colorNameList[currentColorSelectionIndex]);
	elementName.style('color', colorList[currentColorSelectionIndex]);
	generated = false;
}

function energyEvent(){
	currentColorSelectionIndex = 3;
	elementName.html(colorNameList[currentColorSelectionIndex]);
	elementName.style('color', colorList[currentColorSelectionIndex]);
	generated = false;
}

function orbitEvent(){
	currentColorSelectionIndex = 5;
	elementName.html(colorNameList[currentColorSelectionIndex]);
	elementName.style('color', colorList[currentColorSelectionIndex]);
	generated = false;
}

function radiationEvent(){
	currentColorSelectionIndex = 6;
	elementName.html(colorNameList[currentColorSelectionIndex]);
	elementName.style('color', colorList[currentColorSelectionIndex]);
	generated = false;
}

function WaveEvent(){
	currentColorSelectionIndex = 7;
	elementName.html(colorNameList[currentColorSelectionIndex]);
	elementName.style('color', colorList[currentColorSelectionIndex]);
	generated = false;
}

function signatureEvent(){
	currentColorSelectionIndex = 8;
	elementName.html(colorNameList[currentColorSelectionIndex]);
	elementName.style('color', colorList[currentColorSelectionIndex]);
}

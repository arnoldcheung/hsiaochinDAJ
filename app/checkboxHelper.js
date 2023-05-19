function checkboxSetup(){
	//checkbox definition
	puntoCheckbox = createCheckbox('Punto', true);
	orbitCheckbox = createCheckbox('Vitality', true);
	energyCheckbox = createCheckbox('Energy', true);
	radiationCheckbox = createCheckbox('Radiation', true);
	// waveCheckbox = createCheckbox('Wave', false);
	// signatureCheckbox = createCheckbox('Signature', false);
	
	// checkbox parent
	puntoCheckbox.parent(controlPanel);
	orbitCheckbox.parent(controlPanel);
	energyCheckbox.parent(controlPanel);
	radiationCheckbox.parent(controlPanel);
	// waveCheckbox.parent(controlPanel);

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
	
	// waveCheckbox.touchStarted(WaveEvent);
	// waveCheckbox.mouseClicked(WaveEvent);
}

function resetCheckboxes(){

	puntoCheckbox.position(iroPickerDiv.x, iroPickerDiv.y + parseFloat(iroPickerDiv.style('height')) + 20);	// this position here controls all the checkbox / sliders' position relative this this
	energyCheckbox.position(puntoCheckbox.x, puntoCheckbox.y + sliderSpacing);
	orbitCheckbox.position(energyCheckbox.x, puntoCheckbox.y + 3 * sliderSpacing);
	radiationCheckbox.position(energyCheckbox.x, puntoCheckbox.y + 4 * sliderSpacing);
	// waveCheckbox.position(energyCheckbox.x, puntoCheckbox.y + 5 * sliderSpacing);

	puntoCheckbox.checked(true);
	orbitCheckbox.checked(true);
	energyCheckbox.checked(true);
	radiationCheckbox.checked(true);
	// waveCheckbox.checked(false);
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

// function WaveEvent(){
// 	currentColorSelectionIndex = 7;
// 	elementName.html(colorNameList[currentColorSelectionIndex]);
// 	elementName.style('color', colorList[currentColorSelectionIndex]);
// 	generated = false;
// }

function signatureEvent(){
	currentColorSelectionIndex = 7;
	elementName.html(colorNameList[currentColorSelectionIndex]);
	elementName.style('color', colorList[currentColorSelectionIndex]);

	signature = false;
}

function messageEvent(){
	currentColorSelectionIndex = 7;
	elementName.html(colorNameList[currentColorSelectionIndex]);
	elementName.style('color', colorList[currentColorSelectionIndex]);
}
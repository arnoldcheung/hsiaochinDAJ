function checkboxSetup(){
	// slider intro text
	sliderIntroText = createDiv(getTranslation("adjustSliderInstruction"));
	sliderIntroText.parent(controlPanel);
	sliderIntroText.addClass('controlPanelText');
	// sliderIntroText.position(iroPickerDiv.x, iroPickerDiv.y + parseFloat(iroPickerDiv.style('height')) + 15);	

	//checkbox definition
	// puntoCheckbox = createCheckbox('Punto', true);
	// orbitCheckbox = createCheckbox('Vitality', true);
	// energyCheckbox = createCheckbox('Energy', true);
	// movementCheckbox = createCheckbox('Movement', true);
	// radiationCheckbox = createCheckbox('Radiation', true);
	// waveCheckbox = createCheckbox('Wave', false);
	// signatureCheckbox = createCheckbox('Signature', false);

	// test.....................................................................................
	backgroundCheckbox = createDiv('Space');
	chiCheckbox = createDiv('Chi')


	puntoCheckbox = createDiv('Punto');
	orbitCheckbox = createDiv('Vitality');
	energyCheckbox = createDiv('Energy');
	movementCheckbox = createDiv('Movement');
	radiationCheckbox = createDiv('Radiation');
	
	// checkbox parent
	backgroundCheckbox.parent(controlPanel);
	chiCheckbox.parent(controlPanel);

	puntoCheckbox.parent(controlPanel);
	orbitCheckbox.parent(controlPanel);
	energyCheckbox.parent(controlPanel);
	movementCheckbox.parent(controlPanel);
	radiationCheckbox.parent(controlPanel);
	// waveCheckbox.parent(controlPanel);


	backgroundCheckbox.addClass('controlPanelText');
	chiCheckbox.addClass('controlPanelText');


	puntoCheckbox.addClass('controlPanelText');
	puntoCheckbox.addClass('controlPanelText');
	orbitCheckbox.addClass('controlPanelText');
	energyCheckbox.addClass('controlPanelText');
	movementCheckbox.addClass('controlPanelText');
	radiationCheckbox.addClass('controlPanelText');

	resetCheckboxes();

	// checkbox events
	// puntoCheckbox.touchStarted(puntoEvent);
	// puntoCheckbox.mouseClicked(puntoEvent);
	
	// energyCheckbox.touchStarted(energyEvent);
	// energyCheckbox.mouseClicked(energyEvent);
	
	// orbitCheckbox.touchStarted(orbitEvent);
	// orbitCheckbox.mouseClicked(orbitEvent);
	
	// radiationCheckbox.touchStarted(radiationEvent);
	// radiationCheckbox.mouseClicked(radiationEvent);
	
	// waveCheckbox.touchStarted(WaveEvent);
	// waveCheckbox.mouseClicked(WaveEvent);
}

function resetCheckboxes(){

	sliderIntroText.html(getTranslation("adjustSliderInstruction"));
	// sliderIntroText.position(iroPickerDiv.x, iroPickerDiv.y + parseFloat(iroPickerDiv.style('height')) + 15);	
	sliderIntroText.position(numberInput.x, elementName.y + parseFloat(elementName.style('height')) + 15);	


	backgroundCheckbox.html(getTranslation('elementList')[5]);
	chiCheckbox.html(getTranslation('elementList')[6]);


	puntoCheckbox.html(getTranslation('elementList')[0]);
	orbitCheckbox.html(getTranslation('elementList')[3]);
	energyCheckbox.html(getTranslation('elementList')[1]);
	movementCheckbox.html(getTranslation('elementList')[2]);
	radiationCheckbox.html(getTranslation('elementList')[4]);

	backgroundCheckbox.position(numberInput.x, sliderIntroText.y + 35);	// this position here controls all the checkbox / sliders' position relative this this
	chiCheckbox.position(backgroundCheckbox.x, backgroundCheckbox.y + sliderSpacing);

	puntoCheckbox.position(backgroundCheckbox.x, backgroundCheckbox.y + 2 * sliderSpacing);	// this position here controls all the checkbox / sliders' position relative this this
	// puntoCheckbox.position(iroPickerDiv.x, iroPickerDiv.y + parseFloat(iroPickerDiv.style('height')) + 20);	// this position here controls all the checkbox / sliders' position relative this this
	energyCheckbox.position(backgroundCheckbox.x, backgroundCheckbox.y + 3 * sliderSpacing);
	movementCheckbox.position(backgroundCheckbox.x, backgroundCheckbox.y + 4 * sliderSpacing);
	orbitCheckbox.position(backgroundCheckbox.x, backgroundCheckbox.y + 5 * sliderSpacing);
	radiationCheckbox.position(backgroundCheckbox.x, backgroundCheckbox.y + 6 * sliderSpacing);

// old code (might need this) ---v
	// puntoCheckbox.position(numberInput.x, sliderIntroText.y + 35);	// this position here controls all the checkbox / sliders' position relative this this
	// // puntoCheckbox.position(iroPickerDiv.x, iroPickerDiv.y + parseFloat(iroPickerDiv.style('height')) + 20);	// this position here controls all the checkbox / sliders' position relative this this
	// energyCheckbox.position(puntoCheckbox.x, puntoCheckbox.y + sliderSpacing);
	// movementCheckbox.position(puntoCheckbox.x, puntoCheckbox.y + 2 * sliderSpacing);
	// orbitCheckbox.position(energyCheckbox.x, puntoCheckbox.y + 3 * sliderSpacing);
	// radiationCheckbox.position(energyCheckbox.x, puntoCheckbox.y + 4 * sliderSpacing);

	// waveCheckbox.position(energyCheckbox.x, puntoCheckbox.y + 5 * sliderSpacing);

	// puntoCheckbox.checked(true);
	// orbitCheckbox.checked(true);
	// energyCheckbox.checked(true);
	// movementCheckbox.checked(true);
	// radiationCheckbox.checked(true);
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
	currentColorSelectionIndex = 4;
	elementName.html(colorNameList[currentColorSelectionIndex]);
	elementName.style('color', colorList[currentColorSelectionIndex]);
	generated = false;
}

function radiationEvent(){
	currentColorSelectionIndex = 5;
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
	currentColorSelectionIndex = 6;
	elementName.html(getTranslation('colorNameList')[currentColorSelectionIndex]);
	elementName.style('color', colorList[currentColorSelectionIndex]);

	// signature = false;
}

function messageEvent(){
	currentColorSelectionIndex = 6;
	elementName.html(getTranslation('colorNameList')[currentColorSelectionIndex]);
	elementName.style('color', colorList[currentColorSelectionIndex]);
}
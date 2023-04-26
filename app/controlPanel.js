function setupControlPanel(){
  controlPanel = createDiv();
  controlPanel.class('controlPanel');
  controlPanel.position(0, 0);
	controlPanel.style('width', width * 0.4 + 'px');
  controlPanel.style('height', height + 'px');
  controlPanel.style('background-color', 'rgba(255,255,255,0.5)');
  controlPanel.style('display', 'block');
}

function setupNumberInput(){
	numberInput = createInput('Create your universe with 8 Numbers ...');
	numberInput.parent(controlPanel);
	
	numberInput.elt.addEventListener('focus', function() {
   		this.value = '';
  	});

	numberInput.style('width', controlPanel.width * 0.75 + 'px');
	numberInput.style('height', '20px');
	
	numberInput.attribute('type', 'tel');
	numberInput.attribute('pattern', '\\d*');
	numberInput.attribute('maxlength', '8');
	numberInput.input(validateNumberInput);
	numberInput.position(30, 50);
	
	generateButton = createButton('Go');
	generateButton.parent(controlPanel);
	generateButton.position(numberInput.x + numberInput.width + 20, numberInput.y);
	generateButton.mouseClicked(generateUniverse);
	generateButton.touchEnded(generateUniverse);

  orTxt = createDiv('or create your universe manually ...');
	orTxt.parent(controlPanel);
	orTxt.position(30, 80);

}

function setupColorPicker(){

	elementName = createDiv(colorNameList[currentColorSelectionIndex]);
	elementName.id("elementName")
	elementName.style('color', colorList[currentColorSelectionIndex]);
	elementName.position(30, 100);
	elementName.parent(controlPanel);
	
	// print(elementName.width + 10);
	
	// Create a button to toggle color selection ----------------------------------------------------------------------------------------
  nextElementButton = createButton("Next Element");
	// nextElementButton.class('button-74');
 	nextElementButton.position(elementName.x, elementName.y + parseFloat(elementName.style('height')) + 10);
  nextElementButton.mouseClicked(toggleColorSelection);
	nextElementButton.parent(controlPanel);

	iroPickerDiv = createDiv();
	iroPickerDiv.parent(controlPanel);
	iroPickerDiv.id("iroPickerDiv")

	iroPickerDiv.position(30, nextElementButton.y + 30);
	
	iroP = new iro.ColorPicker('#iroPickerDiv',  {width: min(width * 0.7, controlPanel.height * 0.3)});
	iroP.on('color:change', setColor)
}

function setupNameInput(){
  // Create the name input field
  nameInput = createInput('');
	nameInput.parent(controlPanel);
  nameInput.attribute('type', 'text');
	nameInput.position(size_slider.x, signatureCheckbox.y + 3);
	nameInput.style('width', controlPanel.width * 0.9 - nameInput.x + 'px');
	nameInput.elt.addEventListener('focus', function() {
    signatureCheckbox.checked(true);
		// this.value = '';
  });
	nameInput.input(sanitizeNameInput);
	
	nameInput.touchStarted(signatureEvent);
	nameInput.mouseClicked(signatureEvent);
}

function setupButtonMenu(){
  
  buttonMenuDiv = createDiv();
  buttonMenuDiv.addClass('controlPanel');

  // Create a button to toggle the control panel ----------------------------------------------------------------------------------------
  hideShowButton = createButton("Hide Control");
  hideShowButton.position(10, height - 50);
  hideShowButton.mouseClicked(togglePanel);
  hideShowButton.parent(buttonMenuDiv);
  
  // Create a button to capture the canvas ----------------------------------------------------------------------------------------
  captureButton = createButton("Capture");
  captureButton.position(hideShowButton.x + hideShowButton.width + 10, height - 50);
  captureButton.mouseClicked(captureCanvas);
  hideShowButton.parent(buttonMenuDiv);

  // Create a button to reset ----------------------------------------------------------------------------------------
  resetButton = createButton("Reset Universe");
  resetButton.position(captureButton.x + captureButton.width + 10, height - 50);
  resetButton.mouseClicked(resetUniverse);
  hideShowButton.parent(buttonMenuDiv);
}



// reset control panel --------------------------------------------------------------------------------------------------

function resetControlPanel(){
  // controlPanel = createDiv();
  controlPanel.position(0, 0);
	controlPanel.style('width', width * 0.4 + 'px');
  controlPanel.style('height', height + 'px');
  // controlPanel.style('background-color', 'rgba(255,255,255,0.75)');
  // controlPanel.style('display', 'block');
}

function resetNumberInput(){
	// numberInput = createInput('Create your universe with 8 Numbers ...');
	// numberInput.parent(controlPanel);
	
	// numberInput.elt.addEventListener('focus', function() {
  //  		this.value = '';
  // 	});

	numberInput.style('width', controlPanel.width * 0.75 + 'px');
	numberInput.style('height', '20px');
	
	// numberInput.attribute('type', 'tel');
	// numberInput.attribute('pattern', '\\d*');
	// numberInput.attribute('maxlength', '8');
	// numberInput.input(validateNumberInput);
	numberInput.position(30, 50);
	
	// generateButton = createButton('Go');
	// generateButton.parent(controlPanel);
	generateButton.position(numberInput.x + numberInput.width + 20, numberInput.y);
	// generateButton.mouseClicked(generateUniverse);
	// generateButton.touchEnded(generateUniverse);

  // orTxt = createDiv('or create your universe manually ...');
	// orTxt.parent(controlPanel);
	orTxt.position(30, 80);

}

function resetColorPicker(){

	// elementName = createDiv(colorNameList[currentColorSelectionIndex]);
	// elementName.id("elementName")
	// elementName.style('color', colorList[currentColorSelectionIndex]);
	elementName.position(30, 100);
	// elementName.parent(controlPanel);
	
	// print(elementName.width + 10);
	
	// Create a button to toggle color selection ----------------------------------------------------------------------------------------
  // nextElementButton = createButton("Next Element");
	// nextElementButton.class('button-74');
 	nextElementButton.position(elementName.x, elementName.y + parseFloat(elementName.style('height')) + 10);
  // nextElementButton.mouseClicked(toggleColorSelection);
	// nextElementButton.parent(controlPanel);

	// iroPickerDiv = createDiv();
	// iroPickerDiv.parent(controlPanel);
	// iroPickerDiv.id("iroPickerDiv")

	iroPickerDiv.position(30, nextElementButton.y + 30);
	
	// iroP = new iro.ColorPicker('#iroPickerDiv',  {width: controlPanel.height * 0.3});
  iroP.resize(min(width * 0.7, controlPanel.height * 0.3))
	// iroP.on('color:change', setColor)
}

function resetNameInput(){
  // Create the name input field
  // nameInput = createInput('Your Name');
	// nameInput.parent(controlPanel);
  // nameInput.attribute('type', 'text');
	nameInput.position(size_slider.x, signatureCheckbox.y + 3);
	nameInput.style('width', controlPanel.width * 0.9 - nameInput.x + 'px');
	// nameInput.elt.addEventListener('focus', function() {
  //   signatureCheckbox.checked(true);
	// 	this.value = '';
  // });
	// nameInput.input(sanitizeNameInput);
	
	// nameInput.touchStarted(signatureEvent);
	// nameInput.mouseClicked(signatureEvent);
}

function resetButtonMenu(){
    // Create a button to toggle the control panel ----------------------------------------------------------------------------------------
    // hideShowButton = createButton("Hide Control");
    hideShowButton.position(30, height - 50);
    // hideShowButton.mouseClicked(togglePanel);
    
    // Create a button to capture the canvas ----------------------------------------------------------------------------------------
    // captureButton = createButton("Capture");
    captureButton.position(hideShowButton.x + hideShowButton.width + 10, height - 50);
    // captureButton.mouseClicked(captureCanvas);
    
    // Create a button to reset ----------------------------------------------------------------------------------------
    // resetButton = createButton("Reset Universe");
    resetButton.position(captureButton.x + captureButton.width + 10, height - 50);
    // resetButton.mouseClicked(resetUniverse);
}
function setupControlPanel(){
  controlPanel = createDiv();
  controlPanel.class('controlPanel');
  controlPanel.position(0, 0);
	controlPanel.style('width', width * 0.4 + 'px');
  controlPanel.style('height', height + 'px');
  controlPanel.style('background-color', 'rgba(255,255,255,0.6)');
  controlPanel.style('display', 'block');
}

function setupNameInput(){
  // Create the name input field
  nameInput = createInput('A message for yourself ...');
	nameInput.parent(controlPanel);
  nameInput.attribute('type', 'text');
	// nameInput.position(size_slider.x, signatureCheckbox.y + 3);
  nameInput.position(30, 40);
	nameInput.style('width', controlPanel.width * 0.6 + 'px');
  nameInput.style('height', '20px');
  nameInput.elt.addEventListener('focus', () => {
    this.value = '';
    signature = true;
    signatureEvent();
    // window.scrollTo(0, 0);
    // document.body.scrollTop = 0;
    // event.target.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
	nameInput.input(sanitizeNameInput);
	
	nameInput.touchStarted(signatureEvent);
	nameInput.mouseClicked(signatureEvent);
}

function setupNumberInput(){
	numberInput = createInput('Create your universe with 8 Numbers ...');
	numberInput.parent(controlPanel);
	
	numberInput.elt.addEventListener('focus', function() {
   		this.value = '';
  	});

	numberInput.style('width', controlPanel.width * 0.6 + 'px');
	numberInput.style('height', '20px');
	
	numberInput.attribute('type', 'tel');
	numberInput.attribute('pattern', '\\d*');
	numberInput.attribute('maxlength', '8');
	numberInput.input(validateNumberInput);
	numberInput.position(30, 80);
	
	generateButton = createButton('Go');
	generateButton.parent(controlPanel);
  generateButton.style('height', '20px');
  generateButton.style('font-size', '16px');
	generateButton.position(numberInput.x + numberInput.width + 20, numberInput.y);
	generateButton.mouseClicked(generateUniverse);
	generateButton.touchEnded(generateUniverse);

  orTxt = createDiv('or create your universe manually ...');
	orTxt.parent(controlPanel);
	orTxt.position(numberInput.x, numberInput.y + 30);

}

function setupColorPicker(){

	elementName = createDiv(colorNameList[currentColorSelectionIndex]);
	elementName.id("elementName")
	elementName.style('color', colorList[currentColorSelectionIndex]);
	elementName.position(numberInput.x, 130);
	elementName.parent(controlPanel);
	
	// print(elementName.width + 10);
	
	// Create a button to toggle color selection ----------------------------------------------------------------------------------------
  nextElementButton = createButton("Next Element");
  nextElementButton.parent(controlPanel);

	// nextElementButton.class('button-74');
 	// nextElementButton.position(numberInput.x + numberInput.width + 20, elementName.y + parseFloat(elementName.style('height')) + 10);
  nextElementButton.position(elementName.x, elementName.y + parseFloat(elementName.style('height')) + 10);

  nextElementButton.mouseClicked(toggleColorSelection);

  nextElementButton.style('height', '20px');
  nextElementButton.style('font-size', '16px');

	iroPickerDiv = createDiv();
	iroPickerDiv.parent(controlPanel);
	iroPickerDiv.id("iroPickerDiv")

	iroPickerDiv.position(30, nextElementButton.y + 40);
	
	iroP = new iro.ColorPicker('#iroPickerDiv',  {
    width: min(width * 0.7, controlPanel.height * 0.25),
    layoutDirection: 'horizontal',
  });
	iroP.on('color:change', setColor)
}

function setupButtonMenu(){
  
  buttonMenuDiv = createDiv();
  buttonMenuDiv.addClass('controlPanel');

  // Create a button to toggle the control panel ----------------------------------------------------------------------------------------
  hideShowButton = createButton("Hide Control");
  hideShowButton.parent(buttonMenuDiv);
  hideShowButton.position(30, height - 50);
  hideShowButton.mouseClicked(togglePanel);

  hideShowButton.style('height', '20px');
  hideShowButton.style('font-size', '16px');
  
  // Create a button to capture the canvas ----------------------------------------------------------------------------------------
  captureButton = createButton("Capture");
  captureButton.parent(buttonMenuDiv);
  captureButton.position(hideShowButton.x + hideShowButton.width + 60, height - 50);
  captureButton.mouseClicked(captureCanvas);

  captureButton.style('height', '20px');
  captureButton.style('font-size', '16px');

  // Create a button to reset ----------------------------------------------------------------------------------------
  resetButton = createButton("Reset");
  resetButton.parent(buttonMenuDiv);
  resetButton.position(captureButton.x + captureButton.width + 60, height - 50);
  resetButton.mouseClicked(resetUniverse);

  resetButton.style('height', '20px');
  resetButton.style('font-size', '16px');
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


function resetNameInput(){
  // Create the name input field
  // nameInput = createInput('Your Name');
	// nameInput.parent(controlPanel);
  // nameInput.attribute('type', 'text');
	nameInput.position(30, 40);
	nameInput.style('width', controlPanel.width * 0.6 + 'px');
  nameInput.style('height', '20px');

	// nameInput.elt.addEventListener('focus', function() {
  //   signatureCheckbox.checked(true);
	// 	this.value = '';
  // });
	// nameInput.input(sanitizeNameInput);
	
	// nameInput.touchStarted(signatureEvent);
	// nameInput.mouseClicked(signatureEvent);
}

function resetNumberInput(){
	// numberInput = createInput('Create your universe with 8 Numbers ...');
	// numberInput.parent(controlPanel);
	
	// numberInput.elt.addEventListener('focus', function() {
  //  		this.value = '';
  // 	});

	numberInput.style('width', controlPanel.width * 0.6 + 'px');
	numberInput.style('height', '20px');
	
	// numberInput.attribute('type', 'tel');
	// numberInput.attribute('pattern', '\\d*');
	// numberInput.attribute('maxlength', '8');
	// numberInput.input(validateNumberInput);
	numberInput.position(30, 80);
	
	// generateButton = createButton('Go');
	// generateButton.parent(controlPanel);
	generateButton.position(numberInput.x + numberInput.width + 20, numberInput.y);
	// generateButton.mouseClicked(generateUniverse);
	// generateButton.touchEnded(generateUniverse);

  // orTxt = createDiv('or create your universe manually ...');
	// orTxt.parent(controlPanel);
	orTxt.position(numberInput.x, numberInput.y + 30);

}

function resetColorPicker(){

	// elementName = createDiv(colorNameList[currentColorSelectionIndex]);
	// elementName.id("elementName")
	// elementName.style('color', colorList[currentColorSelectionIndex]);
	elementName.position(numberInput, 130);
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

	iroPickerDiv.position(30, nextElementButton.y + 40);
	
	// iroP = new iro.ColorPicker('#iroPickerDiv',  {width: controlPanel.height * 0.3});
  iroP.resize(min(width * 0.7, controlPanel.height * 0.25))
	// iroP.on('color:change', setColor)
}


function resetButtonMenu(){
    // Create a button to toggle the control panel ----------------------------------------------------------------------------------------
    // hideShowButton = createButton("Hide Control");
    hideShowButton.position(30, height - 50);
    // hideShowButton.mouseClicked(togglePanel);
    
    // Create a button to capture the canvas ----------------------------------------------------------------------------------------
    // captureButton = createButton("Capture");
    captureButton.position(hideShowButton.x + hideShowButton.width + 60, height - 50);
    // captureButton.mouseClicked(captureCanvas);
    
    // Create a button to reset ----------------------------------------------------------------------------------------
    // resetButton = createButton("Reset Universe");
    resetButton.position(captureButton.x + captureButton.width + 60, height - 50);
    // resetButton.mouseClicked(resetUniverse);
}
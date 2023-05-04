// sets up the control panel (base) ----------------------------------------------------------------------------------------
function setupControlPanel(){
  controlPanel = createDiv();
  controlPanel.class('controlPanel');
  controlPanel.position(0, 0);
	controlPanel.style('width', width * 0.4 + 'px');
  controlPanel.style('height', height + 'px');
  controlPanel.style('background-color', 'rgba(255,255,255,0.6)');
  controlPanel.style('display', 'block');
}

// sets up the Name input field ----------------------------------------------------------------------------------------
function setupNameInput(){
  // Create the name input field
  nameInput = createInput('A message for yourself ...'); // create the input
	nameInput.parent(controlPanel);
  nameInput.attribute('type', 'text');
  nameInput.position(30, 40); // ***************************************************************************
	nameInput.style('width', controlPanel.width * 0.6 + 'px');
  nameInput.style('height', '20px');

  nameInput.elt.addEventListener('focus', () => {
    this.value = '';
    signature = true;
    signatureEvent();
  });

	nameInput.input(sanitizeNameInput);
	nameInput.touchStarted(signatureEvent);
	nameInput.mouseClicked(signatureEvent);


   // The font button next to the name input ----------------------------------------------------------------------------------------

  fontButton = createButton('Font');
  fontButton.parent(controlPanel);
  fontButton.style('height', '20px');
  fontButton.style('font-size', '16px');
  fontButton.position(nameInput.x + nameInput.width + 20, nameInput.y);
  fontButton.mouseClicked();
  fontButton.touchEnded(generateUnivrse);
}






// sets up the Message input field ----------------------------------------------------------------------------------------
function setupMessageInput(){
  // Create the name input field
  messageInput = createInput('Your Message (Optional) '); // create the input
	messageInput.parent(controlPanel);
  messageInput.attribute('type', 'text');
  messageInput.position(30, nameInput.y + 40); // ***************************************************************************
	messageInput.style('width', controlPanel.width * 0.6 + 'px');
  messageInput.style('height', '20px');

  messageInput.elt.addEventListener('focus', () => {
    this.value = '';
    // signature = true;
    // signatureEvent();
  });

	messageInput.input(sanitizeMessageInput);
	// messageInput.touchStarted(signatureEvent);
	// messageInput.mouseClicked(signatureEvent);
}
















// sets up the Number input field ----------------------------------------------------------------------------------------
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
	numberInput.position(30, messageInput.y + 40); // ***************************************************************************

  // The go button next to the number input ----------------------------------------------------------------------------------------
	
	generateButton = createButton('Go');
	generateButton.parent(controlPanel);
  generateButton.style('height', '20px');
  generateButton.style('font-size', '16px');
	generateButton.position(numberInput.x + numberInput.width + 20, numberInput.y);
	generateButton.mouseClicked(generateUniverse);
	generateButton.touchEnded(generateUniverse);
  
  // The text below the number input ----------------------------------------------------------------------------------------

  orTxt = createDiv('or create your universe manually ...');
	orTxt.parent(controlPanel);
	orTxt.position(numberInput.x, numberInput.y + 30);
}

// Sets up the color picker section ----------------------------------------------------------------------------------------\
function setupColorPicker(){

  // The name of the element ----------------------------------------------------------------------------------------\
	elementName = createDiv(colorNameList[currentColorSelectionIndex]);
	elementName.id("elementName")
	elementName.style('color', colorList[currentColorSelectionIndex]);
	elementName.position(numberInput.x, orTxt.y + 20); // ***************************************************************************
	elementName.parent(controlPanel);
		
	// Create a button to toggle color selection ----------------------------------------------------------------------------------------
  nextElementButton = createButton("Next Element");
  nextElementButton.parent(controlPanel);

  nextElementButton.position(elementName.x, elementName.y + parseFloat(elementName.style('height')) + 10);
  nextElementButton.mouseClicked(toggleColorSelection);

  nextElementButton.style('height', '20px');
  nextElementButton.style('font-size', '16px');

  // Sets up the color picker ----------------------------------------------------------------------------------------\
	iroPickerDiv = createDiv();
	iroPickerDiv.parent(controlPanel);
	iroPickerDiv.id("iroPickerDiv")

	iroPickerDiv.position(30, nextElementButton.y + 40);
	
	iroP = new iro.ColorPicker('#iroPickerDiv',  {
    width: min(width * 0.7, controlPanel.height * 0.25),
    layoutDirection: 'horizontal', // the brightness bar is to the right
  });
	iroP.on('color:change', setColor)
}

// Sets up the three buttons ----------------------------------------------------------------------------------------\
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
  controlPanel.position(0, 0);
	controlPanel.style('width', width * 0.4 + 'px');
  controlPanel.style('height', height + 'px');
}

function resetNameInput(){
	nameInput.position(30, 40); // ***************************************************************************
	nameInput.style('width', controlPanel.width * 0.6 + 'px');
  nameInput.style('height', '20px');

  fontButton.position(nameInput.x + nameInput.width + 20, nameInput.y);
}

function resetMessageInput(){
	messageInput.position(30, nameInput.y + 40); // ***************************************************************************
	messageInput.style('width', controlPanel.width * 0.6 + 'px');
  messageInput.style('height', '20px');
}

function resetNumberInput(){

	numberInput.style('width', controlPanel.width * 0.6 + 'px');
	numberInput.style('height', '20px');
	numberInput.position(30, messageInput.y + 40); // ***************************************************************************

	generateButton.position(numberInput.x + numberInput.width + 20, numberInput.y);

	orTxt.position(numberInput.x, numberInput.y + 30);
}

function resetColorPicker(){

	elementName.position(numberInput, orTxt.y + 20); // ***************************************************************************

 	nextElementButton.position(elementName.x, elementName.y + parseFloat(elementName.style('height')) + 10);

	iroPickerDiv.position(30, nextElementButton.y + 40);
	
  iroP.resize(min(width * 0.7, controlPanel.height * 0.25))
}


function resetButtonMenu(){
    hideShowButton.position(30, height - 50);
    captureButton.position(hideShowButton.x + hideShowButton.width + 60, height - 50);
    resetButton.position(captureButton.x + captureButton.width + 60, height - 50);
}
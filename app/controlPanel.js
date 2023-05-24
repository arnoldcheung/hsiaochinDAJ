// sets up the control panel (base) ----------------------------------------------------------------------------------------
function setupControlPanel(){
  controlPanel = createDiv();
  controlPanel.class('controlPanel');
  controlPanel.position(0, 0);
	controlPanel.style('width', width * 0.27 + 'px');
  controlPanel.style('height', height + 'px');
  controlPanel.style('background-color', 'rgba(255,255,255,0.6)');
  controlPanel.style('display', 'block');
}

// sets up the Name input field ----------------------------------------------------------------------------------------
function setupNameInput(){
  // Create the name input field
  nameInput = createInput(getTranslation("nameInputDefaultInstruction")); // create the input
	nameInput.parent(controlPanel);
  nameInput.attribute('type', 'text');
  nameInput.position(30, 40); // ***************************************************************************
	nameInput.style('width', controlPanel.width * 0.6 + 'px');
  nameInput.style('height', '20px');

  nameInput.elt.addEventListener('focus', function () {
    this.value = '';
    signature = true;
    signatureEvent();
  });

	nameInput.input(sanitizeNameInput);
	// nameInput.touchStarted(signatureEvent);
	nameInput.mouseClicked(signatureEvent);


   // The font button next to the name input ----------------------------------------------------------------------------------------

  fontButton = createButton(getTranslation("fontInstruction"));
  fontButton.addClass('button-38');
  fontButton.parent(controlPanel);
  // fontButton.style('height', '20px');
  // fontButton.style('font-size', '16px');
  fontButton.position(nameInput.x + nameInput.width + 20, nameInput.y - fontButton.height / 2);
  fontButton.mouseClicked(toggleFontSelection);
  // fontButton.touchEnded(toggleFontSelection);
}






// sets up the Message input field ----------------------------------------------------------------------------------------
function setupMessageInput(){
  // Create the name input field
  messageInput = createInput(getTranslation("messageInputDefaultInstruction")); // create the input
	messageInput.parent(controlPanel);
  messageInput.attribute('type', 'text');
  messageInput.position(30, nameInput.y + 40); // ***************************************************************************
	messageInput.style('width', controlPanel.width * 0.6 + 'px');
  messageInput.style('height', '20px');

  messageInput.elt.addEventListener('focus', function() {
    this.value = '';
    // signature = true;
    messageEvent();
  });

	messageInput.input(sanitizeMessageInput);
	// messageInput.touchStarted(signatureEvent);
	// messageInput.mouseClicked(signatureEvent);
}
















// sets up the Number input field ----------------------------------------------------------------------------------------
function setupNumberInput(){
  generateIntroText = createDiv(getTranslation("generateInstruction"));
	generateIntroText.parent(controlPanel);
	generateIntroText.addClass('controlPanelText');
  // generateIntroText.addClass('en-font');
	generateIntroText.position(messageInput.x, messageInput.y + messageInput.height + 15);	

	numberInput = createInput(getTranslation("eightDigitInstruction"));
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
	numberInput.position(30, generateIntroText.y + generateIntroText.height + 15); // ***************************************************************************

  // The go button next to the number input ----------------------------------------------------------------------------------------
	
	generateButton = createButton(getTranslation("goInstruction"));
  generateButton.addClass('button-38');
	generateButton.parent(controlPanel);
  // generateButton.style('height', '20px');
  // generateButton.style('font-size', '16px');
	generateButton.position(numberInput.x + numberInput.width + 20, numberInput.y - generateButton.height / 2);
	generateButton.mouseClicked(generateUniverse);
	generateButton.touchEnded(generateUniverse);
  
  // The text below the number input ----------------------------------------------------------------------------------------

  orTxt = createDiv(getTranslation("manualInstruction"));
	orTxt.parent(controlPanel);
  orTxt.addClass('controlPanelText');
  // orTxt.addClass('en-font');
	orTxt.position(numberInput.x, numberInput.y + 35);
}

// Sets up the color picker section ----------------------------------------------------------------------------------------\
function setupColorPicker(){

  // The name of the element ----------------------------------------------------------------------------------------\
	elementName = createDiv(getTranslation('colorNameList')[currentColorSelectionIndex]);
	elementName.id("elementName")
	elementName.style('color', colorList[currentColorSelectionIndex]);
	elementName.position(numberInput.x, orTxt.y + 30); // ***************************************************************************
	elementName.parent(controlPanel);
		
	// Create a button to toggle color selection ----------------------------------------------------------------------------------------
  nextElementButton = createButton(getTranslation("nextElementInstruction"));
  nextElementButton.addClass('button-38');
  nextElementButton.parent(controlPanel);

  nextElementButton.position(fontButton.x + fontButton.width - nextElementButton.width, elementName.y);
  // nextElementButton.position(elementName.x, elementName.y + parseFloat(elementName.style('height')) + 10);

  nextElementButton.mouseClicked(toggleColorSelection);

  // nextElementButton.style('height', '20px');
  // nextElementButton.style('font-size', '16px');

  // color intro text -----------------------------------------------------------------------------------
  colorIntroText = createDiv(getTranslation("colorInstruction"));
	colorIntroText.parent(controlPanel);
	colorIntroText.addClass('controlPanelText');
  // colorIntroText.addClass('en-font');
	colorIntroText.position(orTxt.x, elementName.y + elementName.height + 10);	

  // Sets up the color picker ----------------------------------------------------------------------------------------\
	iroPickerDiv = createDiv();
	iroPickerDiv.parent(controlPanel);
	iroPickerDiv.id("iroPickerDiv")

	iroPickerDiv.position(30, colorIntroText.y + colorIntroText.height + 10);
	
	iroP = new iro.ColorPicker('#iroPickerDiv',  {
    width: min(width * 0.7, controlPanel.height * 0.25),
    layoutDirection: 'horizontal', // the brightness bar is to the right
  });
	iroP.on('color:change', setColor)
}

// Sets up the three buttons ----------------------------------------------------------------------------------------\
function setupButtonMenu(){
  
  buttonMenuDiv = createDiv();

  buttonMenuDiv.position(0, height - buttonMenuHeight);
	buttonMenuDiv.style('width', width + 'px');
  buttonMenuDiv.style('height', buttonMenuHeight + 'px');
  buttonMenuDiv.style('background-color', 'rgba(255,255,255,255)');
  buttonMenuDiv.style('display', 'block');
  buttonMenuDiv.addClass('controlPanel');

  // Create an image element for the logo and add it to the menu bar div
  logoImg = createImg("assets/logos/MGM 3D Logo.png", "Logo");

  logoImg.parent(buttonMenuDiv);

  logoImg.style("height", "100%");
  logoImg.style("margin-left", "10px"); // Add some left margin to position it from the left edge
  // logoImg.position(0, 0);


  // Create a button to toggle the control panel ----------------------------------------------------------------------------------------
  hideShowButton = createButton(getTranslation("showControlInstruction"));
  hideShowButton.parent(buttonMenuDiv);
  hideShowButton.addClass('button-38');
  hideShowButton.position(100, (buttonMenuDiv.height/2 - hideShowButton.height));
  hideShowButton.mouseClicked(togglePanel);

  // hideShowButton.style('height', '20px');
  // hideShowButton.style('font-size', '16px');
  
  // Create a button to capture the canvas ----------------------------------------------------------------------------------------
  captureButton = createButton(getTranslation("captureInstruction"));
  captureButton.parent(buttonMenuDiv);
  captureButton.addClass('button-38');

  captureButton.position(hideShowButton.x + hideShowButton.width + 60, hideShowButton.y);
  captureButton.mouseClicked(captureCanvas);

  // captureButton.style('height', '20px');
  // captureButton.style('font-size', '16px');

  // Create a button to reset ----------------------------------------------------------------------------------------
  resetButton = createButton(getTranslation("resetInstruction"));
  resetButton.parent(buttonMenuDiv);
  resetButton.addClass('button-38');

  resetButton.position(captureButton.x + captureButton.width + 60, hideShowButton.y);
  resetButton.mouseClicked(resetUniverse);

  // Create a button to translate ----------------------------------------------------------------------------------------
  translateButton = createButton(getTranslation("language"));
  translateButton.parent(buttonMenuDiv);
  translateButton.addClass('button-38');

  translateButton.position(resetButton.x + resetButton.width + 60, hideShowButton.y);
  translateButton.mouseClicked(toggleLanguage);

  // resetButton.style('height', '20px');
  // resetButton.style('font-size', '16px');

  exhibitionTitleDiv = createDiv(getTranslation("exhibitionTitle"));
  exhibitionTitleDiv.parent(buttonMenuDiv);
  exhibitionTitleDiv.style("font-family", "Times New Roman, serif");
  exhibitionTitleDiv.style("font-style", "italic");
  exhibitionTitleDiv.style("font-size", "18px");
  exhibitionTitleDiv.style("position", "absolute");
  exhibitionTitleDiv.style("bottom", "20px");
  exhibitionTitleDiv.style("right", "20px");
  // exhibitionTitle.style("margin-right", "40");
}



// reset control panel --------------------------------------------------------------------------------------------------

function resetControlPanel(){
  controlPanel.position(0, 0);
	controlPanel.style('width', width * 0.27 + 'px');
  controlPanel.style('height', height + 'px');
}

function resetNameInput(){
	nameInput.position(30, 40); // ***************************************************************************
	nameInput.style('width', controlPanel.width * 0.6 + 'px');
  nameInput.style('height', '20px');
  nameInput.value(getTranslation("nameInputDefaultInstruction"));

  fontButton.html(getTranslation("fontInstruction"));
  fontButton.position(nameInput.x + nameInput.width + 20, nameInput.y - fontButton.height / 2);
}

function resetMessageInput(){
	messageInput.position(30, nameInput.y + 40); // ***************************************************************************
	messageInput.style('width', controlPanel.width * 0.6 + 'px');
  messageInput.style('height', '20px');
  messageInput.value(getTranslation("messageInputDefaultInstruction"));

}

function resetNumberInput(){

  generateIntroText.html(getTranslation("generateInstruction"));
  generateIntroText.position(messageInput.x, messageInput.y + messageInput.height + 15);	

	numberInput.style('width', controlPanel.width * 0.6 + 'px');
	numberInput.style('height', '20px');
	numberInput.position(30, generateIntroText.y + generateIntroText.height + 15); // ***************************************************************************
  numberInput.value(getTranslation("eightDigitInstruction"));

  generateButton.html(getTranslation("goInstruction"));
	generateButton.position(numberInput.x + numberInput.width + 20, numberInput.y - generateButton.height / 2);

  orTxt.html(getTranslation("manualInstruction"))
	orTxt.position(numberInput.x, numberInput.y + 35);
}

function resetColorPicker(){

  elementName.html(getTranslation('colorNameList')[currentColorSelectionIndex]);
	elementName.position(numberInput, orTxt.y + 30); // ***************************************************************************

  nextElementButton.html(getTranslation("nextElementInstruction"));
  nextElementButton.position(fontButton.x + fontButton.width - nextElementButton.width, elementName.y);

  colorIntroText.html(getTranslation("colorInstruction"));
  colorIntroText.position(orTxt.x, elementName.y + elementName.height + 10);	

	iroPickerDiv.position(30, colorIntroText.y + colorIntroText.height + 10);
	
  iroP.resize(min(width * 0.7, controlPanel.height * 0.25))
}


function resetButtonMenu(){
  buttonMenuDiv.position(0, height - buttonMenuHeight);
  buttonMenuDiv.style('z-index', 100);
	buttonMenuDiv.style('width', width + 'px');
  buttonMenuDiv.style('height', buttonMenuHeight + 'px');
  buttonMenuDiv.style('background-color', 'rgba(255,255,255,255)');

  // logoImg.position(0, 0);

  hideShowButton.html(getTranslation("showControlInstruction"));
  hideShowButton.position(100, (buttonMenuDiv.height/2 - hideShowButton.height));

  captureButton.html(getTranslation("captureInstruction"));
  captureButton.position(hideShowButton.x + hideShowButton.width + 60, hideShowButton.y);
  
  resetButton.html(getTranslation("resetInstruction"));
  resetButton.position(captureButton.x + captureButton.width + 60, hideShowButton.y);
  
  translateButton.html(getTranslation("language"));
  translateButton.position(resetButton.x + resetButton.width + 60, hideShowButton.y);
}
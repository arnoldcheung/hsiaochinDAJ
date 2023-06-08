// sets up the control panel (base) ----------------------------------------------------------------------------------------
function setupControlPanel(){
  controlPanel = createDiv();
  controlPanel.class('controlPanel');
  controlPanel.style('background-color', 'rgba(255,255,255,0.6)');
  controlPanel.style('display', 'block');

  dajTitleText = createDiv(getTranslation("dajTitle"));
	dajTitleText.parent(controlPanel);
	dajTitleText.addClass('dajTitleText');

  resetControlPanel();
}

// sets up the Name input field ----------------------------------------------------------------------------------------
function setupNameInput(){
  // Create the name input field
  nameInput = createInput(getTranslation("nameInputDefaultInstruction")); // create the input
	nameInput.parent(controlPanel);
  nameInput.attribute('type', 'text');

  nameInput.elt.addEventListener('focus', function () {
    this.value = '';
    signature = true;
    signatureEvent();
  });

  nameInput.elt.addEventListener('blur', function() {
    if(this.value == ''){
      signature = false;
      this.value = getTranslation("nameInputDefaultInstruction");
    }
  });

	nameInput.input(sanitizeNameInput);
	// nameInput.touchStarted(signatureEvent);
	nameInput.mouseClicked(signatureEvent);

   // The font button next to the name input ----------------------------------------------------------------------------------------

  fontButton = createButton(getTranslation("fontInstruction"));
  fontButton.addClass('button-38');
  fontButton.addClass('panel-button');

  fontButton.parent(controlPanel);

  fontButton.mouseClicked(toggleFontSelection);

  resetNameInput();
}


// sets up the Message input field ----------------------------------------------------------------------------------------
function setupMessageInput(){
  // Create the name input field
  messageInput = createInput(getTranslation("messageInputDefaultInstruction")); // create the input
	messageInput.parent(controlPanel);
  messageInput.attribute('type', 'text');

  messageInput.elt.addEventListener('focus', function() {
    this.value = '';
    messageEvent();
  });

  messageInput.elt.addEventListener('blur', function() {
    if(this.value == ''){
      this.value = getTranslation("messageInputDefaultInstruction");
    }
  });

	messageInput.input(sanitizeMessageInput);
	// messageInput.touchStarted(signatureEvent);
	// messageInput.mouseClicked(signatureEvent);

  // The text before the manual modificaitions ----------------------------------------------------------------------------------------
  orTxt = createDiv(getTranslation("manualInstruction"));
  orTxt.parent(controlPanel);
  orTxt.addClass('controlPanelText');

    // The name of the element ----------------------------------------------------------------------------------------\
	elementName = createDiv(getTranslation('colorNameList')[currentColorSelectionIndex]);
	elementName.id("elementName")
	elementName.style('color', colorList[currentColorSelectionIndex]);
	// elementName.position(numberInput.x, orTxt.y + 30); // ***************************************************************************
	elementName.parent(controlPanel);
		
	// Create a button to toggle color selection ----------------------------------------------------------------------------------------
  nextElementButton = createButton(getTranslation("nextElementInstruction"));
  nextElementButton.addClass('button-38');
  nextElementButton.addClass('panel-button');
  nextElementButton.parent(controlPanel);
  nextElementButton.mouseClicked(toggleColorSelection);

  resetMessageInput();
}


// sets up the Number input field ----------------------------------------------------------------------------------------
function setupNumberInput(){
  generateIntroText = createDiv(getTranslation("generateInstruction"));
	generateIntroText.parent(controlPanel);
	generateIntroText.addClass('controlPanelText');

	numberInput = createInput(getTranslation("eightDigitInstruction"));
	numberInput.parent(controlPanel);
	
	numberInput.elt.addEventListener('focus', function() {
   		this.value = '';
  	});
	
	numberInput.attribute('type', 'tel');
	numberInput.attribute('pattern', '\\d*');
	numberInput.attribute('maxlength', '8');
	numberInput.input(validateNumberInput);

  // The go button next to the number input ----------------------------------------------------------------------------------------
	
	generateButton = createButton(getTranslation("goInstruction"));
  generateButton.addClass('button-38');
  generateButton.addClass('panel-button');
	generateButton.parent(controlPanel);
  generateButton.mouseClicked(generateUniverse);
	generateButton.touchEnded(generateUniverse);
  

  resetNumberInput();
}

// Sets up the color picker section ----------------------------------------------------------------------------------------\
function setupColorPicker(){

  // color intro text -----------------------------------------------------------------------------------
  colorIntroText = createDiv(getTranslation("colorInstruction"));
	colorIntroText.parent(controlPanel);
	colorIntroText.addClass('controlPanelText');

  // Sets up the color picker ----------------------------------------------------------------------------------------\
	iroPickerDiv = createDiv();
	iroPickerDiv.parent(controlPanel);
	iroPickerDiv.id("iroPickerDiv")
	
	iroP = new iro.ColorPicker('#iroPickerDiv',  {
    width: min(width * 0.6, controlPanel.height * 0.2),
    layoutDirection: 'horizontal', // the brightness bar is to the right
  });
	iroP.on('color:change', setColor)

  resetColorPicker();
}

// Sets up the three buttons ----------------------------------------------------------------------------------------\
function setupButtonMenu(){
  
  buttonMenuDiv = createDiv();

  buttonMenuDiv.position(0, height - buttonMenuHeight);
	buttonMenuDiv.style('width', width + 'px');
  buttonMenuDiv.style('height', buttonMenuHeight + 'px');
  // buttonMenuDiv.style('background-color', 'rgba(255,255,255,255)');
  buttonMenuDiv.style('display', 'block');
  buttonMenuDiv.addClass('controlPanel');

  // Create an image element for the logo and add it to the menu bar div
  // logoImg = createImg("assets/logos/MGM 3D Logo.png", "Logo");

  // logoImg.parent(buttonMenuDiv);

  // logoImg.style("height", "100%");
  // logoImg.style("margin-left", "10px"); // Add some left margin to position it from the left edge
  // logoImg.position(0, 0);


  // Create a button to toggle the control panel ----------------------------------------------------------------------------------------
  hideShowButton = createButton(getTranslation("showControlInstruction"));
  hideShowButton.parent(buttonMenuDiv);
  hideShowButton.addClass('button-38');
  // hideShowButton.position(100, (buttonMenuDiv.height/2 - hideShowButton.height));
  hideShowButton.mouseClicked(togglePanel);

  // hideShowButton.style('height', '20px');
  // hideShowButton.style('font-size', '16px');
  
  // Create a button to capture the canvas ----------------------------------------------------------------------------------------
  captureButton = createButton(getTranslation("captureInstruction"));
  captureButton.parent(buttonMenuDiv);
  captureButton.addClass('button-38');

  // captureButton.position(hideShowButton.x + hideShowButton.width + 60, hideShowButton.y);
  captureButton.mouseClicked(captureCanvas);

  // captureButton.style('height', '20px');
  // captureButton.style('font-size', '16px');

  // Create a button to reset ----------------------------------------------------------------------------------------
  resetButton = createButton(getTranslation("resetInstruction"));
  resetButton.parent(buttonMenuDiv);
  resetButton.addClass('button-38');

  // resetButton.position(captureButton.x + captureButton.width + 60, hideShowButton.y);
  resetButton.mouseClicked(resetUniverse);

  // Create a button to translate ----------------------------------------------------------------------------------------
  translateButton = createButton(getTranslation("language"));
  translateButton.parent(buttonMenuDiv);
  translateButton.addClass('button-38');

  // translateButton.position(resetButton.x + resetButton.width + 60, hideShowButton.y);
  translateButton.mouseClicked(toggleLanguage);

  // resetButton.style('height', '20px');
  // resetButton.style('font-size', '16px');

  // exhibitionTitleDiv = createDiv(getTranslation("exhibitionTitle"));
  // exhibitionTitleDiv.parent(buttonMenuDiv);
  // exhibitionTitleDiv.style("font-family", "Times New Roman, serif");
  // exhibitionTitleDiv.style("font-style", "italic");
  // exhibitionTitleDiv.style("font-size", "18px");
  // exhibitionTitleDiv.style("position", "absolute");
  // exhibitionTitleDiv.style("bottom", "20px");
  // exhibitionTitleDiv.style("right", "20px");
  // exhibitionTitle.style("margin-right", "40");

  resetButtonMenu();
}



// reset control panel --------------------------------------------------------------------------------------------------

function resetControlPanel(){
  controlPanel.position(0, 0);
	controlPanel.style('width', width * 0.27 + 'px');
  controlPanel.style('height', height + 'px');

  dajTitleText.html(getTranslation("dajTitle"))
	dajTitleText.position(30, 20);
}

function resetNameInput(){
	nameInput.position(numberInput.x, numberInput.y + numberInput.height + 15); // ***************************************************************************
	nameInput.style('width', controlPanel.width * 0.6 + 'px');
  nameInput.style('height', '20px');
  nameInput.value(getTranslation("nameInputDefaultInstruction"));

  fontButton.html(getTranslation("fontInstruction"));
  fontButton.position(nameInput.x + nameInput.width + 20, nameInput.y - fontButton.height / 2 + 30);
}

function resetMessageInput(){
	messageInput.position(30, nameInput.y + nameInput.height + 15); // ***************************************************************************
	messageInput.style('width', controlPanel.width * 0.6 + 'px');
  messageInput.style('height', '20px');
  messageInput.value(getTranslation("messageInputDefaultInstruction"));

  orTxt.html(getTranslation("manualInstruction"))
	orTxt.position(numberInput.x, messageInput.y + 40);

  elementName.html(getTranslation('colorNameList')[currentColorSelectionIndex]);
	elementName.position(numberInput.x, orTxt.y + 30); // ***************************************************************************
	elementName.style('color', colorList[currentColorSelectionIndex]);
  // elementName.position(numberInput.x, puntoCheckbox.y + 5 * sliderSpacing); // ***************************************************************************

  nextElementButton.html(getTranslation("nextElementInstruction"));
  nextElementButton.position(fontButton.x, elementName.y + 10);
}

function resetNumberInput(){

  generateIntroText.html(getTranslation("generateInstruction"));
  generateIntroText.position(30, 60); // ***************************************************************************

  // generateIntroText.position(messageInput.x, messageInput.y + messageInput.height + 15);	

	numberInput.style('width', controlPanel.width * 0.6 + 'px');
	numberInput.style('height', '20px');
	numberInput.position(30, generateIntroText.y + generateIntroText.height + 20); // ***************************************************************************
  numberInput.value(getTranslation("eightDigitInstruction"));

  generateButton.html(getTranslation("goInstruction"));
	generateButton.position(numberInput.x + numberInput.width + 20, numberInput.y);

}

function resetColorPicker(){

  colorIntroText.html(getTranslation("colorInstruction"));
  colorIntroText.position(numberInput.x, puntoCheckbox.y + 5 * sliderSpacing);	

  // colorIntroText.position(orTxt.x, elementName.y + elementName.height + 10);	

	iroPickerDiv.position(30, colorIntroText.y + colorIntroText.height + 10);
	
  iroP.resize(min(width * 0.6, controlPanel.height * 0.2))
}


function resetButtonMenu(){
  buttonMenuDiv.position(0, height - buttonMenuHeight);
  buttonMenuDiv.style('z-index', 100);
	buttonMenuDiv.style('width', width + 'px');
  buttonMenuDiv.style('height', buttonMenuHeight + 'px');
  // buttonMenuDiv.style('background-color', 'rgba(255,255,255,255)');

  // logoImg.position(0, 0);

  hideShowButton.html(getTranslation("showControlInstruction"));
  hideShowButton.position((width - 545) / 2, 35);
  // hideShowButton.position((width - 545) / 2, (buttonMenuDiv.height/2 - hideShowButton.height));

  captureButton.html(getTranslation("captureInstruction"));
  captureButton.position(hideShowButton.x + 140, hideShowButton.y);
  
  resetButton.html(getTranslation("resetInstruction"));
  resetButton.position(captureButton.x + 140, hideShowButton.y);
  
  translateButton.html(getTranslation("language"));
  translateButton.position(resetButton.x + 140, hideShowButton.y);
}